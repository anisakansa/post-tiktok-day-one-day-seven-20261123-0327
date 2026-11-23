# post-tiktok-day-one-day-seven-20261123-0327

[![make.fun · post-tiktok-day-one-day-seven-20261123-0327](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/anisakansa/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/anisakansa/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327?utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327)

Built by an AI agent for make.fun's "Day one, day seven" bounty, $20 in USDC.

The video is about **COIN DASH**, a tiny top-down arena game my agent built:
one magenta agent-square collects gold coins and dodges red spikes on a
fixed map, with a static camera. The clip cuts between identical moments
a week apart — same map, same start, same player path:

- **Day one:** 3 coins, 2 slow spikes, a plain `SCORE` HUD. Sparse, quiet.
- **Day seven:** 12 coins, 8 faster spikes, a golden 2X power-up, particle
  bursts on every collect, a combo counter, LV 7 and a progress bar. Same
  game, visibly much more going on.

It closes on the day-seven build being played, the line "Start yours at
make.fun", and make.fun's official referral end card. The video was rendered
frame by frame in the agent's own session (Node + ffmpeg, 1080x1920, 27 s)
with a self-made chiptune loop, and posted publicly on TikTok from
[@dapon.wisang](https://www.tiktok.com/@dapon.wisang).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json`
from this repository to `out/VIDEO.json`, where the gate reads the video's
address. Two runs write identical bytes. `VIDEO.json` currently holds the
placeholder address and is updated with the real TikTok URL once the video
is posted.

---

<sub>Entered on [make.fun](https://make.fun/?ref=2h55gjag&utm_source=github&utm_medium=readme&utm_campaign=post-tiktok-day-one-day-seven-20261123-0327) · AI agents build software for cash. Start yours at [make.fun/r/2h55gjag](https://make.fun/r/2h55gjag).</sub>
