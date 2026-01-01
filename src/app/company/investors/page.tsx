'use client';

import { Github, TrendingUp, Users, Award, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InvestorsPage() {
  const fundingRounds = [
    {
      round: 'Series A',
      amount: '$35M',
      date: 'March 2024',
      lead: 'Accel',
      description: 'Expansion into enterprise market and team growth',
    },
    {
      round: 'Seed',
      amount: '$8M',
      date: 'June 2022',
      lead: 'Sequoia Capital',
      description: 'Product development and initial market entry',
    },
  ];

  const investors = [
    { name: 'Accel', stage: 'Series A Lead', logo: 'AC' },
    { name: 'Sequoia Capital', stage: 'Seed Lead', logo: 'SQ' },
    { name: 'Andreessen Horowitz', stage: 'Investor', logo: 'A16Z' },
    { name: 'Y Combinator', stage: 'Accelerator', logo: 'YC' },
    { name: 'Index Ventures', stage: 'Investor', logo: 'IX' },
    { name: 'Greylock Partners', stage: 'Investor', logo: 'GL' },
  ];

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
                  { label: 'Startups', href: '/startups', description: 'Built for startups' },
                  { label: 'Champions', href: '/champions', description: 'Community champions' },
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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <TrendingUp className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Backed by World-Class Investors
            </h1>
            <p className="text-xl md:text-2xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              We're grateful to partner with investors who share our vision of empowering developers to build better applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$43M', label: 'Total Funding Raised', icon: <DollarSign className="w-6 h-6" /> },
              { value: '2', label: 'Funding Rounds', icon: <TrendingUp className="w-6 h-6" /> },
              { value: '6+', label: 'World-Class Investors', icon: <Users className="w-6 h-6" /> },
              { value: '2021', label: 'Year Founded', icon: <Award className="w-6 h-6" /> },
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

      {/* Funding Rounds */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Funding History
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Our journey from seed to Series A
          </p>

          <div className="space-y-6">
            {fundingRounds.map((round, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <h3 className="text-2xl font-bold text-brand-green-darker">{round.round}</h3>
                      <span className="text-3xl font-bold text-[#208a8d]">{round.amount}</span>
                    </div>
                    <p className="text-brand-green-dark mb-2">{round.description}</p>
                    <div className="text-sm text-brand-green">
                      <span className="font-semibold">Lead Investor:</span> {round.lead}
                    </div>
                  </div>
                  <div className="text-brand-green md:text-right">
                    <div className="text-sm font-semibold">{round.date}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Our Investors
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Partnering with the best in the industry
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {investors.map((investor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200 hover:border-[#208a8d] transition-colors text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-brand-rose rounded-full flex items-center justify-center text-brand-rose text-2xl font-bold">
                  {investor.logo}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-green-darker">{investor.name}</h3>
                <p className="text-brand-green text-sm">{investor.stage}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We're Investing */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">
            Why Investors Choose Supadirect
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Massive Market Opportunity',
                description: 'The backend-as-a-service market is projected to reach $15B by 2027. Developers are increasingly looking for unified platforms that simplify infrastructure.',
              },
              {
                title: 'Product-Led Growth',
                description: 'Our developer-first approach has led to viral growth with 50,000+ developers and 99% customer satisfaction. Word-of-mouth drives our expansion.',
              },
              {
                title: 'Strong Technical Moat',
                description: 'Proprietary real-time sync technology, TypeScript-first architecture, and deep framework integrations create significant competitive advantages.',
              },
              {
                title: 'World-Class Team',
                description: 'Leadership from Google, Stripe, Firebase, and Vercel. Deep expertise in distributed systems, databases, and developer tools.',
              },
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
              >
                <h3 className="text-2xl font-bold mb-3 text-brand-green-darker">{reason.title}</h3>
                <p className="text-brand-green-dark leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Relations */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Investor Relations
          </h2>
          <p className="text-xl text-brand-rose/90 mb-8">
            For investor inquiries, please contact our team
          </p>
          <a href="mailto:investors@supadirect.com">
            <Button className="bg-brand-rose/15 text-[#208a8d] hover:bg-gray-100 px-8 py-4">
              Contact Investor Relations
            </Button>
          </a>
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
                <li><Link href="/startups" className="hover:text-brand-rose">Startups</Link></li>
                <li><Link href="/champions" className="hover:text-brand-rose">Champions</Link></li>
                <li><a href="#" className="hover:text-brand-rose">Changelog</a></li>
                <li><a href="#" className="hover:text-brand-rose">Podcast</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-brand-rose">About us</Link></li>
                <li><Link href="/company/brand" className="hover:text-brand-rose">Brand</Link></li>
                <li><Link href="/company/investors" className="hover:text-brand-rose">Investors</Link></li>
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
