'use client';

import { Github, Award, Users, Gift, Star, CheckCircle, Heart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ChampionsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    twitter: '',
    github: '',
    website: '',
    reason: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', twitter: '', github: '', website: '', reason: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const champions = [
    {
      name: 'Alex Rivera',
      role: 'Full-stack Developer',
      avatar: 'https://i.pravatar.cc/150?img=33',
      contributions: 'Created 15+ tutorials, hosted 3 workshops',
      twitter: '@alexrivera',
    },
    {
      name: 'Sarah Kim',
      role: 'DevRel Engineer',
      avatar: 'https://i.pravatar.cc/150?img=45',
      contributions: 'Built 5 open-source components, 50+ Discord answers',
      twitter: '@sarahcodes',
    },
    {
      name: 'Marcus Chen',
      role: 'Backend Architect',
      avatar: 'https://i.pravatar.cc/150?img=12',
      contributions: 'Wrote 20+ blog posts, organized 2 meetups',
      twitter: '@marcuschen',
    },
    {
      name: 'Lisa Patel',
      role: 'Technical Writer',
      avatar: 'https://i.pravatar.cc/150?img=47',
      contributions: 'Improved docs, created video series',
      twitter: '@lisapatel',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-rose/15">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#53534B]/90 backdrop-blur-sm border-b border-[#53534B]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-white cursor-pointer">supadirect</h1>
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
              <Link href="/blog" className="text-white/90 hover:text-white transition-colors py-2">Blog</Link>
              <a href="#" className="text-white/90 hover:text-white transition-colors py-2">Docs</a>
              <Link href="/pricing" className="text-white/90 hover:text-white transition-colors py-2">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-white/90 hover:text-white flex items-center gap-2 transition-colors">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">16,435 stars</span>
            </a>
            <Button variant="ghost" className="text-white hidden sm:inline-flex">Log in</Button>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#a8534f] via-[#8a423f] to-[#6d342f] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Award className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Supadirect Champions
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join our community of developers who inspire, educate, and empower others to build amazing things with Supadirect.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-[#a8534f] hover:bg-gray-100 px-8 py-6 text-lg">
                Become a Champion
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#a8534f] px-8 py-6 text-lg">
                Meet Champions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Champion Perks
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Recognition and rewards for your contributions
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Gift className="w-10 h-10" />,
                title: 'Exclusive Swag',
                description: 'Limited edition Champion merchandise and gear',
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: 'Early Access',
                description: 'Beta features and product previews',
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Direct Access',
                description: 'Private Slack channel with the team',
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: 'Recognition',
                description: 'Featured on our website and social media',
              },
            ].map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200 text-center"
              >
                <div className="text-[#a8534f] mb-4 flex justify-center">{perk.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{perk.title}</h3>
                <p className="text-brand-green-dark">{perk.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Contribute */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Ways to Contribute
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            There are many ways to make an impact in the Supadirect community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: 'Community Support',
                description: 'Answer questions in Discord, forums, and Stack Overflow',
                examples: ['Help 10+ developers', 'Active in Discord', 'Write detailed answers'],
              },
              {
                icon: '📝',
                title: 'Content Creation',
                description: 'Write blog posts, create videos, and share tutorials',
                examples: ['5+ blog posts', 'Video tutorials', 'Sample projects'],
              },
              {
                icon: '🎤',
                title: 'Speaking & Events',
                description: 'Present at meetups, conferences, and workshops',
                examples: ['Speak at events', 'Host workshops', 'Organize meetups'],
              },
              {
                icon: '💻',
                title: 'Code Contributions',
                description: 'Build components, templates, and open-source tools',
                examples: ['Create components', 'Build templates', 'Fix bugs'],
              },
              {
                icon: '📚',
                title: 'Documentation',
                description: 'Improve docs, write guides, and translate content',
                examples: ['Improve docs', 'Write guides', 'Translations'],
              },
              {
                icon: '🌟',
                title: 'Advocacy',
                description: 'Share Supadirect on social media and with your network',
                examples: ['Tweet about us', 'Share projects', 'Recommend to others'],
              },
            ].map((way, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="text-4xl mb-4">{typeof way.icon === 'string' ? way.icon : <div className="text-[#a8534f]">{way.icon}</div>}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{way.title}</h3>
                <p className="text-brand-green-dark mb-4">{way.description}</p>
                <ul className="space-y-2">
                  {way.examples.map((example, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {example}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Champions */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Meet Our Champions
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Community leaders making a difference
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {champions.map((champion, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-rose/15 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#a8534f] transition-colors group"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={champion.avatar}
                    alt={champion.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-brand-green-darker">{champion.name}</h3>
                  <div className="text-[#a8534f] text-sm font-semibold mb-3">{champion.role}</div>
                  <p className="text-sm text-brand-green-dark mb-3">{champion.contributions}</p>
                  <a href="#" className="text-sm text-gray-600 hover:text-[#a8534f]">
                    {champion.twitter}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Become a Champion
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Tell us about yourself and how you want to contribute
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-green-darker mb-2">Application Submitted!</h3>
                <p className="text-brand-green-dark">
                  Thank you for your interest. We'll review your application and get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="twitter" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Twitter Handle
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      value={formData.twitter}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none"
                      placeholder="@johndoe"
                    />
                  </div>

                  <div>
                    <label htmlFor="github" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      GitHub Username
                    </label>
                    <input
                      type="text"
                      id="github"
                      name="github"
                      value={formData.github}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none"
                      placeholder="johndoe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                    Website/Portfolio
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none"
                    placeholder="https://johndoe.com"
                  />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                    Why do you want to be a Champion? *
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none resize-none"
                    placeholder="Tell us about your interest in Supadirect and how you plan to contribute to the community..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#a8534f] text-white hover:bg-[#8a423f] px-8 py-6 text-lg"
                >
                  Submit Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/legal/terms" className="text-[#a8534f] hover:underline">Terms of Service</Link>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1d] text-white py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold">supadirect</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/sync" className="hover:text-white">Sync</Link></li>
                <li><Link href="/realtime" className="hover:text-white">Realtime</Link></li>
                <li><Link href="/auth" className="hover:text-white">Auth</Link></li>
                <li><Link href="/open-source" className="hover:text-white">Open source</Link></li>
                <li><Link href="/ai" className="hover:text-white">AI coding</Link></li>
                <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
                <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Docs →</a></li>
                <li><Link href="/blog" className="hover:text-white">Blog →</Link></li>
                <li><Link href="/components" className="hover:text-white">Components</Link></li>
                <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
                <li><Link href="/startups" className="hover:text-white">Startups</Link></li>
                <li><Link href="/champions" className="hover:text-white">Champions</Link></li>
                <li><a href="#" className="hover:text-white">Changelog</a></li>
                <li><a href="#" className="hover:text-white">Podcast</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-white">About us</Link></li>
                <li><Link href="/company/brand" className="hover:text-white">Brand</Link></li>
                <li><a href="#" className="hover:text-white">Investors</a></li>
                <li><a href="#" className="hover:text-white">Become a partner</a></li>
                <li><a href="#" className="hover:text-white">Jobs</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><Link href="/legal/terms" className="hover:text-white">Terms of service</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-white">Privacy policy</Link></li>
                <li><Link href="/legal/security" className="hover:text-white">Security</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white">Twitter →</a></li>
                <li><a href="#" className="hover:text-white">Discord →</a></li>
                <li><a href="#" className="hover:text-white">YouTube →</a></li>
                <li><a href="#" className="hover:text-white">GitHub →</a></li>
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
