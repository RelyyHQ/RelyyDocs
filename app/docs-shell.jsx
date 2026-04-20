"use client"
import Link from 'next/link'
import { Footer, Navbar } from 'nextra-theme-docs'
import { SITE_LOGO, appUrl } from './docs-config'

function RelyyBrand({ sectionLabel }) {
  return (
    <div className="flex items-center gap-3">
      <img
        src={SITE_LOGO}
        alt="Relyy"
        className="h-10 w-10 rounded-xl border border-border/60 bg-background/80 p-1"
      />
      <div className="leading-tight">
        <div className="text-base font-semibold text-foreground">Relyy Docs</div>
        <div className="text-xs text-muted-foreground">{sectionLabel}</div>
      </div>
    </div>
  )
}

export function RelyyDocsNavbar({ sectionLabel }) {
  return (
    <Navbar
      logo={<RelyyBrand sectionLabel={sectionLabel} />}
      projectLink={null}
      chatLink={null}
      className="relyy-docs-navbar"
    >
      <div className="relyy-nav-actions hidden items-center gap-2 md:flex">
        <Link
          href="/"
          className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent/40 hover:text-foreground"
        >
          Docs Home
        </Link>
        {/* <a
          href={appUrl('/pricing')}
          className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent/40 hover:text-foreground"
        >
          Pricing
        </a>
        <a
          href={appUrl('/dashboard')}
          className="rounded-full px-4 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-accent/40 hover:text-foreground"
        >
          Dashboard
        </a>
        <a
          href={appUrl('/login')}
          className="rounded-full bg-mai-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-mai-600"
        >
          Start Free
        </a> */}
      </div>
    </Navbar>
  )
}

export function RelyyDocsFooter() {
  return (
    <Footer className="relyy-docs-footer w-full">
      <div className="relyy-footer-shell w-full rounded-3xl border border-border/60 bg-background/85 p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Relyy Documentation</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Reliable guides, API references, and setup paths for every Relyy product.
            </p>
          </div>
          <Link
            href="/login"
            className="inline-flex items-center justify-center rounded-full bg-mai-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-mai-600"
          >
            Start Free
          </Link>
        </div>

        <div className="grid gap-6 border-t border-border/60 pt-6 text-sm md:grid-cols-3">
          <div className="space-y-2">
            <p className="font-semibold text-foreground">Docs</p>
            <Link href="/docs" className="block text-muted-foreground transition-colors hover:text-foreground">
              User Docs
            </Link>
            <Link
              href="/developer-docs"
              className="block text-muted-foreground transition-colors hover:text-foreground"
            >
              Developer Docs
            </Link>
            <Link href="/relyycast" className="block text-muted-foreground transition-colors hover:text-foreground">
              RelyyCast Docs
            </Link>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Platform</p>
            <a href={appUrl('/pricing')} className="block text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
            <a href={appUrl('/dashboard')} className="block text-muted-foreground transition-colors hover:text-foreground">
              Dashboard
            </a>
            <a href={appUrl('/contact')} className="block text-muted-foreground transition-colors hover:text-foreground">
              Contact
            </a>
          </div>

          <div className="space-y-2">
            <p className="font-semibold text-foreground">Legal</p>
            <a href={appUrl('/privacy')} className="block text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </a>
            <a
              href={appUrl('/terms-of-service')}
              className="block text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms of Service
            </a>
            <p className="pt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} Relyy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Footer>
  )
}
