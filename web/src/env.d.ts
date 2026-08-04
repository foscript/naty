declare module '*.mdx' {
  import type { ComponentType } from 'react'
  export default ComponentType<any>
}

declare module '*.mdx?mdxRaw' {
  export default string
}
