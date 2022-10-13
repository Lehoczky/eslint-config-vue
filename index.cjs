// @ts-check
const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: [
    "only-warn",
    "unicorn",
    "@typescript-eslint",
    "sonarjs",
    "simple-import-sort",
    "promise",
    "jsdoc",
    "import",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
    extraFileExtensions: [".vue"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts", ".vue"],
      },
    },
  },
  rules: {
    // Possible Problems
    "no-constant-binary-expression": "warn",
    "no-constructor-return": "warn",
    "no-promise-executor-return": "warn",
    "no-unreachable-loop": "warn",

    // Suggestions
    complexity: ["warn", 13],
    "default-case-last": "warn",
    "dot-notation": "warn",
    eqeqeq: ["warn", "smart"],
    "func-style": ["warn", "declaration", { allowArrowFunctions: true }],
    "grouped-accessor-pairs": ["warn", "getBeforeSet"],
    "max-depth": ["warn", 6],
    "max-params": ["warn", { max: 8 }],
    "no-bitwise": "warn",
    "no-caller": "warn",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-extend-native": "warn",
    "no-implicit-coercion": ["warn", { boolean: false }],
    "no-lonely-if": "warn",
    "no-multi-str": "warn",
    "no-negated-condition": "warn",
    "no-nested-ternary": "warn",
    "no-return-assign": "warn",
    "no-throw-literal": "warn",
    "no-unneeded-ternary": "warn",
    "no-useless-concat": "warn",
    "no-var": "warn",
    "no-useless-return": "warn",
    "object-shorthand": "warn",
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "prefer-exponentiation-operator": "warn",
    "prefer-object-spread": "warn",
    "prefer-rest-params": "warn",
    "prefer-template": "warn",
    "require-await": "warn",
    yoda: ["warn", "never", { exceptRange: true }],

    // Unicorn
    "unicorn/catch-error-name": "warn",
    "unicorn/consistent-destructuring": "warn",
    "unicorn/error-message": "warn",
    "unicorn/new-for-builtins": "warn",
    "unicorn/no-array-push-push": "warn",
    "unicorn/no-array-reduce": ["warn", { allowSimpleOperations: true }],
    "unicorn/no-instanceof-array": "warn",
    "unicorn/no-unreadable-array-destructuring": "warn",
    "unicorn/no-unreadable-iife": "warn",
    "unicorn/no-useless-fallback-in-spread": "warn",
    "unicorn/no-useless-length-check": "warn",
    "unicorn/no-useless-promise-resolve-reject": "warn",
    "unicorn/no-useless-spread": "warn",
    "unicorn/numeric-separators-style": "warn",
    "unicorn/prefer-array-find": "warn",
    "unicorn/prefer-array-flat": "warn",
    "unicorn/prefer-array-flat-map": "warn",
    "unicorn/prefer-array-some": "warn",
    "unicorn/prefer-default-parameters": "warn",
    "unicorn/prefer-includes": "warn",
    "unicorn/prefer-ternary": "warn",
    "unicorn/throw-new-error": "warn",

    // Sonar
    "sonarjs/no-identical-conditions": "warn",
    "sonarjs/no-collapsible-if": "warn",
    "sonarjs/prefer-immediate-return": "warn",
    "sonarjs/prefer-object-literal": "warn",

    // Promise
    "promise/prefer-await-to-then": "warn",

    // JSdoc
    "jsdoc/check-alignment": "warn",
    "jsdoc/check-param-names": "warn",
    "jsdoc/check-property-names": "warn",
    "jsdoc/newline-after-description": "warn",
    "jsdoc/no-defaults": "warn",
    "jsdoc/no-types": "warn",

    // Import
    "import/no-useless-path-segments": "warn",
    "import/newline-after-import": "warn",

    // Simple import sort
    "simple-import-sort/imports": "warn",

    // TypeScript
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/class-literal-property-style": ["warn", "fields"],
    "@typescript-eslint/consistent-generic-constructors": [
      "warn",
      "constructor",
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["warn", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/consistent-type-imports": "warn",
    "@typescript-eslint/explicit-member-accessibility": [
      "warn",
      { accessibility: "no-public" },
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
    "@typescript-eslint/prefer-for-of": "warn",
    "@typescript-eslint/prefer-function-type": "warn",

    // Conflicts with ESLint
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "warn",
    "no-array-constructor": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "warn",
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "warn",

    // TypeScript turned off
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-function": "off",
  },
  overrides: [
    {
      files: ["*.{ts,mts,tsx,vue}"],
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
      },
      rules: {
        // Requires type checking
        "@typescript-eslint/no-confusing-void-expression": [
          "warn",
          { ignoreArrowShorthand: true },
        ],
        "@typescript-eslint/naming-convention": ["warn"],
        "@typescript-eslint/no-for-in-array": "warn",
        "@typescript-eslint/no-misused-promises": [
          "warn",
          { checksVoidReturn: false },
        ],
        "@typescript-eslint/no-unsafe-call": "warn",
        "@typescript-eslint/non-nullable-type-assertion-style": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": [
          "warn",
          {
            ignoreTernaryTests: false,
          },
        ],
        "@typescript-eslint/prefer-return-this-type": "warn",
        "@typescript-eslint/prefer-string-starts-ends-with": "warn",
        "@typescript-eslint/prefer-optional-chain": "warn",
        "@typescript-eslint/promise-function-async": [
          "warn",
          { checkArrowFunctions: false },
        ],

        // Conflict with ESLint
        "dot-notation": "off",
        "@typescript-eslint/dot-notation": "warn",
        "no-throw-literal": "off",
        "@typescript-eslint/no-throw-literal": "warn",
        "require-await": "off",
        "@typescript-eslint/require-await": "warn",
        "no-return-await": "off",
        "@typescript-eslint/return-await": ["warn", "always"],

        // Conflict with unicorn
        "unicorn/prefer-includes": "off",
        "@typescript-eslint/prefer-includes": "warn",
      },
    },
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        // "no-unused-vars": "off",
        "no-undef": "off",
        // "@typescript-eslint/no-unused-vars": "off",

        "vue/component-api-style": ["warn", ["script-setup"]],
        "vue/component-name-in-template-casing": [
          "warn",
          "PascalCase",
          {
            ignores: [],
          },
        ],
        "vue/custom-event-name-casing": ["warn", "kebab-case"],
        "vue/define-emits-declaration": ["error", "type-based"],
        "vue/next-tick-style": ["error", "promise"],
        "vue/no-ref-object-destructure": "warn",
        "vue/no-required-prop-with-default": "warn",
        "vue/no-static-inline-styles": "warn",
        "vue/no-this-in-before-route-enter": "warn",
        "vue/no-useless-v-bind": "warn",
        "vue/prefer-separate-static-class": "warn",
        "vue/prefer-true-attribute-shorthand": "warn",
        "vue/v-on-function-call": ["warn", "never"],
        "vue/eqeqeq": ["warn", "smart"],

        "vue/multi-word-component-names": "off",

        // Does not work well with `defineEmits`
        "@typescript-eslint/prefer-function-type": "off",
      },
    },
    {
      files: ["*.yaml", "*.yml"],
      parser: "yaml-eslint-parser",
      extends: ["plugin:yml/standard", "plugin:yml/prettier"],
      rules: {
        "yml/plain-scalar": "warn",
      },
    },
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.{js,cjs}"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  ignorePatterns: [
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "temp",
    "package-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
})
