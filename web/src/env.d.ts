declare module '*.mdx' {
  import type { ComponentType } from 'react'

  export default ComponentType<any>
  export const rawMarkdown: string
}
