import type { Plugin } from 'vite'
import fs from 'node:fs'

export const mdxRaw: () => Plugin = () => {
  const virtualPrefix = '\0mdxRaw'

  return {
    name: 'mdxRaw',

    resolveId(id) {
      const match = id.match(/^(.*\.mdx)\?mdxRaw(?:$|&)/)
      if (!match) return null

      return `${virtualPrefix}${match[1]}`
    },

    async load(id) {
      if (!id.startsWith(virtualPrefix)) return null

      const filePath = id.slice(virtualPrefix.length)
      const mdxRaw = await fs.promises.readFile(filePath, 'utf-8')

      return `export default ${JSON.stringify(mdxRaw)}`
    }
  }
}
