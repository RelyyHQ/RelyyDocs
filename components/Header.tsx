"use client";

import { type ReactNode, useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";



import { menuGroups, primaryLinks } from "../app/ROUTES";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useTheme } from "nextra-theme-docs";



function HeaderLink({
  href,
  className,
  onClick,
  trackAsCta = false,
  trackingLabel,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  trackAsCta?: boolean;
  trackingLabel?: string;
  children: ReactNode;
}) {
  const handleClick = () => {
  

    onClick?.();
  };

  if (href.startsWith("mailto:")) {
    return (
      <Link href={href} className={className} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme:toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMobileMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl supports-backdrop-filter:bg-background/75">
      <div className="container mx-auto px-4 relative">
        <div className="flex h-18 items-center justify-between gap-4">
          <Link href="/" className="shrink-0">
            <div className="flex items-center justify-start">
              <Image
                src={process.env.NEXT_PUBLIC_SITE_LOGO as string}
                width={200}
                height={200}
                alt="relyy-logo"
                className="h-16 w-16 p-2"
              />
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-inter  text-foreground">
                  Relyy
                </span>
              </div>
            </div>
          </Link>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 items-center justify-center lg:flex">
           
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
                aria-label="Toggle theme"
                className="rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:text-foreground"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            )}
{/* 
            {loading ? null : (
              <Button
                asChild
                size="sm"
                className="rounded-full bg-mai-500 px-5 text-white hover:bg-mai-600"
              >
                <Link
                  href={accountHref}
                >
                  {accountLabel}
                </Link>
              </Button>
            )} */}
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle theme"
              className="rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:text-foreground"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
              className="rounded-full border border-border/60 bg-background/80 text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/60 py-4 lg:hidden">
            <Accordion type="multiple" className="space-y-2">
              {menuGroups.map((group) => (
                <AccordionItem
                  key={group.title}
                  value={group.title}
                  className="overflow-hidden rounded-3xl border border-border/60 bg-background/80 px-4"
                >
                  <AccordionTrigger className="py-4 text-sm font-semibold text-foreground hover:no-underline">
                    {group.title}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <p className="mb-4 text-sm leading-6 text-muted-foreground">
                      {group.description}
                    </p>
                    <div className="space-y-2">
                      {group.items.map((item) => (
                        <HeaderLink
                          key={item.title}
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="flex items-start gap-3 rounded-2xl border border-border/60 px-3 py-3 transition-colors hover:bg-accent/40"
                        >
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mai-500/10 text-mai-600 dark:text-mai-300">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground">
                              {item.title}
                            </div>
                            <p className="mt-1 text-sm leading-6 text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                        </HeaderLink>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-4 grid gap-2">
              {primaryLinks.map((item) => (
                <HeaderLink
                  key={item.title}
                  href={item.href}
                  onClick={closeMobileMenu}
                  trackAsCta
                  trackingLabel={item.title}
                  className="rounded-full border border-border/60 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent/40"
                >
                  {item.title}
                </HeaderLink>
              ))}
            </div>

            <div className="mt-4 rounded-3xl border border-border/60 bg-background/80 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    One product for every live workflow
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Built for creators, teams, events, and always-on channels.
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="border-mai-500/20 bg-mai-500/8 text-mai-700 dark:text-mai-300"
                >
                  Product-led
                </Badge>
              </div>

              {/* {loading ? null : (
                <Button
                  asChild
                  size="sm"
                  className="mt-4 w-full rounded-full bg-mai-500 text-white hover:bg-mai-600"
                >
                  <Link
                    href={accountHref}
                  >
                    {accountLabel}
                  </Link>
                </Button>
              )} */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
