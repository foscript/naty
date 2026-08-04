// Components
import { Button } from '@/components/shadcn/ui/button'
import { Copy, CopyCheck, CopyX } from 'lucide-react'

// Hooks
import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'

import type { IconType } from 'react-icons/lib'

type CopyButton = React.ComponentProps<typeof Button> & {
  children: string
  show?: boolean
}

// Copy State
type CopyState = 'default' | 'complete' | 'error'
const copyStateMap: Record<CopyState, { Icon: IconType }> = {
  default: { Icon: Copy },
  complete: { Icon: CopyCheck },
  error: { Icon: CopyX }
} as const

export function CopyButton({ children, show, ...props }: CopyButton) {
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
  const { Icon } = copyStateMap[copyState]
  const label = show ? children : t('components.copyButton.state')

  async function handleCopy() {
    // Already copied
    if (copyState === 'complete') {
      return
    }

    try {
      await navigator.clipboard.writeText(children)
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
