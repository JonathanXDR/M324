/**
 * @filename: lint-staged.config.js
 * @type {import('lint-staged').Configuration}
 */
export default {
  '*.{js,jsx,ts,tsx,vue,json,css,scss,md}': (stagedFiles) => [
    `npx prettier --write ${stagedFiles.join(' ')}`,
    `npx eslint --fix ${stagedFiles.join(" ")}`,
  ],
  '**/*.{ts,tsx}': () => 'npx tsc --noEmit',
}
