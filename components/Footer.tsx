import Link from "next/link";
import { footerLinks } from "@/app/ROUTES";
import Image from "next/image";
import { FaTwitter, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa6";
const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
  { icon: FaLinkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 bg-background border-t border-border text-foreground">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-12 pb-16 border-b border-border">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-10 h-10 rounded-xl bg-mai-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div> */}
              <Image
                className="rounded-lg"
                src="/relyy-app-icon.png"
                alt="Relyy Logo"
                width={40}
                height={40}
              />
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Relyy
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              Creator infrastructure that just works. Reliable streaming,
              intelligent tools, zero complexity.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-mai-500  hover:scale-105 active:scale-95"
                >
                  <Icon className="text-foreground" size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 font-semibold text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map(({ title, href }) => (
                  <li key={title}>
                    {href.startsWith("mailto:") ? (
                      <a
                        href={href}
                        className="text-sm text-gray-500 transition-colors hover:text-foreground"
                      >
                        {title}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm text-gray-500 transition-colors hover:text-foreground"
                      >
                        {title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-12 border-b border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-2 text-foreground">
                Stay in the loop
              </h4>
              <p className="text-gray-400 text-sm">
                Get product updates, tips, and creator stories.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-5 py-3 rounded-full bg-slate-200 dark:bg-slate-200 border border-slate-200 text-foreground placeholder:text-gray-500 focus:outline-none focus:border-mai-500 transition-colors"
              />
              <button className="px-6 py-3 bg-mai-500 rounded-full font-semibold hover:bg-mai-600 transition-transform hover:scale-105 active:scale-95 whitespace-nowrap text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Relyy. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-gray-500 text-sm">
            <Link
              href="/privacy"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="transition-colors hover:text-black dark:hover:text-white"
            >
              Cookies
            </Link>
          </div>
        </div>

        {/* Decorative gradient */}
        <div className="mt-16 h-px bg-linear-to-r from-transparent via-mai-500 to-transparent opacity-30" />
      </div>
    </footer>
  );
}
