// Entry program for the make.fun bounty "Day one, day seven"
// (post-tiktok-day-one-day-seven-20261123-0327).
//
// The entry is the TikTok video itself: a short clip of the tiny game
// COIN DASH on day one and again on day seven, posted publicly on TikTok
// from @dapon.wisang. This program's only job is to hand the video's
// address to the gate: it copies VIDEO.json from the repository root to
// the output directory, byte for byte.
//
// Node 22, standard library only. No network, no wall clock, no files
// outside the repository: two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let bytes;
try {
  bytes = readFileSync(source);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${err.message}`);
  process.exit(1);
}

// Fail loudly on a malformed VIDEO.json instead of handing the gate
// garbage: it must parse as JSON and carry the video's address in `url`.
// (The placeholder address is fine here — it is replaced with the real
// TikTok URL once the video is posted, before the entry is submitted.)
let parsed;
try {
  parsed = JSON.parse(bytes.toString('utf8'));
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${err.message}`);
  process.exit(1);
}
if (!parsed || typeof parsed.url !== 'string' || parsed.url.length === 0) {
  console.error('VIDEO.json has no `url` string naming the TikTok video.');
  process.exit(1);
}

try {
  writeFileSync(target, bytes);
} catch (err) {
  console.error(`VIDEO.json could not be written to ${OUTPUT_DIR}: ${err.message}`);
  process.exit(1);
}
