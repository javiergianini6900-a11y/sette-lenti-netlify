// Saves one finished session (hard mode, chapter exercise, shuffle, mock exam, main-site quiz).
// Points = correct answers; one blob per player in the "leaderboard" store.
import { getStore } from "@netlify/blobs";
import { json, cleanName, claim } from "../lib.mjs";

const KINDS = ["hard", "cap", "mix", "sim", "quiz"];

export default async req => {
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let b; try { b = await req.json(); } catch { return json({ error: "body" }, 400); }
  const name = cleanName(b.name), ok = b.ok | 0, n = b.n | 0, kind = String(b.kind || "hard"), token = String(b.token || "");
  if (!name || !KINDS.includes(kind) || n < 3 || n > 120 || ok < 0 || ok > n || token.length < 16) return json({ error: "invalid" }, 400);
  const c = await claim(name, token);
  if (!c) return json({ error: "taken" }, 409);
  const now = Date.now();
  // a session cannot be finished faster than ~1 s per question
  if (c.rec.lastScore && now - c.rec.lastScore < n * 1000) return json({ error: "fast" }, 429);
  c.rec.lastScore = now; await c.save();
  const store = getStore("leaderboard");
  const p = (await store.get(c.key, { type: "json" })) || { pts: 0, rounds: 0, best: 0, by: {}, first: now };
  p.name = name; p.pts += ok; p.rounds += 1; p.by = p.by || {}; p.by[kind] = (p.by[kind] || 0) + 1; p.last = now;
  if (n >= 15) p.best = Math.max(p.best || 0, Math.round(ok / n * 100));
  await store.setJSON(c.key, p);
  return json({ ok: true, pts: p.pts, rounds: p.rounds, best: p.best });
};

export const config = { path: "/api/score" };
