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

function withRelyyCastPrefix(mdxPath?: string[]) {
  return ['relyycast', ...normalizeMdxPath(mdxPath)]
}

export async function generateStaticParams() {
  const allParams = await generateAllStaticParams()

  return allParams.flatMap(({ mdxPath }) => {
    const normalizedPath = toSegments(mdxPath)
    if (normalizedPath[0] !== 'relyycast') return []
    const nestedPath = normalizedPath.slice(1)
    return nestedPath.length ? [{ mdxPath: nestedPath }] : [{}]
  })
}

export async function generateMetadata(props: PageProps) {
  const params = await props.params
  const { metadata } = await importPage(withRelyyCastPrefix(params.mdxPath))
  return metadata
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } = await importPage(
    withRelyyCastPrefix(params.mdxPath)
  )
  const Wrapper = useMDXComponents().wrapper

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
