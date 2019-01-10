// eslint-disable-next-line filenames/match-exported
import { statSync, chmodSync } from "fs"

// Set EXECUTABLE bit on file mode
const EXECUTABLE_MODE = 0o111

export default function executable(options = {}) {
  return {
    name: "rollup-plugin-executable",

    generateBundle: ({ fileName }) => {
      const { mode } = statSync(fileName)

      // eslint-disable-next-line no-bitwise
      const newMode = mode | EXECUTABLE_MODE

      chmodSync(fileName, newMode)
    }
  }
}
