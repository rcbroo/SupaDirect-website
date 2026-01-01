'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Radio, Users, Check, ArrowRight, Activity } from "lucide-react";
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

export default function RealtimePage() {
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
            REAL-TIME FEATURES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Real-time updates without the complexity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            No Pusher. No Ably. No separate WebSocket service. Real-time features are built into the platform—included with your database, frontend hosting, and compute.
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
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">How real-time works on Supadirect</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              Real-time is automatic. Your queries subscribe to changes, and your UI updates instantly—no configuration needed
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Radio className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">1. Automatic subscriptions</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Every query automatically subscribes to database changes. No manual WebSocket setup, no channel management. Just write a query and it stays up to date.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">2. Instant propagation</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  When data changes—from any source—all subscribed clients get updates in milliseconds. No polling. No refresh buttons. Just instant sync.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">3. Presence built-in</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Track online users, cursors, and activity status out of the box. No third-party presence service needed—it's part of the platform.
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
              Why real-time works better as part of the platform
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeInSection>
              <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">Integrated with your database</h3>
              <p className="text-xl text-brand-rose/80 mb-6 leading-relaxed">
                Because real-time runs on the same platform as your database and frontend, there's zero latency between data changing and clients being notified. No separate API calls to Pusher/Ably.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Sub-100ms update latency</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">No API integration headaches</span>
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
                  <div className="text-brand-rose/70 mb-2">{`// Real-time just works`}</div>
                  <div>const messages = useQuery(</div>
                  <div className="ml-4">api.messages.list</div>
                  <div>);</div>
                  <div className="mt-4 text-brand-rose/70">{`// No Pusher config needed`}</div>
                  <div className="text-brand-rose">✓ Automatic subscriptions</div>
                  <div className="text-brand-rose">✓ Instant updates</div>
                  <div className="text-brand-rose">✓ Zero setup</div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20">
                <h4 className="text-lg font-bold mb-4 text-brand-green-darker">With Separate Services</h4>
                <ul className="space-y-2 text-brand-green-dark text-sm">
                  <li>• Frontend: Vercel ($50-200/mo)</li>
                  <li>• Database: Convex ($100-300/mo)</li>
                  <li>• Real-time: Pusher/Ably ($100-300/mo)</li>
                  <li>• Manual WebSocket integration</li>
                  <li>• Complex reconnection logic</li>
                  <li className="font-bold text-brand-green-darker pt-2">Total: $250-800/month</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose">
                <h4 className="text-lg font-bold mb-4 text-brand-rose">With Supadirect</h4>
                <ul className="space-y-2 text-brand-rose/80 text-sm">
                  <li>✓ Frontend hosting included</li>
                  <li>✓ Database included</li>
                  <li>✓ Real-time included ($0 extra)</li>
                  <li>✓ Automatic subscriptions</li>
                  <li>✓ Built-in reconnection</li>
                  <li className="font-bold text-brand-rose pt-2">Total: $99–299/month</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">Built for real-time experiences</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Live collaboration",
                description: "Build Google Docs-style editors, multiplayer whiteboards, and real-time co-editing features",
                examples: ["Collaborative docs", "Multiplayer cursors", "Live comments"]
              },
              {
                title: "Chat & messaging",
                description: "Real-time chat, notifications, and presence indicators without Pusher or Socket.io",
                examples: ["Team chat apps", "Support messaging", "Live notifications"]
              },
              {
                title: "Live dashboards",
                description: "Display real-time metrics, analytics, and monitoring data without manual refreshing",
                examples: ["Admin dashboards", "IoT monitoring", "Live analytics"]
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

      {/* Cost Comparison */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-rose">
              Pusher vs Supadirect for real-time apps
            </h2>
            <p className="text-xl text-brand-rose/80 text-center mb-12">
              See what you save by using integrated real-time instead of a separate service
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-brand-rose/30">
                    <th className="pb-4 pr-4 text-brand-rose font-semibold">Feature</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Pusher / Ably</th>
                    <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Real-time subscriptions</td>
                    <td className="py-4 px-4 text-brand-rose/70">Separate service</td>
                    <td className="py-4 pl-4 text-brand-rose">Built-in</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Database integration</td>
                    <td className="py-4 px-4 text-brand-rose/70">Manual API calls</td>
                    <td className="py-4 pl-4 text-brand-rose">Automatic</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Frontend hosting</td>
                    <td className="py-4 px-4 text-brand-rose/70">Separate (Vercel)</td>
                    <td className="py-4 pl-4 text-brand-rose">Included</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Presence tracking</td>
                    <td className="py-4 px-4 text-brand-rose/70">Extra $</td>
                    <td className="py-4 pl-4 text-brand-rose">Included</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">WebSocket setup</td>
                    <td className="py-4 px-4 text-brand-rose/70">Manual config</td>
                    <td className="py-4 pl-4 text-brand-rose">Zero config</td>
                  </tr>
                  <tr className="border-b-2 border-brand-rose/30">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Reconnection logic</td>
                    <td className="py-4 px-4 text-brand-rose/70">Custom code</td>
                    <td className="py-4 pl-4 text-brand-rose">Automatic</td>
                  </tr>
                  <tr className="bg-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose font-bold">Monthly cost for real-time app*</td>
                    <td className="py-4 px-4 text-brand-rose/90 font-semibold">$250–800/mo</td>
                    <td className="py-4 pl-4 text-brand-rose font-bold text-lg">$99–299/mo</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-brand-rose/70 mt-6 italic">
                * Estimated for chat app with 10K users, 500K messages/month, presence tracking
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-rose/20 rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-green-darker font-semibold text-lg">
                <strong>Separate services: $250–800/month</strong> vs <strong className="text-brand-rose">Supadirect: $99–299/month</strong>
              </p>
              <p className="text-brand-green-dark mt-2">
                Save 60-70% by using integrated real-time instead of Pusher/Ably
              </p>
            </div>
          </FadeInSection>
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
              <Link href="/sync" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Sync →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Automatic data synchronization across all devices. No WebSocket configuration needed.
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
                    Built-in auth with 80+ OAuth providers. No Auth0 or Clerk needed.
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
                    Real-time app templates with chat, collaboration, and presence features included.
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
            <h2 className="text-5xl font-bold mb-6">Start building real-time apps today</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Get frontend hosting, database, real-time features, and compute in one platform. No Pusher needed. Starting at $99/month.
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
