import type { Linter } from "eslint";
import neostandard from "neostandard";

const config: Linter.Config[] = [
  ...neostandard({
    noStyle: true,
    ts: true,
    globals: ['NodeJS'],
  }),
];

export default config;
