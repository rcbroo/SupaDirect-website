'use client';

import { Github, Rocket, DollarSign, Users, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function StartupsPage() {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    website: '',
    fundingStage: '',
    teamSize: '',
    description: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ companyName: '', email: '', website: '', fundingStage: '', teamSize: '', description: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f59e0b] via-[#d97706] to-[#b45309] text-brand-rose">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Rocket className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Supadirect for Startups
            </h1>
            <p className="text-xl md:text-2xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              Get up to 1 year free of Supadirect Professional, including no seat fees and 30% off usage-based fees up to $30k in credits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-brand-rose/15 text-[#f59e0b] hover:bg-gray-100 px-8 py-6 text-lg">
                Apply Now
              </Button>
              <Button variant="outline" className="border-2 border-white text-brand-rose hover:bg-brand-rose/15 hover:text-[#f59e0b] px-8 py-6 text-lg">
                View Requirements
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            What You Get
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Everything you need to build and scale your startup
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <DollarSign className="w-10 h-10" />,
                title: '$30,000 in Credits',
                description: '30% off usage-based fees for your first year',
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Unlimited Seats',
                description: 'No seat fees for your entire team',
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Priority Support',
                description: '24-hour response time for critical issues',
              },
              {
                icon: <Rocket className="w-10 h-10" />,
                title: 'Early Access',
                description: 'Beta features and exclusive content',
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
                <div className="text-[#f59e0b] mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{benefit.title}</h3>
                <p className="text-brand-green-dark">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Eligibility Requirements
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            To qualify for the Startups program, you must meet the following criteria
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
          >
            <div className="space-y-4">
              {[
                'Less than 2 years old',
                'Raised less than $5M in funding',
                'Fewer than 20 employees',
                'Building a product-led startup',
                'Not previously enrolled in the program',
                'Associated with an accelerator, incubator, or VC firm (preferred but not required)',
              ].map((requirement, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark text-lg">{requirement}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Success Stories
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Startups that launched and scaled with Supadirect
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: 'TaskFlow',
                logo: 'TF',
                description: 'Built and scaled a project management tool from 0 to 50K users in 6 months',
                metric: '50K users',
                founder: 'Sarah Chen, CEO',
              },
              {
                company: 'CodeSync',
                logo: 'CS',
                description: 'Launched real-time collaboration platform for developers with $2M funding',
                metric: '$2M raised',
                founder: 'Alex Kim, CTO',
              },
              {
                company: 'DataViz',
                logo: 'DV',
                description: 'Grew analytics dashboard from MVP to enterprise customers in 8 months',
                metric: '100+ customers',
                founder: 'Maya Patel, Founder',
              },
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg bg-brand-rose text-brand-rose flex items-center justify-center text-2xl font-bold">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-green-darker">{story.company}</h3>
                    <div className="text-[#f59e0b] font-semibold">{story.metric}</div>
                  </div>
                </div>
                <p className="text-brand-green-dark mb-4">{story.description}</p>
                <p className="text-sm text-gray-600">— {story.founder}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Apply to the Program
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Tell us about your startup and we'll review your application within 3 business days
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
                  Thank you for applying. We'll review your application and get back to you within 3 business days.
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
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f59e0b] focus:outline-none"
                      placeholder="Acme Inc"
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
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f59e0b] focus:outline-none"
                      placeholder="founder@acme.com"
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
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f59e0b] focus:outline-none"
                    placeholder="https://acme.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fundingStage" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Funding Stage *
                    </label>
                    <select
                      id="fundingStage"
                      name="fundingStage"
                      value={formData.fundingStage}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f59e0b] focus:outline-none bg-brand-rose/15"
                    >
                      <option value="">Select stage</option>
                      <option value="pre-seed">Pre-seed</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                      <option value="bootstrapped">Bootstrapped</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Team Size *
                    </label>
                    <select
                      id="teamSize"
                      name="teamSize"
                      value={formData.teamSize}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f59e0b] focus:outline-none bg-brand-rose/15"
                    >
                      <option value="">Select size</option>
                      <option value="1-5">1-5 employees</option>
                      <option value="6-10">6-10 employees</option>
                      <option value="11-20">11-20 employees</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                    Tell us about your startup *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#f59e0b] focus:outline-none resize-none"
                    placeholder="What problem are you solving? What makes your product unique?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-brand-rose text-brand-rose hover:bg-brand-rose-dark px-8 py-6 text-lg"
                >
                  Submit Application
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting, you agree to our{' '}
                  <Link href="/legal/terms" className="text-[#f59e0b] hover:underline">Terms of Service</Link>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#f59e0b] to-[#b45309] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Questions about the program?
          </h2>
          <p className="text-xl text-brand-rose/90 mb-8">
            Our team is here to help. Reach out and we'll answer any questions you have.
          </p>
          <Link href="/contact">
            <Button className="bg-brand-rose/15 text-[#f59e0b] hover:bg-gray-100 px-8 py-4 flex items-center gap-2 mx-auto">
              Contact Us
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
