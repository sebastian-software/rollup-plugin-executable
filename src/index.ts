// eslint-disable-next-line filenames/match-exported
import { chmodSync, statSync } from "fs"

// Set EXECUTABLE bit on file mode
const EXECUTABLE_MODE = 0o111

interface Executable {
  name: string;
  generateBundle(options: any): void;
  writeBundle(): void;
}

export default function executable(options = {}): Executable {
  let file = null

  return {
    name: "rollup-plugin-executable",

    generateBundle(options): void {
      // Store main output file name here as `writeBundle` does not
      // have this data as it seems.
      file = options.file
    },

    writeBundle(): void {
      if (!file) {
        return
      }

      const { mode } = statSync(file)

      // eslint-disable-next-line no-bitwise
      const newMode = mode | EXECUTABLE_MODE

      chmodSync(file, newMode)
    }
  }
}
