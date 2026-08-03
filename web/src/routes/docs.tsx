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

function App() {
  const mdxComponents = {
    h1: ({ children, ...props }: React.ComponentPropsWithoutRef<'h1'>) => (
      <h1 className='text-3xl font-semibold border-b-2 px-1 pb-2' {...props}>
        {children}
      </h1>
    ),

    h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
      <h2 className='text-2xl font-semibold border-b-2 px-1 pb-1' {...props}>
        {children}
      </h2>
    )
  }

  return (
    <RootTemplate>
      <Header />

      <MDXProvider components={mdxComponents}>
        <div className='p-6 flex flex-col gap-5'>
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
