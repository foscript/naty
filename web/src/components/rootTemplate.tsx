import { cn } from '@/lib/shadcn/utils'

export function RootTemplate({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn(
      'min-h-svh w-full bg-background text-foreground',
      className
    )} {...props} />
  )
}
