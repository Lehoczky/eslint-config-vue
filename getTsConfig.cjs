const fs = require("fs")
const path = require("path")

function getTsConfig() {
  if (fs.existsSync("tsconfig.eslint.json")) {
    return path.resolve("tsconfig.eslint.json")
  }
  if (fs.existsSync("tsconfig.json")) {
    return path.resolve("tsconfig.json")
  }
  return undefined
}

exports.getTsConfig = getTsConfig
