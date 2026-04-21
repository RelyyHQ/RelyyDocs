const GITHUB_API = 'https://api.github.com'
const ORG = 'RelyyHQ'

function githubHeaders() {
  const token = process.env.GITHUB_TOKEN
  return {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

export type OrgData = {
  login: string
  name: string
  description: string
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
  following: number
}

export type RepoData = {
  id: number
  name: string
  full_name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  open_issues_count: number
  language: string | null
  topics: string[]
  fork_url: string
}

export type MemberData = {
  login: string
  avatar_url: string
  html_url: string
}

export async function getOrgData(): Promise<OrgData | null> {
  try {
    const res = await fetch(`${GITHUB_API}/orgs/${ORG}`, {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export async function getOrgRepos(names?: string[]): Promise<RepoData[]> {
  try {
    const res = await fetch(
      `${GITHUB_API}/orgs/${ORG}/repos?per_page=100&sort=updated&type=public`,
      { headers: githubHeaders(), next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const repos: RepoData[] = await res.json()
    const filtered = names ? repos.filter((r) => names.includes(r.name)) : repos
    return filtered.map((r) => ({
      ...r,
      fork_url: `${r.html_url}/fork`,
    }))
  } catch {
    return []
  }
}

export async function getOrgMembers(): Promise<MemberData[]> {
  try {
    const res = await fetch(`${GITHUB_API}/orgs/${ORG}/members?per_page=30`, {
      headers: githubHeaders(),
      next: { revalidate: 3600 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export const GITHUB_LINKS = {
  org: `https://github.com/${ORG}`,
  follow: `https://github.com/${ORG}`,
  sponsor: `https://github.com/sponsors/${ORG}`,
  repoStar: (repo: string) => `https://github.com/${ORG}/${repo}`,
  repoFork: (repo: string) => `https://github.com/${ORG}/${repo}/fork`,
  repoWatch: (repo: string) => `https://github.com/${ORG}/${repo}/subscription`,
}
