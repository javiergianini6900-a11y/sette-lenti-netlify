// Shared by the functions: name slugs, JSON replies and name ownership.
// The first browser to use a name owns it: the "names" store keeps a hash of its token.
import { getStore } from "@netlify/blobs";
import { createHash } from "node:crypto";

export const slug = s => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 30);
export const json = (b, status = 200) => new Response(JSON.stringify(b), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
export const cleanName = s => String(s || "").replace(/[<>]/g, "").trim().slice(0, 24);

// returns {key, rec, save} or null when another token owns the name
export async function claim(name, token) {
  const key = slug(name);
  const th = createHash("sha256").update(String(token)).digest("hex");
  const names = getStore("names");
  const rec = (await names.get(key, { type: "json" })) || { th };
  if (rec.th !== th) return null;
  return { key, rec, save: () => names.setJSON(key, rec) };
}
