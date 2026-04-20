import type { ReactNode } from 'react'

type TemplateProps = {
  children: ReactNode
}

function Template({ children }: TemplateProps) {
  return <>{children}</>
}

export default Template
