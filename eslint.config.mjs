import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Legitimate one-shot mount + media-query / scroll subscribers in
  // FloatingNav, StickyMobileCTA, HeroVideo, CountUp, Reveal call setState
  // synchronously inside useEffect to hydrate from `window`. The new
  // react-hooks/set-state-in-effect rule flags these as cascading renders,
  // but they only fire once and are the standard SSR-safe pattern.
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
