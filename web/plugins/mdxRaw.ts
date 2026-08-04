import type { Plugin } from 'vite'
import fs from 'node:fs'

export const mdxRaw: () => Plugin = () => {
  const virtualPrefix = '\0mdxRaw:'

  return {
    name: 'mdxRaw',
    enforce: 'pre',

    resolveId(id) {
      // Check ?mdxRaw query
      if (!id.endsWith('?mdxRaw')) return null

      // Check .mdx extension
      const filePath = id.slice(0, -'?mdxRaw'.length)
      if (!filePath.endsWith('.mdx')) return null

      // Return virtual path
      return `${virtualPrefix}${filePath}`
    },

    async load(id) {
      if (!id.startsWith(virtualPrefix)) return null

      // Get
      const filePath = id.slice(virtualPrefix.length)
      const mdxRaw = await fs.promises.readFile(filePath, 'utf-8')

      // Return as a module
      return `export default ${JSON.stringify(mdxRaw)}`
    }
  }
}
