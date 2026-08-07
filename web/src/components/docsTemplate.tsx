import { docsOrder } from "@/routes/docs"
import { Link, useLocation } from '@tanstack/react-router'

// Hooks
import { useTranslation } from "react-i18next"

// Components
import { CopyButton } from "@/components/copyButton"
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "@/components/shadcn/ui/item"
import { Bot } from 'lucide-react'

export function DocsTemplate({ children, raw }: { children: React.ReactNode, raw: string }) {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  // This logic flattens hierarchical data. (Too dificult!)
  const docsList = docsOrder.flatMap((item) => [
    { title: item.title, link: item.link },
    ...(item.children ?? []).map((child) => ({ title: child.title, link: child.link }))
  ])

  // Too deficult logic! If you want to understand, ask AI.
  const currentDocsIndex = docsList.findIndex((doc) => doc.link === pathname)
  const previousDocs = currentDocsIndex > 0 ? docsList[currentDocsIndex - 1] : null
  const nextDocs = currentDocsIndex >= 0 && currentDocsIndex < docsList.length - 1 ? docsList[currentDocsIndex + 1] : null

  // Set Copy Prompt
  const copyPrompt = `# You are an explainer for the documentation.
The user's next page is ${nextDocs?.title || 'nothing'}

## Please explain the documentation according to the following rules:
- Explain in the user's language.
- If the user asks a question, prioritize answering it based on the documentation.
- If there is a subsequent page, please proactively ask, "Would you like me to explain that page?"

## The documentation is as follows:
${raw}`

  return (
    <div className='flex flex-col gap-10 p-7 sm:p-10'>
      <Item variant='muted'>
        <ItemMedia variant='image'>
          <Bot />
        </ItemMedia>

        <ItemContent>
          <ItemTitle>
            {t("routes.docs.copyPrompt.title")}
          </ItemTitle>

          <ItemDescription>
            {t("routes.docs.copyPrompt.description")}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <CopyButton>
            {copyPrompt}
          </CopyButton>
        </ItemActions>
      </Item>

      <div className='flex flex-col gap-3'>
        {children}
      </div>

      <div className='flex items-center'>
        {previousDocs ? (
          <Link to={previousDocs.link} className='text-muted-foreground hover:text-foreground flex flex-col gap-2 border px-6 py-4 w-[50%] sm:rounded-2xl sm:w-50 rounded-l-2xl'>
            <span className='text-xl'>Back</span>
            <span className='truncate'>{previousDocs.title}</span>
          </Link>
        ) : null}

        {nextDocs ? (
          <Link to={nextDocs.link} className='text-muted-foreground hover:text-foreground flex flex-col gap-2 border px-6 py-4 w-[50%] sm:rounded-2xl sm:w-50 rounded-r-2xl ml-auto text-right'>
            <span className='text-xl'>Next</span>
            <span className='truncate'>{nextDocs.title}</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
