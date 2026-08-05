import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/shadcn/ui/item"
import { useTranslation } from "react-i18next"
import { CopyButton } from "@/components/copyButton"
import { Link, useLocation } from '@tanstack/react-router'
import { docsOrder } from "@/routes/docs"

export function DocsTemplate({ children, raw }: { children: React.ReactNode, raw: string }) {
  const { t } = useTranslation()
  const { pathname } = useLocation()

  // This logic flattens hierarchical data.
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
${nextDocs && `The user's next page is ${nextDocs.title}`}

## Please explain the documentation according to the following rules:
- Explain in the user's language.
- If the user asks a question, prioritize answering it based on the documentation.
- If there is a subsequent page, please proactively ask, "Would you like me to explain that page?"

## The documentation is as follows:
${raw}`

  return (
    <div className='flex flex-col gap-5 sm:px-10 px-5 pt-7.5 pb-10'>
      <Item variant='muted' className='mb-5'>
        <ItemContent>
          <ItemTitle>{t("routes.docs.copyPrompt.title")}</ItemTitle>
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

      {children}

      <div className='flex items-center mt-5'>
        {previousDocs ? (
          <Link to={previousDocs.link} className='text-muted-foreground hover:text-foreground flex flex-col gap-1 border px-6 py-4 w-[50%] sm:rounded-2xl sm:w-50 rounded-l-2xl'>
            <span className='text-xl'>Back</span>
            <span className='truncate'>{previousDocs.title}</span>
          </Link>
        ) : null}

        {nextDocs ? (
          <Link to={nextDocs.link} className='text-muted-foreground hover:text-foreground flex flex-col gap-1 border px-6 py-4 w-[50%] sm:rounded-2xl sm:w-50 ml-auto text-right rounded-r-2xl'>
            <span className='text-xl'>Next</span>
            <span className='truncate'>{nextDocs.title}</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
