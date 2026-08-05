import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type LinkProps, Link } from '@tanstack/react-router'

// Components
import NotfoundDocs from '@/docs/notfound.mdx'
import notFoundDocsRaw from '@/docs/notfound.mdx?mdxRaw'
import { DocsBase } from '@/components/docsBase'
import { MDXProvider } from '@mdx-js/react'
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/docs')({
  component: App,
  notFoundComponent: NotFound
})

export const docsOrder: {
  title: string,
  link: LinkProps['to'],
  children?: { 
    title: string,
    link: LinkProps['to'] 
  }[]
}[] = [
  {
    title: 'Getting Started',
    link: '/docs/getting-started'
  },

  {
    title: 'Tutorial',
    link: '/docs/tutorial' as LinkProps['to'],
    children: [
      {
        title: 'Create a project',
        link: '/docs/tutorial/create-a-project' as LinkProps['to']
      }
    ]
  }
]

const mdxComponents = {
  h1: ({ children }: React.ComponentPropsWithoutRef<'h1'>) => (
    <h1 className='text-3xl font-semibold'>
      {children}
    </h1>
  ),

  h2: ({ children }: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2 className='text-xl font-semibold'>
      {children}
    </h2>
  ),

  li: ({ children }: React.ComponentPropsWithoutRef<'li'>) => (
    <li className='list-inside'>
      {children}
    </li>
  ),

  ul: ({ children }: React.ComponentPropsWithoutRef<'ul'>) => (
    <ul className='flex flex-col gap-2.5 list-disc'>
      {children}
    </ul>
  ),

  ol: ({ children }: React.ComponentPropsWithoutRef<'ol'>) => (
    <ol className='flex flex-col gap-2.5 list-decimal'>
      {children}
    </ol>
  ),

  a: ({ children, href, ...props }: React.ComponentPropsWithoutRef<'a'>) => {
    // If href is undefined, return nothing.
    if (typeof href === 'undefined') return

    // Case URL
    if (/^https?:\/\/\S+/.test(href)) {
      return (
        <a href={href} target='_blank' rel='noopener noreferrer' className='text-blue-500' {...props}>
          {children}
        </a>
      )
    }

    // Case Others
    return (
      <Link to={href as any} {...props} className='text-blue-500'>
        {children}
      </Link>
    )
  },

  code: ({ children }: React.ComponentPropsWithoutRef<'code'>) => (
    <code className='bg-muted p-1 rounded-sm'>
      {children}
    </code>
  ),

  p: ({ children }: React.ComponentPropsWithoutRef<'p'>) => (
    <p className='leading-loose'>
      {children}
    </p>
  )
}

function App() {
  return (
    <RootTemplate>
      <Header />

      <MDXProvider components={mdxComponents}>
        <Outlet />
      </MDXProvider>

      <Footer />
    </RootTemplate>
  )
}

function NotFound() {
  return (
    <DocsBase raw={notFoundDocsRaw}>
      <NotfoundDocs />
    </DocsBase>
  )
}
