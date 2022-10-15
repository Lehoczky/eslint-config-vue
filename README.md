# Eslint config Vue

## Setup

```sh
npm i @lehoczky/eslint-config-vue -D
```

.eslintrc.cjs

```cjs
module.exports = {
  root: true,
  extends: ["@lehoczky/eslint-config-vue"],
}
```

tsconfig.eslint.json

```json
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "module": "esnext",
    "moduleResolution": "node",
    "allowJs": true
  },
  "include": ["**/*.ts", "**/*.vue", ".eslintrc.cjs"]
}
```
