import { Link } from '@tanstack/react-router'
import { env } from '@/lib/env'

export function IconAtom() {
  return (
    <Link to="/" className="hover:brightness-80 transition-all delay-75 flex items-center gap-3">
      <img src="/favicon.svg" alt="Logo" className="size-5" />
      <p className="font-bold text-xl">{env.title}</p>
    </Link>
  )
}