'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Package, Zap, Database, Cpu, Check, ArrowRight } from "lucide-react";
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

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState('');

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
            COMPONENTS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Pre-built components for your unified stack
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            Because everything runs on one platform, components work seamlessly across database, frontend, compute, and storage. No integration complexity.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-rose/50" />
              <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-brand-rose/30 focus:border-brand-rose focus:outline-none text-lg bg-brand-green-darker text-brand-rose placeholder:text-brand-rose/50"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
              Browse components
            </Button>
            <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
              View docs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">
              Why components work better on a unified platform
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Package className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">No integration work</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Components access your database, run compute, and update your frontend automatically. No API stitching between services.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">TypeScript-first</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  End-to-end type safety across database, functions, and frontend. Components are fully typed and autocomplete in your IDE.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">Sandboxed data</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Component data is automatically isolated in your database. Components only access your app data through explicit APIs.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-rose">Popular components</h2>
            <p className="text-xl text-brand-rose/80 text-center mb-12">
              Build faster with pre-built components that work across your entire stack
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agent",
                description: "Organize AI workflows with message history and vector search. Works seamlessly with GPU compute and database.",
                icon: "🤖",
                category: "AI"
              },
              {
                title: "Rate Limiter",
                description: "Type-safe, transactional rate limiting. Integrated with auth and database for accurate tracking.",
                icon: "⏱️",
                category: "Backend"
              },
              {
                title: "Stripe Payments",
                description: "Full Stripe integration with automatic database sync. Users, subscriptions, and billing unified.",
                icon: "💳",
                category: "Payments"
              },
              {
                title: "Vector Search",
                description: "Built-in vector search for AI embeddings. No separate Pinecone subscription needed.",
                icon: "🔍",
                category: "AI"
              },
              {
                title: "File Storage",
                description: "Upload and serve files with automatic CDN delivery. Integrated with auth for access control.",
                icon: "📁",
                category: "Storage"
              },
              {
                title: "Presence Tracking",
                description: "Track online users in real-time. Automatically syncs across database and frontend.",
                icon: "👥",
                category: "Realtime"
              }
            ].map((component, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all cursor-pointer h-full group">
                  <div className="text-4xl mb-4">{component.icon}</div>
                  <div className="inline-block bg-brand-rose/20 rounded-full px-3 py-1 text-xs text-brand-rose mb-3">
                    {component.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    {component.title}
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    {component.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-12 text-center">
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-4">
                Browse all components
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How Components Work */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-green-darker">
              How components work on Supadirect
            </h2>
          </FadeInSection>

          <div className="space-y-12">
            <FadeInSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-green-darker">Install with one command</h3>
                  <p className="text-brand-green-dark mb-6 leading-relaxed">
                    Components install like npm packages. No separate service configuration. No API keys to manage.
                  </p>
                  <div className="bg-brand-green-darker rounded-lg p-4 font-mono text-sm text-brand-rose">
                    <span className="text-green-400">$</span> npm i @supadirect/rate-limiter
                  </div>
                </div>
                <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                      <span className="text-brand-rose/80">Automatic database setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                      <span className="text-brand-rose/80">Type-safe APIs generated</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                      <span className="text-brand-rose/80">No external service needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark order-2 lg:order-1">
                  <div className="bg-brand-green-darker rounded-lg p-4 font-mono text-sm text-brand-rose">
                    <div className="text-brand-rose/70 mb-2">{`// Use in your functions`}</div>
                    <div>const limited = await rateLimit(</div>
                    <div className="ml-4">{`{ user: ctx.auth.userId }`}</div>
                    <div>);</div>
                    <div className="mt-4 text-brand-rose">✓ Fully typed</div>
                    <div className="text-brand-rose">✓ Transactional</div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-brand-green-darker">Integrated with your app</h3>
                  <p className="text-brand-green-dark leading-relaxed">
                    Components access your database, auth, and compute directly. No separate API calls. Everything type-safe.
                  </p>
                </div>
              </div>
            </FadeInSection>
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
              <Link href="/auth" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Authentication →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Use auth components with built-in user management and permissions.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/realtime" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Updates →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Components that automatically update with real-time data changes.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/templates" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Full-Stack Templates →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Start with templates that include pre-built components and integrations.
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
            <h2 className="text-5xl font-bold mb-6">Start building with components</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Get frontend hosting, database, auth, compute, and pre-built components in one platform. Starting at $99/month.
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
