import { env } from '@/lib/env'

export function Logo({ ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src='/favicon.svg' alt={env.appName} {...props} />
}
