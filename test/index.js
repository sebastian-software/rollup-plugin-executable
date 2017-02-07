import test from "ava"
import fs from "fs"
import denodeify from "denodeify"

import executablePlugin from "../src"

const stat = denodeify(fs.stat)
const writeFile = denodeify(fs.writeFile)

test((t) =>
  writeFile("testfile", "testdata", {
    mode: 0o644
  })
    .then(() =>
    {
      const plugin = executablePlugin()
      plugin.onwrite({
        dest: "testfile"
      })

      return stat("testfile")
    })
    .then(({ mode }) =>
    {
      if (process.platform === "win32") {
        // on windows changing file mode has no influence to file mode
        t.is(true, true)
      } else {
        t.is(mode, 0o100755)
      }
    })
)
