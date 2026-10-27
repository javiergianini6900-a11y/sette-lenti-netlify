// Saves one finished hard-mode round. One blob per player, keyed by a slug of the name.
// The first browser to use a name owns it (token hash); others get 409.
import { getStore } from "@netlify/blobs";
import { createHash } from "node:crypto";

const slug = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 30);
const json = (b, status = 200) => new Response(JSON.stringify(b), { status, headers: { "content-type": "application/json" } });

export default async req => {
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let b; try { b = await req.json(); } catch { return json({ error: "body" }, 400); }
  const name = String(b.name || "").replace(/[<>]/g, "").trim().slice(0, 24);
  const ok = b.ok | 0, n = b.n | 0, token = String(b.token || "");
  const key = slug(name);
  if (!key || ![15, 30, 50].includes(n) || ok < 0 || ok > n || token.length < 16) return json({ error: "invalid" }, 400);
  const th = createHash("sha256").update(token).digest("hex");
  const store = getStore("leaderboard");
  const now = Date.now();
  const cur = await store.get(key, { type: "json" });
  if (cur && cur.th !== th) return json({ error: "taken" }, 409);
  // a round cannot be finished faster than ~2 s per question
  if (cur && now - cur.last < n * 2000) return json({ error: "fast" }, 429);
  const p = cur || { name, th, pts: 0, rounds: 0, best: 0, first: now };
  p.name = name; p.pts += ok; p.rounds += 1; p.best = Math.max(p.best, Math.round(ok / n * 100)); p.last = now;
  await store.setJSON(key, p);
  return json({ ok: true, pts: p.pts, rounds: p.rounds, best: p.best });
};

export const config = { path: "/api/score" };
