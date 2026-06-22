import { cn } from '@/lib/shadcn/utils'
import { useDarkMode } from 'usehooks-ts'

export function RootOrganism({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  const { isDarkMode } = useDarkMode()

  return (
    <div className={cn(
      'min-h-svh w-full bg-background text-foreground',
      isDarkMode && 'dark',
      className
    )} {...props}>
      {children}
    </div>
  )
}
