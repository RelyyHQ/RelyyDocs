import Link from 'next/link'
import Navigation from '../components/Header'
import GitHubStats from '../components/github-stats'
const RELYY_APP_URL = (process.env.NEXT_PUBLIC_RELYY_APP_URL || 'https://relyy.app').replace(/\/$/, '')

const docSections = [
  {
    href: '/docs',
    title: 'Documentation',
    description: 'End-user guides, product walkthroughs, and feature help for publishing faster with fewer surprises.',
    eyebrow: 'User Path'
  },
  {
    href: '/relyycast',
    title: 'RelyyCast Docs',
    description: 'Beginner-first setup, Cloudflare onboarding, stream workflows, and troubleshooting for production reliability.',
    eyebrow: 'Creator Path'
  },
  {
    href: '/developer-docs',
    title: 'Developer Docs',
    description: 'Integration references, API usage, architecture notes, and implementation details for technical teams.',
    eyebrow: 'Builder Path'
  }
]

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,110,114,0.16),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(248,250,252,0.98)_100%)] dark:bg-[radial-gradient(circle_at_top,rgba(0,110,114,0.28),transparent_56%),linear-gradient(180deg,rgba(0,0,0,0.98)_0%,rgba(10,15,26,0.98)_100%)]" />
<Navigation/>
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="relyy-landing-reveal mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-mai-500/25 bg-mai-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-mai-700 dark:text-mai-300">
            Relyy Documentation Hub
          </p>
          <h1 className="mt-5 text-balance text-4xl font-bold text-foreground md:text-6xl">
            Find the right documentation path in seconds.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
            The same design language as relyy.app, tuned for docs-first clarity and faster onboarding.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* <a
              href={`${RELYY_APP_URL}/pricing`}
              className="rounded-full border border-border/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent/50"
            >
              Pricing
            </a>
            <a
              href={`${RELYY_APP_URL}/login`}
              className="rounded-full bg-mai-500 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-mai-600"
            >
              Start Free
            </a> */}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 xl:grid-cols-3">
          {docSections.map((section, index) => (
            <Link
              key={section.href}
              href={section.href}
              className="relyy-landing-reveal group rounded-[1.35rem] border border-border/60 bg-background/78 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-mai-500/35 hover:bg-background/95 hover:shadow-xl"
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-mai-700 dark:text-mai-300">
                {section.eyebrow}
              </p>
              <h2 className="text-2xl font-semibold text-foreground">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-mai-700 transition-transform duration-300 group-hover:translate-x-1 dark:text-mai-300">
                Open docs
                <span className="ml-2">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <GitHubStats repos={['relyycast']} showMembers={true} />
    </main>
  )
}
