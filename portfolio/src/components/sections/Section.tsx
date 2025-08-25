import type { ReactNode } from 'react'

type Props = { id: string; title?: string; children: ReactNode }

export function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="py-16">
      {title ? <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2> : null}
      {children}
    </section>
  )
}

