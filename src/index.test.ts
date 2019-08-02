import fs from "fs"
import { promisify } from "util"

import executablePlugin from "."

const stat = promisify(fs.stat)
const writeFile = promisify(fs.writeFile)
const removeFile = promisify(fs.unlink)

test("Makes executable", async () => {
  await writeFile("testfile", "testdata", {
    mode: 0o644
  })

  const plugin = executablePlugin()
  // @ts-ignore
  plugin.generateBundle({
    file: "testfile"
  })
  // @ts-ignore
  plugin.writeBundle()

  const { mode } = await stat("testfile")

  await removeFile("testfile")

  if (process.platform === "win32") {
    // on windows changing file mode has no influence to file mode
    expect(true).toBe(true)
  } else {
    expect(mode).toBe(0o100755)
  }
})
