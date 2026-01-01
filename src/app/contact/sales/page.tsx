'use client';

import { Github, Building2, Users, DollarSign, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function SalesContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    companySize: '',
    useCase: '',
    budget: '',
    timeline: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    if (!formData.companySize) newErrors.companySize = 'Please select company size';
    if (!formData.useCase) newErrors.useCase = 'Please select a use case';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);

    setTimeout(() => {
      setFormData({
        name: '', email: '', company: '', jobTitle: '',
        companySize: '', useCase: '', budget: '', timeline: '', message: ''
      });
      setIsSuccess(false);
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
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
                  { label: 'Open source', href: '#', description: 'Community-driven development' },
                  { label: 'AI coding', href: '/ai', description: 'AI-powered code generation' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
              />
              <DropdownMenu
                label="Developers"
                items={[
                  { label: 'Docs →', href: '#', description: 'Complete documentation' },
                  { label: 'Blog →', href: '#', description: 'Latest updates and tutorials' },
                  { label: 'Components', href: '/components', description: 'Pre-built components' },
                  { label: 'Templates', href: '/templates', description: 'Starter templates' },
                  { label: 'Startups', href: '#', description: 'Built for startups' },
                  { label: 'Champions', href: '#', description: 'Community champions' },
                  { label: 'Changelog', href: '#', description: 'Recent changes' },
                  { label: 'Podcast', href: '#', description: 'Developer interviews' },
                ]}
              />
              <a href="#" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Blog</a>
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

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#a8534f] to-[#8a423f] text-brand-rose">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-4">
              ENTERPRISE SALES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              Our sales team is ready to help you scale your business with Supadirect. Get custom pricing, dedicated support, and expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-green-darker">
            What You Get with Enterprise
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: 'Dedicated Support', desc: '4-hour response time for critical issues' },
              { icon: <Building2 className="w-8 h-8" />, title: 'Custom SLA', desc: '99.99% uptime guarantee' },
              { icon: <DollarSign className="w-8 h-8" />, title: 'Volume Discounts', desc: 'Flexible pricing for scale' },
              { icon: <Calendar className="w-8 h-8" />, title: 'Onboarding', desc: 'White-glove setup and training' },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-[#a8534f] mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-brand-green-darker">{benefit.title}</h3>
                <p className="text-brand-green-dark text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-rose/15 rounded-2xl p-8 md:p-12 border-2 border-gray-200"
          >
            <h2 className="text-3xl font-bold mb-2 text-brand-green-darker">Talk to Sales</h2>
            <p className="text-brand-green-dark mb-8">
              Fill out the form and our team will reach out within 1 business day.
            </p>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-brand-green-darker mb-2">Request Received!</h3>
                <p className="text-brand-green-dark mb-4">
                  Thank you for your interest in Supadirect Enterprise.
                </p>
                <p className="text-sm text-brand-green">
                  Our sales team will contact you within 1 business day to schedule a demo and discuss your needs.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#a8534f] focus:outline-none transition-colors`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Work Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#a8534f] focus:outline-none transition-colors`}
                      placeholder="john@company.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.company ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#a8534f] focus:outline-none transition-colors`}
                      placeholder="Acme Inc"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="jobTitle" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Job Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.jobTitle ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#a8534f] focus:outline-none transition-colors`}
                      placeholder="VP of Engineering"
                    />
                    {errors.jobTitle && <p className="text-red-500 text-sm mt-1">{errors.jobTitle}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="companySize" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Company Size <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="companySize"
                      name="companySize"
                      value={formData.companySize}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.companySize ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#a8534f] focus:outline-none transition-colors bg-white`}
                    >
                      <option value="">Select size</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-1000">201-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                    {errors.companySize && <p className="text-red-500 text-sm mt-1">{errors.companySize}</p>}
                  </div>

                  <div>
                    <label htmlFor="useCase" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Primary Use Case <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="useCase"
                      name="useCase"
                      value={formData.useCase}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.useCase ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#a8534f] focus:outline-none transition-colors bg-white`}
                    >
                      <option value="">Select use case</option>
                      <option value="saas">SaaS Application</option>
                      <option value="marketplace">Marketplace</option>
                      <option value="mobile">Mobile App Backend</option>
                      <option value="ai">AI/ML Application</option>
                      <option value="realtime">Real-time Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.useCase && <p className="text-red-500 text-sm mt-1">{errors.useCase}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Estimated Budget (optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none transition-colors bg-brand-rose/15"
                    >
                      <option value="">Select budget</option>
                      <option value="<10k">Less than $10k/mo</option>
                      <option value="10k-50k">$10k - $50k/mo</option>
                      <option value="50k-100k">$50k - $100k/mo</option>
                      <option value="100k+">$100k+/mo</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Implementation Timeline (optional)
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none transition-colors bg-brand-rose/15"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-2 weeks)</option>
                      <option value="1month">1 month</option>
                      <option value="3months">3 months</option>
                      <option value="6months">6+ months</option>
                      <option value="exploring">Just exploring</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                    Additional Information (optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#a8534f] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-rose text-brand-rose hover:bg-brand-rose-dark px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="animate-spin">⏳</span>
                      Submitting...
                    </span>
                  ) : (
                    'Request Demo & Pricing'
                  )}
                </Button>

                <p className="text-sm text-brand-green text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-[#a8534f] hover:underline">Privacy Policy</a>
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-6 bg-[#1d1d1d] text-brand-rose">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            <div className="text-2xl font-bold">Stripe</div>
            <div className="text-2xl font-bold">Vercel</div>
            <div className="text-2xl font-bold">Linear</div>
            <div className="text-2xl font-bold">Notion</div>
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
                <li><a href="#" className="hover:text-brand-rose">Open source</a></li>
                <li><Link href="/ai" className="hover:text-brand-rose">AI coding</Link></li>
                <li><Link href="/faq" className="hover:text-brand-rose">FAQ</Link></li>
                <li><Link href="/pricing" className="hover:text-brand-rose">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-brand-rose">Docs →</a></li>
                <li><a href="#" className="hover:text-brand-rose">Blog →</a></li>
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
                <li><a href="#" className="hover:text-brand-rose">Terms of service</a></li>
                <li><a href="#" className="hover:text-brand-rose">Privacy policy</a></li>
                <li><a href="#" className="hover:text-brand-rose">Security</a></li>
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
