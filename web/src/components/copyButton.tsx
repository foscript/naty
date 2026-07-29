import { Button } from '@/components/shadcn/ui/button'
import { Copy, CopyCheck, CopyX } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import type { ParseKeys } from 'i18next'
import type { IconType } from 'react-icons/lib'

type CopyButton = React.ComponentProps<typeof Button> & {
  text: string
  show?: boolean
}

// Copy State
type CopyState = 'default' | 'complete' | 'error'
const copyStateMap: Record<CopyState, { localeKey: ParseKeys, Icon: IconType }> = {
  default: { localeKey: 'components.copyButton.default', Icon: Copy },
  complete: { localeKey: 'components.copyButton.complete', Icon: CopyCheck },
  error: { localeKey: 'components.copyButton.error', Icon: CopyX }
} as const

export function CopyButton({ text, show, ...props }: CopyButton) {
  const [copyState, setCopyState] = useState<CopyState>('default')
  const timeoutRef = useRef<number | null>(null)
  const { t } = useTranslation()

  // Reset timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Set copy button state
  const { localeKey, Icon } = copyStateMap[copyState]
  const label = show ? text : t(localeKey)

  async function handleCopy() {
    // Already copied
    if (copyState != 'complete') {
      return
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopyState('complete')
    } catch {
      setCopyState('error')
    } finally {
      // Set timeout
      timeoutRef.current = window.setTimeout(() => {
        setCopyState('default')
        timeoutRef.current = null
      }, 3000)
    }
  }

  return (
    <Button onClick={handleCopy} variant='outline' {...props}>
      {label}
      <Icon />
    </Button>
  )
}
