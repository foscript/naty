import type React from 'react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from '@/components/shadcn/ui/item'

export function AnnounceDocsOnly({ children, description, title, icon }: { children: React.ReactNode, description: string, title: string, icon: React.ReactNode }) {
  return (
    <Item variant='muted'>
      <ItemMedia variant='image'>
        {icon}
      </ItemMedia>
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        <ItemDescription>
          {description}
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        {children}
      </ItemActions>
    </Item>
  )
}
