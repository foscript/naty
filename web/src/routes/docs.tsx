import { createFileRoute, Link, Outlet, type LinkProps } from '@tanstack/react-router'
import { MDXProvider } from '@mdx-js/react'

// Components
import { RootTemplate } from '@/components/rootTemplate'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CopyButton } from '@/components/copyButton'

type SideLinkListLink = {
  title: string,
  link: LinkProps['to']
}

type SideLinkList = {
  title: string,
  link: LinkProps['to'],
  links?: SideLinkListLink[]
}

export const sideLinkList: SideLinkList[] = [
  {
    title: 'Getting Started',
    link: '/docs/getting-started'
  },

  {
    title: 'Create Template',
    link: '/docs/create-template',

    links: [
      {
        title: 'Quick Start',
        link: '/docs/create-template/quick-start'
      }
    ]
  }
]

function SideListLink({ link, title }: SideLinkListLink) {
  return (
    <Link
      to={link}
      className='text-sm truncate w-fit'
      activeProps={{ className: 'text-sidebar-primary' }}
      inactiveProps={{ className: 'text-muted-foreground hover:text-foreground' }}
    >
      {title}
    </Link>
  )
}

function SideLinkList({ link, title, links }: SideLinkList) {
  function SideLinkAccordionLink() {
    if (!links) return null

    return (
      <div className='pl-4 flex flex-col gap-4'>
        {links.map((linkData) => (
          <SideListLink key={linkData.link} link={linkData.link} title={linkData.title} />
        ))}
      </div>
    )
  }

  return (
    <div className='gap-4 flex flex-col'>
      <Link
        to={link}
        className='cursor-pointer text-sm truncate w-fit'
        activeOptions={{ exact: true }}
        activeProps={{ className: 'text-sidebar-primary' }}
        inactiveProps={{ className: 'text-muted-foreground hover:text-foreground' }}
      >
        {title}
      </Link>

      <SideLinkAccordionLink />
    </div>
  )
}

export const Route = createFileRoute('/docs')({
  component: App,
})

function App() {
  return (
    <RootTemplate>
      <Header />
      
      <div className='w-full flex'>
        <div className='w-75 p-5 flex flex-col gap-4 border-r'>
          {sideLinkList.map((linkData) => {
            if (linkData.links) {
              return (
                <SideLinkList key={linkData.link} title={linkData.title} link={linkData.link} links={linkData.links} />
              )
            } else {
              return <SideListLink key={linkData.link} link={linkData.link} title={linkData.title} />
            }
          })}
        </div>

        <MDXProvider components={{
          h1: ({ children }) => {
            return (
              <h1 className='text-3xl pb-1 pl-0.5 font-semibold'>{children}</h1>
            )
          },

          h2: ({ children }) => {
            return (
              <h2 className='text-2xl pb-1 pl-0.5 font-semibold'>{children}</h2>
            )
          },

          a: ({ children, href }) => {
            return (
              <Link to={href} className='w-fit flex text-sidebar-primary items-center gap-0.5'>
                {children}
              </Link>
            )
          },

          li: ({ children }) => {
            return (
              <li className='flex items-center gap-2'>{children}</li>
            )
          },

          ul: ({ children }) => {
            return (
              <ul className='flex flex-col gap-2'>{children}</ul>
            )
          },

          ol: ({ children }) => {
            return (
              <ol className='flex flex-col gap-2'>{children}</ol>
            )
          },

          code: ({ children }) => {
            return (
              <CopyButton show size='sm' text={children} />
            )
          }
        }}>
          <div className='w-[calc(100%-300px)] p-8 flex flex-col gap-10'>
            <Outlet />
          </div>
        </MDXProvider>
      </div>

      <Footer />
    </RootTemplate>
  )
}
