import type { Linter } from 'eslint'
import neostandard from 'neostandard'

const config: Linter.Config[] = [
  ...neostandard({
    ts: true,
    globals: ['NodeJS'],
  }),
]

export default config
