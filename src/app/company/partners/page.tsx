'use client';

import { Github, Handshake, Zap, Users, Award, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    website: '',
    partnerType: '',
    employeeCount: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ companyName: '', email: '', website: '', partnerType: '', employeeCount: '', description: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const partnerTiers = [
    {
      tier: 'Technology Partner',
      icon: <Zap className="w-10 h-10" />,
      description: 'Integrate your technology with Supadirect',
      benefits: [
        'Co-marketing opportunities',
        'Joint case studies',
        'Technical support',
        'Partner badge',
        'Featured in marketplace',
      ],
    },
    {
      tier: 'Solution Partner',
      icon: <Users className="w-10 h-10" />,
      description: 'Build and deliver solutions on Supadirect',
      benefits: [
        'Lead generation',
        'Training and certification',
        'Sales enablement',
        'Partner portal access',
        'Co-selling opportunities',
      ],
    },
    {
      tier: 'Reseller Partner',
      icon: <TrendingUp className="w-10 h-10" />,
      description: 'Resell Supadirect to your customers',
      benefits: [
        'Revenue share',
        'Deal registration',
        'Sales training',
        'Marketing materials',
        'Dedicated partner manager',
      ],
    },
  ];

  const partners = [
    { name: 'Vercel', type: 'Technology Partner', logo: 'VL' },
    { name: 'Stripe', type: 'Technology Partner', logo: 'ST' },
    { name: 'Auth0', type: 'Technology Partner', logo: 'A0' },
    { name: 'Cloudflare', type: 'Technology Partner', logo: 'CF' },
    { name: 'Datadog', type: 'Technology Partner', logo: 'DD' },
    { name: 'Segment', type: 'Technology Partner', logo: 'SG' },
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
            <Handshake className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Partner with Supadirect
            </h1>
            <p className="text-xl md:text-2xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              Join our growing ecosystem and help developers build better applications together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-brand-rose/15 text-[#208a8d] hover:bg-gray-100 px-8 py-6 text-lg">
                Become a Partner
              </Button>
              <Button variant="outline" className="border-2 border-white text-brand-rose hover:bg-brand-rose/15 hover:text-[#208a8d] px-8 py-6 text-lg">
                View Partner Portal
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Why Partner with Us?
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Grow your business while helping developers succeed
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Access to Customers',
                description: 'Reach 50,000+ developers building on Supadirect',
              },
              {
                icon: <TrendingUp className="w-10 h-10" />,
                title: 'Revenue Growth',
                description: 'Generate new revenue streams through partnerships',
              },
              {
                icon: <Award className="w-10 h-10" />,
                title: 'Brand Recognition',
                description: 'Get featured in our marketplace and documentation',
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Technical Support',
                description: 'Dedicated partner success team and resources',
              },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200 text-center"
              >
                <div className="text-[#208a8d] mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{benefit.title}</h3>
                <p className="text-brand-green-dark">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Tiers */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Partnership Tiers
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Choose the partnership model that fits your business
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {partnerTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="text-[#208a8d] mb-4">{tier.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-brand-green-darker">{tier.tier}</h3>
                <p className="text-brand-green-dark mb-6">{tier.description}</p>
                <div className="space-y-3">
                  {tier.benefits.map((benefit, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-brand-green-dark">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Our Partners
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Trusted by leading technology companies
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200 hover:border-[#208a8d] transition-colors text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-brand-rose rounded-full flex items-center justify-center text-brand-rose text-2xl font-bold">
                  {partner.logo}
                </div>
                <h3 className="text-xl font-bold mb-2 text-brand-green-darker">{partner.name}</h3>
                <p className="text-sm text-brand-green">{partner.type}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Apply to Partner
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Tell us about your company and partnership goals
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-rose/15 rounded-2xl p-8 md:p-12 border-2 border-gray-200"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-green-darker mb-2">Application Submitted!</h3>
                <p className="text-brand-green-dark">
                  Thank you for your interest. Our partnerships team will review your application and get back to you within 5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none"
                      placeholder="Acme Corp"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none"
                      placeholder="partner@acmecorp.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                    Website *
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none"
                    placeholder="https://acmecorp.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="partnerType" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Partner Type *
                    </label>
                    <select
                      id="partnerType"
                      name="partnerType"
                      value={formData.partnerType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none bg-brand-rose/15"
                    >
                      <option value="">Select type</option>
                      <option value="technology">Technology Partner</option>
                      <option value="solution">Solution Partner</option>
                      <option value="reseller">Reseller Partner</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="employeeCount" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Company Size *
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none bg-brand-rose/15"
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201+">201+ employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                    Tell us about your partnership goals *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none resize-none"
                    placeholder="How do you plan to integrate with or promote Supadirect? What value can you bring to our customers?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-rose text-brand-rose hover:bg-brand-rose-dark px-8 py-6 text-lg"
                >
                  Submit Application
                </Button>

                <p className="text-sm text-brand-green text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/legal/terms" className="text-[#208a8d] hover:underline">Terms of Service</Link>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to grow together?
          </h2>
          <p className="text-xl text-brand-rose/90 mb-8">
            Join our partner ecosystem and unlock new opportunities for your business.
          </p>
          <Link href="/contact">
            <Button className="bg-brand-rose/15 text-[#208a8d] hover:bg-gray-100 px-8 py-4 flex items-center gap-2 mx-auto">
              Contact Partnerships Team
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
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
                <li><Link href="/company/partners" className="hover:text-brand-rose">Become a partner</Link></li>
                <li><Link href="/company/jobs" className="hover:text-brand-rose">Jobs</Link></li>
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
