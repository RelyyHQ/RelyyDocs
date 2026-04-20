import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../../mdx-components'

type PageProps = {
  params: Promise<{ mdxPath?: string[] }>
}

const generateAllStaticParams = generateStaticParamsFor('mdxPath')

function normalizeMdxPath(mdxPath?: string[]) {
  return (mdxPath ?? []).filter(Boolean)
}

function toSegments(value: string | string[] | undefined) {
  if (Array.isArray(value)) return value.filter(Boolean)
  return value ? [value] : []
}

function withDeveloperDocsPrefix(mdxPath?: string[]) {
  return ['developer-docs', ...normalizeMdxPath(mdxPath)]
}

export async function generateStaticParams() {
  const allParams = await generateAllStaticParams()

  return allParams.flatMap(({ mdxPath }) => {
    const normalizedPath = toSegments(mdxPath)
    if (normalizedPath[0] !== 'developer-docs') return []
    const nestedPath = normalizedPath.slice(1)
    return nestedPath.length ? [{ mdxPath: nestedPath }] : [{}]
  })
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(withDeveloperDocsPrefix(params.mdxPath))
  return metadata
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(
    withDeveloperDocsPrefix(params.mdxPath)
  )
  const Wrapper = useMDXComponents().wrapper

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
