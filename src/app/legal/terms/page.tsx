'use client';

import { Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TermsPage() {
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
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <FileText className="w-12 h-12 text-[#208a8d] mb-4" />
            <h1 className="text-5xl font-bold mb-4 text-brand-green-darker">Terms of Service</h1>
            <p className="text-brand-green text-lg">
              Last updated: January 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-brand-rose/15 rounded-2xl p-8 md:p-12 border-2 border-gray-200 prose prose-lg max-w-none">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Supadirect ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these Terms of Service, please do not use the Service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Supadirect provides a backend platform that combines real-time database, serverless functions, authentication, and deployment services. The Service is provided "as is" and Supadirect reserves the right to modify, suspend, or discontinue any aspect of the Service at any time.
            </p>

            <h2>3. User Accounts</h2>
            <h3>3.1 Account Creation</h3>
            <p>
              To use certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify Supadirect immediately of any unauthorized use of your account.
            </p>

            <h2>4. Acceptable Use Policy</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the intellectual property rights of others</li>
              <li>Upload or transmit viruses, malware, or other malicious code</li>
              <li>Engage in any activity that disrupts or interferes with the Service</li>
              <li>Attempt to gain unauthorized access to any part of the Service</li>
              <li>Use the Service to store or transmit illegal content</li>
              <li>Engage in any form of automated use of the system without prior written consent</li>
            </ul>

            <h2>5. Payment and Billing</h2>
            <h3>5.1 Pricing</h3>
            <p>
              Pricing for the Service is available on our Pricing page. We reserve the right to change our prices at any time, with notice provided at least 30 days in advance for existing customers.
            </p>
            <h3>5.2 Payment Terms</h3>
            <p>
              Payment is due in accordance with the billing cycle you select. All fees are non-refundable except as required by law or as explicitly stated in these Terms.
            </p>
            <h3>5.3 Usage-Based Fees</h3>
            <p>
              Certain features of the Service may be subject to usage-based fees. You will be billed for actual usage according to our published rates.
            </p>

            <h2>6. Intellectual Property Rights</h2>
            <h3>6.1 Supadirect IP</h3>
            <p>
              The Service and its original content, features, and functionality are owned by Supadirect and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
            <h3>6.2 Your Content</h3>
            <p>
              You retain all rights to the content you submit, post, or display on or through the Service. By submitting content, you grant Supadirect a worldwide, non-exclusive, royalty-free license to use, copy, reproduce, process, adapt, modify, publish, transmit, display, and distribute your content solely for the purpose of providing the Service.
            </p>

            <h2>7. Data Privacy and Security</h2>
            <p>
              Your use of the Service is also governed by our Privacy Policy. We implement industry-standard security measures to protect your data, but cannot guarantee absolute security. Please review our Privacy Policy for detailed information about how we collect, use, and protect your data.
            </p>

            <h2>8. Service Level Agreement</h2>
            <p>
              For paid plans, we provide a Service Level Agreement (SLA) guaranteeing certain uptime percentages. Details of the SLA are available in your service documentation. In the event we fail to meet our SLA commitments, you may be eligible for service credits as specified in the SLA.
            </p>

            <h2>9. Termination</h2>
            <h3>9.1 Termination by You</h3>
            <p>
              You may terminate your account at any time through your account settings. Upon termination, your right to use the Service will immediately cease.
            </p>
            <h3>9.2 Termination by Supadirect</h3>
            <p>
              We reserve the right to suspend or terminate your access to the Service at any time for any reason, including but not limited to violation of these Terms. Upon termination, we may delete your account and all associated data.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, SUPADIRECT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
            </p>

            <h2>11. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Supadirect and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses, including reasonable attorney's fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.
            </p>

            <h2>12. Dispute Resolution</h2>
            <h3>12.1 Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.
            </p>
            <h3>12.2 Arbitration</h3>
            <p>
              Any dispute arising out of or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2>13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such changes constitutes your acceptance of the new Terms.
            </p>

            <h2>14. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> legal@supadirect.com<br />
              <strong>Address:</strong> Supadirect, Inc., 123 Backend Street, San Francisco, CA 94105
            </p>
          </div>

          {/* Related Links */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Link href="/legal/privacy" className="bg-brand-rose/15 rounded-xl p-6 border-2 border-gray-200 hover:border-[#208a8d] transition-colors">
              <h3 className="font-bold text-brand-green-darker mb-2">Privacy Policy</h3>
              <p className="text-sm text-brand-green">Learn how we handle your data</p>
            </Link>
            <Link href="/legal/security" className="bg-brand-rose/15 rounded-xl p-6 border-2 border-gray-200 hover:border-[#208a8d] transition-colors">
              <h3 className="font-bold text-brand-green-darker mb-2">Security</h3>
              <p className="text-sm text-brand-green">Our security practices</p>
            </Link>
            <Link href="/contact" className="bg-brand-rose/15 rounded-xl p-6 border-2 border-gray-200 hover:border-[#208a8d] transition-colors">
              <h3 className="font-bold text-brand-green-darker mb-2">Contact Us</h3>
              <p className="text-sm text-brand-green">Have questions? Get in touch</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1d] text-brand-rose py-16 px-6 border-t border-white/10 mt-20">
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
