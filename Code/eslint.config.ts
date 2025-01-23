import pluginJs from "@eslint/js";
import type { Linter } from "eslint";
import globals from "globals";

const config: Linter.Config[] = [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];

export default config;
