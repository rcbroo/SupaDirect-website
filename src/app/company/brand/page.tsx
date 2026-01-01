'use client';

import { Github, Download, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function BrandPage() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const colors = [
    { name: 'Primary Teal', hex: '#208a8d', rgb: '32, 138, 141', usage: 'Primary buttons, links, highlights' },
    { name: 'Secondary Rust', hex: '#a8534f', rgb: '168, 83, 79', usage: 'Secondary actions, accents' },
    { name: 'Accent Amber', hex: '#f59e0b', rgb: '245, 158, 11', usage: 'CTAs, warnings, highlights' },
    { name: 'Background Warm', hex: '#faf8f6', rgb: '250, 248, 246', usage: 'Page backgrounds, cards' },
    { name: 'Dark Primary', hex: '#1d1d1d', rgb: '29, 29, 29', usage: 'Text, headers, footers' },
    { name: 'Dark Secondary', hex: '#2d2d28', rgb: '45, 45, 40', usage: 'Code blocks, dark sections' },
    { name: 'Border Tan', hex: '#D4A574', rgb: '212, 165, 116', usage: 'Borders, dividers, accents' },
  ];

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(colorName);
    setTimeout(() => setCopiedColor(null), 2000);
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
      <section className="pt-32 pb-16 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Brand Guidelines</h1>
            <p className="text-xl text-brand-rose/90 mb-8">
              Assets and guidelines for using the Supadirect brand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Logo</h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Download our logo in various formats and colors
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Light Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-rose/15 rounded-2xl p-12 border-2 border-gray-200"
            >
              <div className="text-center mb-8">
                <h1 className="text-6xl font-bold text-brand-green-darker">supadirect</h1>
              </div>
              <div className="text-center">
                <p className="text-sm text-brand-green mb-4">For light backgrounds</p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-brand-rose text-brand-rose hover:bg-brand-rose-dark flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    SVG
                  </Button>
                  <Button variant="outline" className="border-gray-300 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Dark Background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#1d1d1d] rounded-2xl p-12 border-2 border-gray-700"
            >
              <div className="text-center mb-8">
                <h1 className="text-6xl font-bold text-brand-rose">supadirect</h1>
              </div>
              <div className="text-center">
                <p className="text-sm text-white/60 mb-4">For dark backgrounds</p>
                <div className="flex gap-3 justify-center">
                  <Button className="bg-brand-rose/15 text-brand-green-darker hover:bg-gray-100 flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    SVG
                  </Button>
                  <Button variant="outline" className="border-white text-brand-rose hover:bg-brand-rose/15 hover:text-brand-green-darker flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    PNG
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Color Palette</h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Our brand colors and their usage
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colors.map((color, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-green rounded-2xl overflow-hidden border-2 border-gray-200"
              >
                <div
                  className="h-32 flex items-center justify-center text-brand-rose font-mono text-lg"
                  style={{ backgroundColor: color.hex }}
                >
                  {color.hex}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-brand-green-darker">{color.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-brand-green">HEX</span>
                      <button
                        onClick={() => copyToClipboard(color.hex, `${color.name}-hex`)}
                        className="font-mono flex items-center gap-2 hover:text-[#208a8d]"
                      >
                        {color.hex}
                        {copiedColor === `${color.name}-hex` ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-brand-green">RGB</span>
                      <button
                        onClick={() => copyToClipboard(color.rgb, `${color.name}-rgb`)}
                        className="font-mono flex items-center gap-2 hover:text-[#208a8d]"
                      >
                        {color.rgb}
                        {copiedColor === `${color.name}-rgb` ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-brand-green-dark">{color.usage}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Typography</h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Font families and type scale
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-green-darker">Primary Font</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-brand-green mb-2">Font Family</div>
                  <div className="text-2xl font-bold">Inter</div>
                </div>
                <div>
                  <div className="text-sm text-brand-green mb-2">Usage</div>
                  <p className="text-brand-green-dark">Used for all headings, body text, and UI elements. System font stack for optimal performance.</p>
                </div>
                <div>
                  <div className="text-sm text-brand-green mb-2">Weights</div>
                  <div className="space-y-2">
                    <div className="font-normal">400 - Regular</div>
                    <div className="font-medium">500 - Medium</div>
                    <div className="font-semibold">600 - Semibold</div>
                    <div className="font-bold">700 - Bold</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-green-darker">Monospace Font</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-brand-green mb-2">Font Family</div>
                  <div className="text-2xl font-mono font-bold">Fira Code</div>
                </div>
                <div>
                  <div className="text-sm text-brand-green mb-2">Usage</div>
                  <p className="text-brand-green-dark">Used for code blocks, inline code, and technical content. Includes ligatures for better readability.</p>
                </div>
                <div>
                  <div className="text-sm text-brand-green mb-2">Example</div>
                  <div className="bg-[#1d1d1d] rounded-lg p-4 font-mono text-sm text-brand-rose">
                    <span className="text-purple-400">const</span> <span className="text-yellow-300">app</span> = <span className="text-blue-400">createApp</span>();
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
          >
            <h3 className="text-2xl font-bold mb-6 text-brand-green-darker">Type Scale</h3>
            <div className="space-y-4">
              <div className="text-6xl font-bold">Heading 1</div>
              <div className="text-5xl font-bold">Heading 2</div>
              <div className="text-4xl font-bold">Heading 3</div>
              <div className="text-3xl font-bold">Heading 4</div>
              <div className="text-2xl font-bold">Heading 5</div>
              <div className="text-xl font-bold">Heading 6</div>
              <div className="text-lg">Body Large</div>
              <div className="text-base">Body Regular</div>
              <div className="text-sm">Body Small</div>
              <div className="text-xs">Caption</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Usage Guidelines</h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Best practices for using our brand
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-2xl p-8 border-2 border-green-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-green-900 flex items-center gap-2">
                <Check className="w-6 h-6" />
                Do
              </h3>
              <ul className="space-y-3 text-brand-green-dark">
                <li>• Use the logo with adequate clear space</li>
                <li>• Maintain proper contrast for accessibility</li>
                <li>• Use approved color combinations</li>
                <li>• Scale the logo proportionally</li>
                <li>• Use high-resolution assets</li>
                <li>• Follow typography guidelines</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-red-50 rounded-2xl p-8 border-2 border-red-200"
            >
              <h3 className="text-2xl font-bold mb-4 text-red-900 flex items-center gap-2">
                <span className="text-2xl">✗</span>
                Don't
              </h3>
              <ul className="space-y-3 text-brand-green-dark">
                <li>• Alter the logo colors or proportions</li>
                <li>• Add effects, shadows, or outlines to the logo</li>
                <li>• Use unapproved color combinations</li>
                <li>• Place logo on busy backgrounds</li>
                <li>• Use low-resolution or pixelated assets</li>
                <li>• Rotate or distort the logo</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download Kit */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#208a8d] to-[#1a7070] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Download Brand Kit</h2>
          <p className="text-xl text-brand-rose/90 mb-8">
            Get all our brand assets in one convenient package
          </p>
          <Button className="bg-brand-rose/15 text-[#208a8d] hover:bg-gray-100 px-8 py-6 text-lg flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Download Complete Brand Kit (2.4 MB)
          </Button>
          <p className="text-sm text-white/70 mt-4">
            Includes logos, colors, fonts, and guidelines in PDF format
          </p>
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
