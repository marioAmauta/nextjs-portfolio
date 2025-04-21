import { FlatCompat } from "@eslint/eslintrc";
import importHelpers from "eslint-plugin-import-helpers";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      "import-helpers": importHelpers
    },
    rules: {
      "import-helpers/order-imports": [
        "error",
        {
          newlinesBetween: "always",
          groups: [
            ["/^next/", "module"],
            "/^@/styles/",
            "/^@/app/",
            "/^@/data-access/",
            "/^@/i18n/",
            "/^@/lib/",
            "/^@/providers/",
            "/^@/hooks/",
            "/^@/components/",
            ["parent", "sibling", "index"]
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true
          }
        }
      ],
      "@typescript-eslint/no-empty-object-type": "off",
      "no-console": "warn"
    }
  }
];
