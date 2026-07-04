import * as React from 'react'
import { Button } from '@/components/shadcn/ui/button'
import { Copy, CopyCheck, CopyX } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

type CopyButtonState = 'default' | 'complete' | 'error'
type CopyButton = React.ComponentProps<typeof Button> & {
  text: string
  show?: boolean
}

const copyButtonStateMap = {
  default: { labelKey: 'components.atom.copyButton.0', Icon: Copy },
  complete: { labelKey: 'components.atom.copyButton.1', Icon: CopyCheck },
  error: { labelKey: 'components.atom.copyButton.2', Icon: CopyX },
} as const

export function CopyButtonAtom({ text, show, ...props }: CopyButton) {
  const [copyState, setCopyState] = useState<CopyButtonState>('default')
  const timeoutRef = useRef<number | null>(null)
  const { t } = useTranslation()

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const { labelKey, Icon } = copyButtonStateMap[copyState]
  const buttonLabel = show ? text : t(labelKey)

  async function handleCopy() {
    if (copyState !== 'default') {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopyState('complete')
    } catch {
      setCopyState('error')
    } finally {
      timeoutRef.current = window.setTimeout(() => {
        setCopyState('default')
        timeoutRef.current = null
      }, 3000)
    }
  }

  return (
    <Button onClick={handleCopy} variant='outline' {...props}>
      {buttonLabel}
      <Icon />
    </Button>
  )
}
