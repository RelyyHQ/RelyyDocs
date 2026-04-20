export const RELYY_APP_URL = (process.env.NEXT_PUBLIC_RELYY_APP_URL || 'https://relyy.app').replace(/\/$/, '')

export const SITE_LOGO = process.env.NEXT_PUBLIC_SITE_LOGO || '/relyy-app-icon.png'

export const DOCS_REPOSITORY_BASE =
  process.env.NEXT_PUBLIC_DOCS_REPO_BASE || 'https://github.com/rherndo6/relyydocs/tree/main'

export function appUrl(path) {
  return `${RELYY_APP_URL}${path}`
}