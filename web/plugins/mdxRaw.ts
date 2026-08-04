import type { Plugin } from 'vite'
import fs from 'node:fs'

export const mdxRaw: () => Plugin = () => {
  return {
    name: 'mdxRaw',
    enforce: 'pre',

    async load(id) {
      if (!id.endsWith('.mdx?mdxRaw')) return null
      
      const filePath = id.replace('?mdxRaw', '')
      const mdxRaw = await fs.promises.readFile(filePath, 'utf-8')

      return `export default ${JSON.stringify(mdxRaw)}`
    }
  }
}
