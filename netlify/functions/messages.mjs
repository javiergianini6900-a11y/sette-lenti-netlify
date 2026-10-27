// Class message board. GET: newest 40. POST {name, text, token}: one message every 20 s per name.
// Keys count down from a far timestamp so the store lists newest first.
import { getStore } from "@netlify/blobs";
import { json, cleanName, claim } from "../lib.mjs";

export default async req => {
  const store = getStore("messages");
  if (req.method === "GET") {
    const { blobs } = await store.list();
    const keys = blobs.map(b => b.key).sort().slice(0, 40);
    const rows = (await Promise.all(keys.map(k => store.get(k, { type: "json" })))).filter(Boolean);
    return json(rows);
  }
  if (req.method !== "POST") return json({ error: "method" }, 405);
  let b; try { b = await req.json(); } catch { return json({ error: "body" }, 400); }
  const name = cleanName(b.name), text = String(b.text || "").replace(/\s+/g, " ").trim().slice(0, 280), token = String(b.token || "");
  if (!name || !text || token.length < 16) return json({ error: "invalid" }, 400);
  const c = await claim(name, token);
  if (!c) return json({ error: "taken" }, 409);
  const now = Date.now();
  if (c.rec.lastMsg && now - c.rec.lastMsg < 20000) return json({ error: "fast" }, 429);
  c.rec.lastMsg = now; await c.save();
  const key = String(9e12 - now).padStart(13, "0") + "-" + Math.random().toString(36).slice(2, 6);
  const msg = { name, text, at: now, ctx: String(b.ctx || "").slice(0, 40) };
  await store.setJSON(key, msg);
  return json({ ok: true, msg });
};

export const config = { path: "/api/messages" };
