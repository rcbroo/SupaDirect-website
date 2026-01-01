'use client';

import { Github, Star, GitFork, Users, Code, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    name: 'supadirect/supadirect',
    description: 'The full Supadirect backend platform - database, functions, auth, and more',
    stars: '16.4k',
    forks: '1.2k',
    language: 'Rust',
    languageColor: '#dea584',
  },
  {
    name: 'supadirect/supadirect-js',
    description: 'Official JavaScript/TypeScript client library for Supadirect',
    stars: '8.2k',
    forks: '620',
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'supadirect/supadirect-py',
    description: 'Official Python client library for Supadirect',
    stars: '3.4k',
    forks: '280',
    language: 'Python',
    languageColor: '#3572A5',
  },
  {
    name: 'supadirect/components',
    description: 'Official component library - reusable backend modules',
    stars: '2.8k',
    forks: '340',
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'supadirect/templates',
    description: 'Starter templates for building apps with Supadirect',
    stars: '1.9k',
    forks: '450',
    language: 'TypeScript',
    languageColor: '#3178c6',
  },
  {
    name: 'supadirect/cli',
    description: 'Command-line interface for Supadirect development',
    stars: '1.5k',
    forks: '180',
    language: 'Go',
    languageColor: '#00ADD8',
  },
];

const contributionAreas = [
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Core Development',
    description: 'Help build the Supadirect platform itself - work on database, functions, or the runtime.',
    link: '#'
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: 'Documentation',
    description: 'Improve our docs, write guides, create tutorials, or translate content.',
    link: '#'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community Support',
    description: 'Help answer questions on Discord, GitHub Discussions, and Stack Overflow.',
    link: '#'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Components & Templates',
    description: 'Build reusable components or starter templates for the community.',
    link: '#'
  },
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-brand-green">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-green/90 backdrop-blur-sm border-b border-[#53534B]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-brand-rose cursor-pointer">supadirect</h1>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <DropdownMenu
                label="Product"
                items={[
                  { label: 'Sync', href: '/sync', description: 'Real-time data synchronization' },
                  { label: 'Realtime', href: '/realtime', description: 'Live updates for your app' },
                  { label: 'Auth', href: '/auth', description: 'Built-in authentication' },
                  { label: 'Open source', href: '/open-source', description: 'Community-driven development' },
                  { label: 'AI coding', href: '/ai', description: 'AI-powered code generation' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
              />
              <DropdownMenu
                label="Developers"
                items={[
                  { label: 'Docs →', href: '#', description: 'Complete documentation' },
                  { label: 'Blog →', href: '/blog', description: 'Latest updates and tutorials' },
                  { label: 'Components', href: '/components', description: 'Pre-built components' },
                  { label: 'Templates', href: '/templates', description: 'Starter templates' },
                  { label: 'Startups', href: '#', description: 'Built for startups' },
                  { label: 'Champions', href: '#', description: 'Community champions' },
                  { label: 'Changelog', href: '#', description: 'Recent changes' },
                  { label: 'Podcast', href: '#', description: 'Developer interviews' },
                ]}
              />
              <Link href="/blog" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Blog</Link>
              <a href="#" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Docs</a>
              <Link href="/pricing" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-rose/90 hover:text-brand-rose flex items-center gap-2 transition-colors">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">16,435 stars</span>
            </a>
            <Button variant="ghost" className="text-brand-rose hidden sm:inline-flex">Log in</Button>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#1d1d1d] to-[#2d2d28] text-brand-rose">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Github className="w-20 h-20 mx-auto mb-6 text-brand-rose" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Built in the Open
            </h1>
            <p className="text-xl md:text-2xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              Supadirect is open source at its core. Contribute, learn, and build together with our community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-brand-rose/15 text-brand-green-darker hover:bg-gray-100 px-8 py-6 text-lg flex items-center gap-2">
                <Github className="w-5 h-5" />
                View on GitHub
              </Button>
              <Button variant="outline" className="border-2 border-white text-brand-rose hover:bg-brand-rose/15 hover:text-brand-green-darker px-8 py-6 text-lg">
                Contributing Guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '30K+', label: 'GitHub Stars', icon: <Star className="w-6 h-6" /> },
              { value: '500+', label: 'Contributors', icon: <Users className="w-6 h-6" /> },
              { value: '2.5K+', label: 'Forks', icon: <GitFork className="w-6 h-6" /> },
              { value: '50+', label: 'Repositories', icon: <Code className="w-6 h-6" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex justify-center text-[#208a8d] mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-brand-green-darker mb-2">{stat.value}</div>
                <div className="text-brand-green">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Our Projects</h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Explore our open source repositories and contribute to the future of backend development
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-rose/15 rounded-2xl p-6 border-2 border-gray-200 hover:border-[#208a8d] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-darker mb-2 flex items-center gap-2">
                      <Github className="w-5 h-5" />
                      {project.name}
                    </h3>
                    <p className="text-brand-green-dark text-sm">{project.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm text-brand-green">
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: project.languageColor }}
                    />
                    <span>{project.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributing */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            How to Contribute
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            There are many ways to get involved with Supadirect
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {contributionAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200 hover:border-[#208a8d] transition-colors"
              >
                <div className="text-[#208a8d] mb-4">{area.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-brand-green-darker">{area.title}</h3>
                <p className="text-brand-green-dark mb-4">{area.description}</p>
                <a href={area.link} className="text-[#208a8d] font-semibold hover:underline inline-flex items-center gap-2">
                  Get started →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* License */}
      <section className="py-20 px-6 bg-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-brand-green-darker">Apache 2.0 License</h2>
          <p className="text-xl text-brand-green-darker/80 mb-8">
            Supadirect is licensed under Apache 2.0, giving you the freedom to use, modify, and distribute our code. Build commercial products, contribute improvements, or fork for your own needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-[#1d1d1d] text-brand-rose hover:bg-[#2d2d2d] px-8 py-4">
              Read License
            </Button>
            <Button variant="outline" className="border-2 border-[#1d1d1d] text-brand-green-darker hover:bg-[#1d1d1d] hover:text-brand-rose px-8 py-4">
              View Source Code
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Join Our Community
          </h2>
          <p className="text-xl mb-8">
            Connect with developers, share ideas, and shape the future of Supadirect
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-brand-rose/15 text-[#208a8d] hover:bg-gray-100 px-8 py-6 text-lg">
              Join Discord
            </Button>
            <Button variant="outline" className="border-2 border-white text-brand-rose hover:bg-brand-rose/15 hover:text-[#208a8d] px-8 py-6 text-lg">
              View Discussions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1d] text-brand-rose py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold">supadirect</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/sync" className="hover:text-brand-rose">Sync</Link></li>
                <li><Link href="/realtime" className="hover:text-brand-rose">Realtime</Link></li>
                <li><Link href="/auth" className="hover:text-brand-rose">Auth</Link></li>
                <li><Link href="/open-source" className="hover:text-brand-rose">Open source</Link></li>
                <li><Link href="/ai" className="hover:text-brand-rose">AI coding</Link></li>
                <li><Link href="/faq" className="hover:text-brand-rose">FAQ</Link></li>
                <li><Link href="/pricing" className="hover:text-brand-rose">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-brand-rose">Docs →</a></li>
                <li><Link href="/blog" className="hover:text-brand-rose">Blog →</Link></li>
                <li><Link href="/components" className="hover:text-brand-rose">Components</Link></li>
                <li><Link href="/templates" className="hover:text-brand-rose">Templates</Link></li>
                <li><a href="#" className="hover:text-brand-rose">Startups</a></li>
                <li><a href="#" className="hover:text-brand-rose">Champions</a></li>
                <li><a href="#" className="hover:text-brand-rose">Changelog</a></li>
                <li><a href="#" className="hover:text-brand-rose">Podcast</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-brand-rose">About us</Link></li>
                <li><a href="#" className="hover:text-brand-rose">Brand</a></li>
                <li><a href="#" className="hover:text-brand-rose">Investors</a></li>
                <li><a href="#" className="hover:text-brand-rose">Become a partner</a></li>
                <li><a href="#" className="hover:text-brand-rose">Jobs</a></li>
                <li><a href="#" className="hover:text-brand-rose">Events</a></li>
                <li><Link href="/legal/terms" className="hover:text-brand-rose">Terms of service</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-brand-rose">Privacy policy</Link></li>
                <li><Link href="/legal/security" className="hover:text-brand-rose">Security</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-brand-rose">Twitter →</a></li>
                <li><a href="#" className="hover:text-brand-rose">Discord →</a></li>
                <li><a href="#" className="hover:text-brand-rose">YouTube →</a></li>
                <li><a href="#" className="hover:text-brand-rose">GitHub →</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="space-y-2 text-sm text-white/50 mb-6">
              <p className="font-semibold">A Trusted Solution</p>
              <p>✓ SOC 2 Type II Compliant</p>
              <p>✓ HIPAA Compliant</p>
              <p>✓ GDPR Verified</p>
            </div>
            <p className="text-sm text-white/50">©2025 Supadirect, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
