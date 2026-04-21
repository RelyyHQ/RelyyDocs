import { Banner } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { DOCS_REPOSITORY_BASE } from '../../docs-config'
import { RelyyDocsFooter, RelyyDocsNavbar } from '../../docs-shell'
import GitHubStats from '../../../../components/github-stats'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const Layout = dynamic(() => import('nextra-theme-docs').then(mod => mod.Layout), {
  ssr: true
})
const banner = <Banner storageKey="relyycast-docs-banner" dismissible={false}>RelyyCast Documentation</Banner>

const navbar = <RelyyDocsNavbar sectionLabel="RelyyCast Docs" />

const footer = <RelyyDocsFooter />

function getScopedPageMap(rootPageMap, route) {
  let scoped = rootPageMap
  const segments = route.split('/').filter(Boolean)
 
  for (const segment of segments) {
    const folder = scoped.find(
      item => item && 'name' in item && 'children' in item && item.name === segment
    )

    if (!folder || !Array.isArray(folder.children)) {
      return rootPageMap
    }

    scoped = folder.children
  }

  return scoped
}

function sanitizePageMap(list) {
  if (!Array.isArray(list)) return []

  return list
    .filter(Boolean)
    .map(item => {
      if ('children' in item && Array.isArray(item.children)) {
        return {
          ...item,
          children: sanitizePageMap(item.children)
        }
      }
      return item
    })
}

export default async function RelyyCastDocsLayout({ children }) {
  const rootPageMap = await getPageMap('/').catch(() => [])
  const scopedPageMap = getScopedPageMap(rootPageMap, '/relyycast')
  const pageMap = sanitizePageMap(scopedPageMap)

  return (
    <div className="relyy-docs-shell" suppressHydrationWarning>
      <Layout
        banner={banner}
        navbar={navbar}
        pageMap={pageMap}
        docsRepositoryBase={DOCS_REPOSITORY_BASE}
        footer={footer}
        nextThemes={{
          attribute: 'class',
          defaultTheme: 'system',
          disableTransitionOnChange: true
        }}
      >
        <Suspense>
        {children}
        </Suspense>
        <div className="mt-12 border-t border-border/40 pt-10">
          <GitHubStats repos={['relyycast']} showMembers={false} compact={true} />
        </div>
      </Layout>
    </div>
  )
}
