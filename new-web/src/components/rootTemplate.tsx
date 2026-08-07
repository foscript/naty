import { cn } from '@/lib/shadcn/utils'

export function RootTemplate({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={cn(
      'min-h-svh w-screen bg-background text-foreground',
      className
    )} {...props} />
  )
}
