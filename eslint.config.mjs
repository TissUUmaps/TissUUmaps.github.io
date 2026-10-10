import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  globalIgnores([
    ".docusaurus",
    "build",
    "node_modules",
    "releases",
    "versioned_docs",
    "versioned_sidebars",
    "static/app",
  ]),
  js.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,mts}"],
    languageOptions: {
      ecmaVersion: 2025,
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "no-duplicate-imports": "error",
      "object-shorthand": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
    },
  },
  {
    files: ["*.{js,ts,mjs,mts}", "scripts/**/*.{js,ts,mjs,mts}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    extends: [reactHooks.configs.flat.recommended],
  },
  eslintConfigPrettier,
]);
