// Returns every player sorted by total points.
import { getStore } from "@netlify/blobs";
import { json } from "../lib.mjs";

export default async () => {
  const store = getStore("leaderboard");
  const { blobs } = await store.list();
  const rows = (await Promise.all(blobs.map(b => store.get(b.key, { type: "json" }))))
    .filter(Boolean)
    .map(p => ({ name: p.name, pts: p.pts, rounds: p.rounds, best: p.best || 0, by: p.by || {}, last: p.last }))
    .sort((a, b) => b.pts - a.pts || b.best - a.best);
  return json(rows);
};

export const config = { path: "/api/leaderboard" };
