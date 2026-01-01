'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, RefreshCw, Database, Globe, Check, ArrowRight } from "lucide-react";
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

export default function SyncPage() {
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
            REAL-TIME SYNC
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Real-time sync built into the platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            No separate WebSocket service. No manual state management. Your data stays in sync across all devices automatically—part of the unified Supadirect platform.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
              Start building
            </Button>
            <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
              View docs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">How real-time sync works</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              Supadirect tracks dependencies and automatically updates your UI when data changes—no configuration needed
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">1. Automatic tracking</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Supadirect automatically tracks which data each query depends on. When that data changes—from any source—your query re-runs.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">2. Instant updates</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Changes propagate to all subscribed clients in milliseconds. No polling. No manual WebSocket management. Just instant sync.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">3. ACID guarantees</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  All updates happen in transactions. No eventual consistency headaches. Your data is always correct, always in sync.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Integrated Platform Benefits */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">
              Why sync works better as part of the platform
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeInSection>
              <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">Syncs with your frontend hosting</h3>
              <p className="text-xl text-brand-rose/80 mb-6 leading-relaxed">
                Because Supadirect includes frontend hosting, database, and CDN in one platform, real-time updates are optimized end-to-end. No separate services to coordinate.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Edge-optimized sync (sub-100ms latency)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">No CORS configuration needed</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Automatic reconnection handling</span>
                </li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20">
                <div className="bg-brand-green-darker rounded-lg p-4 font-mono text-sm text-brand-rose">
                  <div className="text-brand-rose/70 mb-2">{`// Your frontend auto-syncs`}</div>
                  <div>const messages = useQuery(</div>
                  <div className="ml-4">api.messages.list</div>
                  <div>);</div>
                  <div className="mt-4 text-brand-rose/70">{`// Updates appear instantly`}</div>
                  <div className="mt-2 text-brand-rose">✓ No polling</div>
                  <div className="text-brand-rose">✓ No WebSocket setup</div>
                  <div className="text-brand-rose">✓ Just works</div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20">
                <h4 className="text-lg font-bold mb-4 text-brand-green-darker">With Separate Services</h4>
                <ul className="space-y-2 text-brand-green-dark text-sm">
                  <li>• Vercel for frontend hosting</li>
                  <li>• Firebase/Pusher for real-time</li>
                  <li>• AWS for compute</li>
                  <li>• Manual WebSocket configuration</li>
                  <li>• Complex state management</li>
                  <li className="font-bold text-brand-green-darker pt-2">Total: $300–800/month</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose">
                <h4 className="text-lg font-bold mb-4 text-brand-rose">With Supadirect</h4>
                <ul className="space-y-2 text-brand-rose/80 text-sm">
                  <li>✓ Frontend hosting included</li>
                  <li>✓ Real-time sync built-in</li>
                  <li>✓ Compute + storage included</li>
                  <li>✓ Zero WebSocket config</li>
                  <li>✓ Automatic state management</li>
                  <li className="font-bold text-brand-rose pt-2">Total: $99–299/month</li>
                </ul>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-rose/20 rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-green-darker font-semibold text-lg">
                <strong>Separate services: $300–800/month</strong> vs <strong className="text-brand-rose">Supadirect: $99–299/month</strong>
              </p>
              <p className="text-brand-green-dark mt-2">
                Save 60-70% by using integrated real-time sync instead of separate services
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">Built for real-time apps</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Collaborative tools",
                description: "Build docs, whiteboards, and multiplayer apps where everyone sees changes instantly",
                examples: ["Google Docs clone", "Figma-like editor", "Multiplayer games"]
              },
              {
                title: "Live dashboards",
                description: "Show real-time metrics, analytics, and monitoring without manual refreshes",
                examples: ["Admin dashboards", "Analytics platforms", "IoT monitoring"]
              },
              {
                title: "Chat & messaging",
                description: "Real-time messages, notifications, and presence indicators out of the box",
                examples: ["Slack clone", "Support chat", "Team messaging"]
              }
            ].map((useCase, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose">{useCase.title}</h3>
                  <p className="text-brand-rose/80 mb-4 text-sm leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2">
                    {useCase.examples.map((example, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <ArrowRight className="w-4 h-4 text-brand-rose/60" />
                        <span className="text-brand-rose/70">{example}</span>
                      </div>
                    ))}
                  </div>
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
              <Link href="/realtime" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Updates →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Automatic subscriptions and presence tracking. No Pusher or Ably needed.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/components" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Pre-Built Components →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    TypeScript-first components that work across your unified stack.
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
                    Deploy complete apps in 15 minutes with frontend, backend, and database included.
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
            <h2 className="text-5xl font-bold mb-6">Start building real-time apps</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Get frontend hosting, database, real-time sync, and compute in one platform. Starting at $99/month.
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
