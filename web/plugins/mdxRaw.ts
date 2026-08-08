import type { Plugin } from 'vite'
import fs from 'node:fs'

const virtualPrefix = '\0mdxRaw:'
const query = '?mdxRaw'

export const mdxRaw: () => Plugin = () => {
  return {
    name: 'mdxRaw',
    enforce: 'pre',

    async resolveId(id, importer) {
      // Check query
      if (!id.endsWith(query)) return null

      const filePath = id.slice(0, query.length)

      // Check extension
      if (!filePath.endsWith('.mdx')) return null

      // Resolve aliases and relative imports through Vite
      const resolvedPath = await this.resolve(filePath, importer, { skipSelf: true })

      // Check existence
      if (!resolvedPath) return null

      return `${virtualPrefix}${resolvedPath.id}`
    },

    // Path derived from virtual prefix
    async load(id) {
      // Check virtual prefix
      if (!id.startsWith(virtualPrefix)) return null

      const filePath = id.slice(virtualPrefix.length)
      const mdxRaw = await fs.promises.readFile(filePath, 'utf-8')

      // Return as a module
      // I am adding types to @/env.d.ts.
      return `export default ${JSON.stringify(mdxRaw)}`
    }
  }
}
