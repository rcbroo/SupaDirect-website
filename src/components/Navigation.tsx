'use client';

import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import Link from "next/link";
import Image from "next/image";
import { CTA_LINKS } from "@/lib/cta-links";

export function Navigation() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-brand-green/95 backdrop-blur-md border-b border-brand-green-dark/30"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-brand-rose focus:text-white focus:rounded"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between relative">
        <div className="flex items-center gap-6 lg:gap-8">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0" aria-label="Supadirect home">
            <Image src="/logo-icon.svg" alt="" width={32} height={32} className="w-7 h-7 sm:w-8 sm:h-8" aria-hidden="true" />
            <h1 className="text-xl sm:text-2xl font-bold text-brand-rose cursor-pointer">supadirect</h1>
          </Link>
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Dropdown menus grouped together */}
            <div className="flex items-center gap-1 xl:gap-2">
              <DropdownMenu
                label="Features"
                items={[
                  { label: 'Features Overview', href: '/features', description: 'Complete platform features' },
                  { label: 'Frontend Hosting', href: '/features/hosting', description: 'Deploy to 150+ edge locations' },
                  { label: 'Real-Time Database', href: '/features/database', description: 'TypeScript-native with Convex API parity' },
                  { label: 'GPU/NPU Compute', href: '/features/compute', description: 'Run AI models and serverless functions' },
                ]}
              />
              <DropdownMenu
                label="Product"
                items={[
                  { label: 'Sync', href: '/sync', description: 'Real-time data synchronization' },
                  { label: 'Realtime', href: '/realtime', description: 'Live updates for your app' },
                  { label: 'Auth', href: '/auth', description: 'Built-in authentication' },
                  { label: 'Open source', href: '/open-source', description: 'Community-driven development' },
                  { label: 'AI coding', href: '/ai', description: 'AI-powered code generation' },
                ]}
              />
              <DropdownMenu
                label="Developers"
                items={[
                  { label: 'Docs →', href: CTA_LINKS.DOCS, description: 'Complete documentation' },
                  { label: 'Components', href: '/components', description: 'Pre-built components' },
                  { label: 'Templates', href: '/templates', description: 'Starter templates' },
                  { label: 'Startups Program', href: '/startups', description: 'Benefits for startups' },
                  { label: 'Champions Program', href: '/champions', description: 'Community champions' },
                  { label: 'Changelog →', href: CTA_LINKS.CHANGELOG, description: 'Recent changes' },
                  { label: 'Podcast →', href: CTA_LINKS.PODCAST, description: 'Developer interviews' },
                ]}
              />
              <DropdownMenu
                label="Company"
                items={[
                  { label: 'About us', href: '/about', description: 'Our story and mission' },
                  { label: 'Contact', href: '/contact', description: 'Get in touch' },
                  { label: 'Contact Sales', href: '/contact/sales', description: 'Talk to our sales team' },
                  { label: 'Brand', href: '/company/brand', description: 'Brand assets and guidelines' },
                  { label: 'Investors', href: '/company/investors', description: 'Investor information' },
                  { label: 'Partners', href: '/company/partners', description: 'Partnership opportunities' },
                  { label: 'Jobs', href: '/company/jobs', description: 'Join our team' },
                  { label: 'Events', href: '/company/events', description: 'Upcoming events' },
                ]}
              />
            </div>
            {/* Single link items grouped together */}
            <div className="hidden xl:flex items-center gap-4 ml-4 pl-4 border-l border-brand-rose/20">
              <Link href="/pricing" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2 text-sm whitespace-nowrap">Pricing</Link>
              <Link href="/faq" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2 text-sm whitespace-nowrap">FAQ</Link>
              <Link href="/blog" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2 text-sm whitespace-nowrap">Blog</Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={CTA_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-rose/80 hover:text-brand-rose flex items-center gap-1.5 transition-colors bg-brand-green-dark/50 hover:bg-brand-green-dark rounded-full px-2.5 py-1.5 text-sm"
            aria-label="View on GitHub - 16.4k stars"
          >
            <Github className="w-4 h-4" />
            <span className="hidden sm:inline font-medium">16.4k</span>
          </a>
          <Link href={CTA_LINKS.LOGIN} className="hidden sm:block">
            <Button variant="ghost" className="text-brand-rose hover:bg-brand-green-dark text-sm h-9">
              Log in
            </Button>
          </Link>
          <Link href={CTA_LINKS.SIGNUP} className="hidden sm:block">
            <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light shadow-md hover:shadow-lg transition-all duration-200 text-sm h-9">
              Sign up
            </Button>
          </Link>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
