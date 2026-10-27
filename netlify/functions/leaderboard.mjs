// Returns every player sorted by total hard-mode points (no tokens).
import { getStore } from "@netlify/blobs";

export default async () => {
  const store = getStore("leaderboard");
  const { blobs } = await store.list();
  const rows = (await Promise.all(blobs.map(b => store.get(b.key, { type: "json" }))))
    .filter(Boolean)
    .map(p => ({ name: p.name, pts: p.pts, rounds: p.rounds, best: p.best, last: p.last }))
    .sort((a, b) => b.pts - a.pts || b.best - a.best);
  return new Response(JSON.stringify(rows), { headers: { "content-type": "application/json", "cache-control": "no-store" } });
};

export const config = { path: "/api/leaderboard" };
