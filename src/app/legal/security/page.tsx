'use client';

import { Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SecurityPage() {
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
            <h1 className="text-5xl font-bold mb-4 text-brand-green-darker">Security</h1>
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
            <h2>Our Commitment to Security</h2>
            <p>
              Security is at the core of everything we do. We implement industry-leading practices to protect your data and ensure the reliability of our platform.
            </p>

            <h2>Compliance & Certifications</h2>
            <h3>SOC 2 Type II</h3>
            <p>
              We are SOC 2 Type II compliant, demonstrating our commitment to security, availability, processing integrity, confidentiality, and privacy. Our compliance is audited annually by independent third parties.
            </p>
            <h3>HIPAA Compliance</h3>
            <p>
              For healthcare applications, we offer HIPAA-compliant infrastructure with Business Associate Agreements (BAA) available for Enterprise customers.
            </p>
            <h3>GDPR & Privacy Shield</h3>
            <p>
              We are fully compliant with GDPR requirements and Privacy Shield frameworks for handling EU citizen data.
            </p>

            <h2>Data Encryption</h2>
            <h3>Encryption in Transit</h3>
            <p>
              All data transmitted to and from Supadirect is encrypted using TLS 1.3 with perfect forward secrecy. We enforce HTTPS for all connections and have HSTS enabled.
            </p>
            <h3>Encryption at Rest</h3>
            <p>
              All data stored in Supadirect is encrypted at rest using AES-256 encryption. Database backups are also encrypted with separate encryption keys.
            </p>

            <h2>Infrastructure Security</h2>
            <ul>
              <li><strong>Multi-region redundancy:</strong> Your data is replicated across multiple geographic regions</li>
              <li><strong>DDoS protection:</strong> Enterprise-grade protection against distributed denial-of-service attacks</li>
              <li><strong>Network isolation:</strong> Customer data is isolated in separate virtual networks</li>
              <li><strong>Automated backups:</strong> Continuous backups with point-in-time recovery</li>
              <li><strong>Disaster recovery:</strong> RPO &lt; 1 hour, RTO &lt; 4 hours for Enterprise plans</li>
            </ul>

            <h2>Application Security</h2>
            <h3>Authentication & Authorization</h3>
            <p>
              We implement multi-factor authentication (MFA), role-based access control (RBAC), and support for SSO via SAML and OAuth 2.0.
            </p>
            <h3>Security Testing</h3>
            <ul>
              <li>Regular penetration testing by independent security firms</li>
              <li>Automated vulnerability scanning</li>
              <li>Static and dynamic code analysis</li>
              <li>Dependency monitoring and automated updates</li>
            </ul>

            <h2>Operational Security</h2>
            <h3>Access Controls</h3>
            <p>
              Access to production systems is restricted to authorized personnel only, with all access logged and audited. We follow the principle of least privilege.
            </p>
            <h3>Security Monitoring</h3>
            <p>
              24/7 security monitoring with automated alerting for suspicious activities, intrusion detection systems, and real-time threat intelligence.
            </p>
            <h3>Incident Response</h3>
            <p>
              We maintain a comprehensive incident response plan with defined procedures for detection, containment, eradication, and recovery. Security incidents are communicated to affected customers within 72 hours.
            </p>

            <h2>Data Privacy</h2>
            <ul>
              <li><strong>Data ownership:</strong> You own your data, we never sell or share it</li>
              <li><strong>Data isolation:</strong> Customer data is logically isolated</li>
              <li><strong>Data residency:</strong> Choose where your data is stored (US, EU, Asia)</li>
              <li><strong>Data portability:</strong> Export your data at any time in standard formats</li>
              <li><strong>Data deletion:</strong> Data is permanently deleted within 90 days of account termination</li>
            </ul>

            <h2>Bug Bounty Program</h2>
            <p>
              We run a public bug bounty program to reward security researchers who help us identify and fix security vulnerabilities.
            </p>
            <p>
              <strong>Rewards:</strong> Up to $10,000 for critical vulnerabilities<br />
              <strong>Scope:</strong> All Supadirect services and infrastructure<br />
              <strong>Submit:</strong> security@supadirect.com
            </p>

            <h2>Responsible Disclosure</h2>
            <p>
              If you discover a security vulnerability, please report it to <strong>security@supadirect.com</strong>. We commit to:
            </p>
            <ul>
              <li>Acknowledge your report within 24 hours</li>
              <li>Provide an estimated timeline for resolution within 3 business days</li>
              <li>Keep you informed of our progress</li>
              <li>Credit you in our security acknowledgments (if desired)</li>
            </ul>

            <h2>Security Best Practices for Customers</h2>
            <p>We recommend all customers:</p>
            <ul>
              <li>Enable multi-factor authentication on all accounts</li>
              <li>Use strong, unique passwords</li>
              <li>Regularly review access logs and API keys</li>
              <li>Implement proper access controls in your application code</li>
              <li>Keep dependencies up to date</li>
              <li>Follow our security guidelines in the documentation</li>
            </ul>

            <h2>Contact Our Security Team</h2>
            <p>
              <strong>Security inquiries:</strong> security@supadirect.com<br />
              <strong>Bug reports:</strong> security@supadirect.com<br />
              <strong>PGP Key:</strong> Available upon request
            </p>
          </div>

          {/* Compliance Badges */}
          <div className="mt-8 bg-gradient-to-br from-[#208a8d] to-[#1a7070] rounded-2xl p-8 text-brand-rose">
            <h3 className="text-2xl font-bold mb-6 text-center">Compliance & Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="text-4xl mb-2">✓</div>
                <div className="font-bold mb-1">SOC 2 Type II</div>
                <div className="text-sm text-white/80">Certified</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="text-4xl mb-2">✓</div>
                <div className="font-bold mb-1">HIPAA</div>
                <div className="text-sm text-white/80">Compliant</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                <div className="text-4xl mb-2">✓</div>
                <div className="font-bold mb-1">GDPR</div>
                <div className="text-sm text-white/80">Verified</div>
              </div>
            </div>
          </div>

          {/* Related Links */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <Link href="/legal/terms" className="bg-brand-rose/15 rounded-xl p-6 border-2 border-gray-200 hover:border-[#208a8d] transition-colors">
              <h3 className="font-bold text-brand-green-darker mb-2">Terms of Service</h3>
              <p className="text-sm text-brand-green">Our terms and conditions</p>
            </Link>
            <Link href="/legal/privacy" className="bg-brand-rose/15 rounded-xl p-6 border-2 border-gray-200 hover:border-[#208a8d] transition-colors">
              <h3 className="font-bold text-brand-green-darker mb-2">Privacy Policy</h3>
              <p className="text-sm text-brand-green">How we handle your data</p>
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
