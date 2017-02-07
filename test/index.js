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
      t.is(mode, 0o100755)
    })
)
