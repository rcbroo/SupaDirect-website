'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Zap, Shield, Clock, Check, ArrowRight, TrendingDown, Server } from "lucide-react";
import Link from "next/link";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HostingPage() {
  return (
    <div className="min-h-screen bg-brand-green">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-brand-green">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-brand-rose/20 border border-brand-rose/30 rounded-full px-4 py-1 text-sm mb-6 text-brand-rose"
          >
            FRONTEND HOSTING
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Deploy to 150+ edge locations. No Vercel needed.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            Frontend hosting is built into the platform. Deploy Next.js, React, Vue to the edge globally. Automatic CDN, SSL certificates, custom domains, and analytics. Zero configuration needed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
              Start deploying
            </Button>
            <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
              View docs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">
              Everything Vercel offers, integrated with your backend
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">150+ Edge Locations</h3>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  Deploy your frontend to 150+ cities worldwide. Content is automatically cached at the edge closest to your users for sub-50ms response times.
                </p>
                <ul className="space-y-2 text-sm text-brand-rose/70">
                  <li>✓ North America: 40+ locations</li>
                  <li>✓ Europe: 35+ locations</li>
                  <li>✓ Asia-Pacific: 50+ locations</li>
                  <li>✓ South America, Africa, Middle East</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">Zero-Config Deployments</h3>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  Push to Git and deploy automatically. No build configuration needed. Supports Next.js, React, Vue, Svelte, and static sites out of the box.
                </p>
                <ul className="space-y-2 text-sm text-brand-rose/70">
                  <li>✓ Automatic framework detection</li>
                  <li>✓ Zero-downtime deployments</li>
                  <li>✓ Instant rollbacks</li>
                  <li>✓ Preview environments for PRs</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">Automatic SSL & Domains</h3>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  Free SSL certificates provisioned automatically. Bring your own domain or use a .supadirect.app subdomain. HTTPS enabled by default.
                </p>
                <ul className="space-y-2 text-sm text-brand-rose/70">
                  <li>✓ Free SSL certificates (Let's Encrypt)</li>
                  <li>✓ Custom domains in one click</li>
                  <li>✓ Wildcard SSL support</li>
                  <li>✓ Auto-renewal handled</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Comparison vs Vercel */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-rose">
              Supadirect vs Vercel for frontend hosting
            </h2>
            <p className="text-xl text-brand-rose/80 text-center mb-12">
              Get the same great deployment experience, plus integrated backend
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-brand-rose/30">
                    <th className="pb-4 pr-4 text-brand-rose font-semibold">Feature</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Vercel</th>
                    <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Edge locations</td>
                    <td className="py-4 px-4 text-brand-rose/70">100+</td>
                    <td className="py-4 pl-4 text-brand-rose">150+</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Deploy time</td>
                    <td className="py-4 px-4 text-brand-rose/70">~45 seconds</td>
                    <td className="py-4 pl-4 text-brand-rose">~30 seconds</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Custom domains</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">SSL certificates</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Analytics included</td>
                    <td className="py-4 px-4 text-brand-rose/70">Extra cost</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Included</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Backend integration</td>
                    <td className="py-4 px-4 text-brand-rose/70">Manual (separate services)</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Built-in</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Database included</td>
                    <td className="py-4 px-4 text-brand-rose/70">No</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Real-time sync</td>
                    <td className="py-4 px-4 text-brand-rose/70">No</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Yes</td>
                  </tr>
                  <tr className="border-b-2 border-brand-rose/30">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Auth included</td>
                    <td className="py-4 px-4 text-brand-rose/70">No</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Yes</td>
                  </tr>
                  <tr className="bg-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose font-bold">Starting price</td>
                    <td className="py-4 px-4 text-brand-rose/90 font-semibold">Free (limits) / $20/mo</td>
                    <td className="py-4 pl-4 text-brand-rose font-bold text-lg">$99/mo (all included)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-rose/20 rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-green-darker font-semibold text-lg">
                <strong>Vercel + separate backend: $200–600/month</strong> vs <strong className="text-brand-rose">Supadirect: $99–299/month</strong>
              </p>
              <p className="text-brand-green-dark mt-2">
                Save 50–70% by using integrated hosting instead of separate frontend + backend services
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Performance Details */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">
              Performance at every edge
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark">
                <Clock className="w-12 h-12 text-brand-rose mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">Sub-50ms Response Times</h3>
                <p className="text-brand-rose/80 mb-4 leading-relaxed">
                  Content is automatically cached at 150+ edge locations worldwide. Your users get sub-50ms response times regardless of where they are.
                </p>
                <div className="bg-brand-green-darker rounded-lg p-4 text-sm">
                  <p className="text-brand-rose/70 mb-2">Typical response times:</p>
                  <ul className="space-y-1 text-brand-rose/80">
                    <li>• Static assets: 10-30ms</li>
                    <li>• SSR pages: 30-80ms</li>
                    <li>• API routes: 50-150ms</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark">
                <TrendingDown className="w-12 h-12 text-brand-rose mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">Smart Caching</h3>
                <p className="text-brand-rose/80 mb-4 leading-relaxed">
                  Intelligent caching invalidation ensures users always get fresh content. Stale-while-revalidate pattern keeps your site fast.
                </p>
                <div className="bg-brand-green-darker rounded-lg p-4 text-sm">
                  <p className="text-brand-rose/70 mb-2">Automatic optimizations:</p>
                  <ul className="space-y-1 text-brand-rose/80">
                    <li>• Image optimization (AVIF/WebP)</li>
                    <li>• Code splitting</li>
                    <li>• Edge caching with purge API</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">How hosting works on Supadirect</h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Server className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">1. Push to Git</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Connect your GitHub, GitLab, or Bitbucket repo. Every push to main automatically triggers a new deployment. Preview branches get their own URLs.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">2. Auto-deploy</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Build happens in ~30 seconds. Framework auto-detected. Environment variables injected. Frontend + backend deployed together in one atomic operation.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">3. Live globally</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Your site is live on 150+ edge locations instantly. SSL configured, CDN enabled, analytics tracking. Zero manual config needed.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Supported Frameworks */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">
              Works with your favorite frameworks
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: "Next.js", features: ["SSR", "ISR", "API Routes"] },
              { name: "React", features: ["SPA", "Static", "Vite"] },
              { name: "Vue", features: ["Nuxt", "SPA", "SSR"] },
              { name: "Svelte", features: ["SvelteKit", "Static", "SSR"] },
              { name: "Remix", features: ["SSR", "Nested routes", "Loaders"] },
              { name: "Astro", features: ["Static", "SSR", "Islands"] },
              { name: "Angular", features: ["SSR", "Universal", "SPA"] },
              { name: "Static Sites", features: ["HTML", "Markdown", "Hugo"] }
            ].map((framework, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green rounded-xl p-6 border-2 border-brand-green-dark">
                  <h3 className="text-lg font-bold mb-3 text-brand-rose">{framework.name}</h3>
                  <ul className="space-y-1 text-sm text-brand-rose/70">
                    {framework.features.map((feature, j) => (
                      <li key={j}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-rose">Explore related features</h2>
            <p className="text-xl text-brand-rose/80 text-center mb-12 max-w-3xl mx-auto">
              Build faster with our integrated platform features
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection>
              <Link href="/features/database" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Database →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Connect your frontend to a TypeScript-native database with real-time sync.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/features/compute" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    GPU/NPU Compute →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Run serverless functions and AI workloads alongside your frontend.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/auth" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Authentication →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Add user auth to your deployed frontend in minutes. No separate service.
                  </p>
                </div>
              </Link>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-brand-green-darker text-brand-rose relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="border border-brand-rose/10"></div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeInSection>
            <h2 className="text-5xl font-bold mb-6">Deploy your frontend today</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Global edge hosting, automatic SSL, and CDN delivery. Plus integrated database, auth, and compute. All starting at $99/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
                Start free trial
              </Button>
              <Link href="/pricing">
                <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
                  View pricing
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
