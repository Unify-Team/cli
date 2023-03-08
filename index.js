const fs = require("fs")
fs.writeFile("hi.ts", `const fs = require("fs")`, () => {})
