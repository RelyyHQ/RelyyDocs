import { Star, GitFork, Eye, Users, ExternalLink } from 'lucide-react'
import { getOrgData, getOrgMembers, getOrgRepos, GITHUB_LINKS, type RepoData } from '../lib/github'

function StatPill({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-xs font-medium text-muted-foreground">
      {icon}
      <span className="font-semibold text-foreground">{value.toLocaleString()}</span>
      {label}
    </span>
  )
}

function RepoCard({ repo }: { repo: RepoData }) {
  return (
    <div className="rounded-2xl border border-border/60 bg-background/80 p-5 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-foreground hover:text-mai-600 dark:hover:text-mai-300"
          >
            {repo.name}
            <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-50" />
          </a>
          {repo.description && (
            <p className="mt-1 text-sm leading-6 text-muted-foreground line-clamp-2">
              {repo.description}
            </p>
          )}
        </div>
        {repo.language && (
          <span className="shrink-0 rounded-full border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground">
            {repo.language}
          </span>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <StatPill icon={<Star className="h-3.5 w-3.5" />} label="stars" value={repo.stargazers_count} />
        <StatPill icon={<GitFork className="h-3.5 w-3.5" />} label="forks" value={repo.forks_count} />
        <StatPill icon={<Eye className="h-3.5 w-3.5" />} label="watching" value={repo.watchers_count} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <a
          href={GITHUB_LINKS.repoStar(repo.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-mai-500/10 px-3 py-1.5 text-xs font-semibold text-mai-700 transition-colors hover:bg-mai-500/20 dark:text-mai-300"
        >
          <Star className="h-3.5 w-3.5" />
          Star
        </a>
        <a
          href={GITHUB_LINKS.repoFork(repo.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
        >
          <GitFork className="h-3.5 w-3.5" />
          Fork
        </a>
        <a
          href={GITHUB_LINKS.repoWatch(repo.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-accent/50 hover:text-foreground"
        >
          <Eye className="h-3.5 w-3.5" />
          Watch
        </a>
      </div>
    </div>
  )
}

type GitHubStatsProps = {
  repos?: string[]
  showMembers?: boolean
  compact?: boolean
}

export default async function GitHubStats({
  repos: repoNames,
  showMembers = true,
  compact = false,
}: GitHubStatsProps) {
  const [org, repos, members] = await Promise.all([
    getOrgData(),
    getOrgRepos(repoNames),
    showMembers ? getOrgMembers() : Promise.resolve([]),
  ])

  if (!org && repos.length === 0) return null

  if (compact) {
    const repo = repos[0]
    if (!repo) return null
    return <RepoCard repo={repo} />
  }

  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-mai-700 dark:text-mai-300">
              Open Source
            </p>
            <h2 className="mt-1 text-2xl font-bold text-foreground">
              {org?.name ?? 'RelyyHQ'} on GitHub
            </h2>
            {org?.description && (
              <p className="mt-1 text-sm text-muted-foreground">{org.description}</p>
            )}
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            {org && (
              <StatPill
                icon={<Users className="h-3.5 w-3.5" />}
                label="followers"
                value={org.followers}
              />
            )}
            <a
              href={GITHUB_LINKS.follow}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-mai-500 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-mai-600"
            >
              Follow @RelyyHQ
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>

        {members.length > 0 && (
          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Contributors
            </p>
            <div className="flex flex-wrap gap-2">
              {members.map((m) => (
                <a
                  key={m.login}
                  href={m.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={m.login}
                  className="group relative"
                >
                  <img
                    src={m.avatar_url}
                    alt={m.login}
                    className="h-8 w-8 rounded-full border border-border/60 transition-all group-hover:ring-2 group-hover:ring-mai-500/60"
                  />
                </a>
              ))}
              <a
                href={GITHUB_LINKS.org}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-8 items-center rounded-full border border-border/60 bg-background/80 px-3 text-xs text-muted-foreground hover:text-foreground"
              >
                View all →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
