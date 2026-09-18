# Active Prompt & Task Tracking (PROMPT.md)

## Latest User Prompt

```text
add readme.yml workflow to update the README.md based on scripts/update-readme.mjs
```

## Actionable Tasks

- [x] Task 1: Create dedicated `.github/workflows/readme.yml` workflow supporting both manual execution (`workflow_dispatch` with optional `username` parameter) and automated execution on `push` to `main`/`master` for script/workflow changes.
- [x] Task 2: Configure `.github/workflows/readme.yml` with `contents: write` permissions, Node.js 20 environment, and conditional git commit/push using `github-actions[bot]` with `[skip ci]`.
- [x] Task 3: Enhance `scripts/update-readme.mjs` with resilient URL regex replacements across all badge, script, release, and GitHub Pages links for seamless repeated execution.
- [x] Task 4: Add `Update README` workflow status badge to `README.md` and synchronize repository links with `mostuf2556`.
- [x] Task 5: Verify build, linting (`tsc --noEmit`), and script execution.

## Future / Backlog Tasks

- [ ] Future Task: Advanced multi-language TTS sequence playback (playing each language one after another in auto-TTS mode if configured).



