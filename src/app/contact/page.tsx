'use client';

import { Github, Mail, MessageSquare, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
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
      <section className="pt-32 pb-12 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-brand-rose/90 mb-8">
              Have a question? Need help getting started? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#208a8d] transition-colors text-center"
            >
              <Mail className="w-12 h-12 text-[#208a8d] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-brand-green-darker">Email Support</h3>
              <p className="text-brand-green-dark mb-4">Get help via email</p>
              <a href="mailto:support@supadirect.com" className="text-[#208a8d] font-semibold hover:underline">
                support@supadirect.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#208a8d] transition-colors text-center"
            >
              <MessageSquare className="w-12 h-12 text-[#208a8d] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-brand-green-darker">Discord Community</h3>
              <p className="text-brand-green-dark mb-4">Join 50,000+ developers</p>
              <a href="#" className="text-[#208a8d] font-semibold hover:underline">
                Join Discord →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200 hover:border-[#208a8d] transition-colors text-center"
            >
              <Send className="w-12 h-12 text-[#208a8d] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-brand-green-darker">Enterprise Sales</h3>
              <p className="text-brand-green-dark mb-4">Talk to our sales team</p>
              <Link href="/contact/sales" className="text-[#208a8d] font-semibold hover:underline">
                Contact Sales →
              </Link>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-brand-rose/15 rounded-2xl p-8 md:p-12 border-2 border-gray-200"
            >
              <h2 className="text-3xl font-bold mb-2 text-brand-green-darker">Send us a message</h2>
              <p className="text-brand-green-dark mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-brand-green-darker mb-2">Message Sent!</h3>
                  <p className="text-brand-green-dark">
                    Thank you for reaching out. We'll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#208a8d] focus:outline-none transition-colors`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#208a8d] focus:outline-none transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Company (optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#208a8d] focus:outline-none transition-colors"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold mb-2 text-brand-green-darker">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:border-[#208a8d] focus:outline-none transition-colors resize-none`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-rose text-brand-rose hover:bg-brand-rose-dark px-8 py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="animate-spin">⏳</span>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </Button>

                  <p className="text-sm text-brand-green text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#" className="text-[#208a8d] hover:underline">Privacy Policy</a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="py-16 px-6 bg-brand-rose/15">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-brand-green-darker">
            Looking for answers?
          </h3>
          <p className="text-brand-green-dark mb-6">
            Check out our FAQ page for quick answers to common questions.
          </p>
          <Link href="/faq">
            <Button className="bg-brand-rose text-brand-rose hover:bg-brand-rose-dark px-8 py-4">
              View FAQ
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
