import fs from "fs"
import denodeify from "denodeify"

import executablePlugin from "../src"

const stat = denodeify(fs.stat)
const writeFile = denodeify(fs.writeFile)
const removeFile = denodeify(fs.unlinkSync)

/* eslint-disable no-magic-numbers */

test("Makes executable", () =>
  writeFile("testfile", "testdata", {
    mode: 0o644
  })
    .then(() => {
      const plugin = executablePlugin()
      plugin.generateBundle({
        file: "testfile"
      })
      plugin.writeBundle()

      return stat("testfile")
    })
    .then(({ mode }) => {
      if (process.platform === "win32") {
        // on windows changing file mode has no influence to file mode
        expect(true).toBe(true)
      } else {
        expect(mode).toBe(0o100755)
      }
    })
    .then(() => {
      removeFile("testfile")
    })
)
