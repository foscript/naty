import { createFileRoute, Outlet } from '@tanstack/react-router'
import { type LinkProps } from '@tanstack/react-router'

// Components
import NotfoundDocs from '@/docs/notfound.mdx'
import { MDXProvider } from '@mdx-js/react'
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const Route = createFileRoute('/docs')({
  component: App,
  notFoundComponent: NotFound
})

export const docsOrder: { title: string; link: LinkProps['to'] }[] = [
  {
    title: 'Getting Started',
    link: '/docs/getting-started' as LinkProps['to']
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

  a: ({ children, ...props }: React.ComponentPropsWithoutRef<'a'>) => (
    <a className='text-blue-500' target='_blank' rel='noopener noreferrer' {...props}>
      {children}
    </a>
  ),

  code: ({ children }: React.ComponentPropsWithoutRef<'code'>) => (
    <code className='bg-muted px-2 py-1 rounded-md'>
      {children}
    </code>
  )
}

function App() {
  return (
    <RootTemplate>
      <Header />

      <MDXProvider components={mdxComponents}>
        <div className='sm:px-10 px-5 py-15 flex flex-col gap-5'>
          <Outlet />
        </div>
      </MDXProvider>

      <Footer />
    </RootTemplate>
  )
}

function NotFound() {
  return <NotfoundDocs />
}
