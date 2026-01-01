'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Zap, Code, Shield, Check, ArrowRight, TrendingDown, Activity } from "lucide-react";
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

export default function DatabasePage() {
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
            REAL-TIME DATABASE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            TypeScript-native database with real-time sync
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            Write type-safe queries in TypeScript. Real-time subscriptions built-in. ACID transactions by default. No eventual consistency headaches. Convex API parity included.
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

      {/* TypeScript-First */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-green-darker">
              TypeScript from database to frontend
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                <Code className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-green-darker">End-to-end type safety</h3>
              <p className="text-brand-green-dark mb-6 leading-relaxed">
                Define your schema in TypeScript. Queries are type-checked at compile time. Your IDE autocompletes every field, every function, every argument. No SQL string concatenation. No runtime type errors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Schema defined in TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Automatic type generation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">IDE autocomplete everywhere</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">No runtime type mismatches</span>
                </li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark">
                <div className="bg-brand-green-darker rounded-lg p-4 font-mono text-sm text-brand-rose overflow-x-auto">
                  <div className="text-brand-rose/70 mb-2">{`// Define your schema`}</div>
                  <div><span className="text-purple-400">export const</span> schema = defineSchema({'{'}</div>
                  <div className="ml-4">todos: defineTable({'{'}</div>
                  <div className="ml-8">text: v.string(),</div>
                  <div className="ml-8">completed: v.boolean(),</div>
                  <div className="ml-8">userId: v.id(<span className="text-green-400">"users"</span>),</div>
                  <div className="ml-4">{'}'}),</div>
                  <div>{'}'});</div>
                  <div className="mt-4 text-brand-rose/70">{`// Query with full type safety`}</div>
                  <div className="mt-2"><span className="text-purple-400">const</span> todos = <span className="text-purple-400">await</span> ctx.db</div>
                  <div className="ml-4">.query(<span className="text-green-400">"todos"</span>)</div>
                  <div className="ml-4">.filter(q ={">"} q.eq(</div>
                  <div className="ml-8">q.field(<span className="text-green-400">"completed"</span>),</div>
                  <div className="ml-8"><span className="text-orange-400">false</span></div>
                  <div className="ml-4">))</div>
                  <div className="ml-4">.collect();</div>
                  <div className="mt-3 text-brand-rose/70">{`// ✓ TypeScript knows the shape`}</div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Real-Time Subscriptions */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">
              Real-time subscriptions, no polling
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20">
                <div className="bg-brand-green rounded-lg p-4 font-mono text-sm text-brand-rose overflow-x-auto">
                  <div className="text-brand-rose/70 mb-2">{`// Frontend component`}</div>
                  <div><span className="text-purple-400">export function</span> <span className="text-yellow-300">TodoList</span>() {'{'}</div>
                  <div className="ml-4 text-brand-rose/70">{`// Automatically subscribes`}</div>
                  <div className="ml-4"><span className="text-purple-400">const</span> todos = <span className="text-blue-400">useQuery</span>(</div>
                  <div className="ml-8">api.todos.list</div>
                  <div className="ml-4">);</div>
                  <div className="mt-3 ml-4 text-brand-rose/70">{`// Updates automatically when data changes`}</div>
                  <div className="ml-4"><span className="text-purple-400">return</span> {'<ul>'}</div>
                  <div className="ml-8">{'{'}{'}'}todos?.map(todo ={">"} (</div>
                  <div className="ml-10">{'<li key={todo._id}>'}</div>
                  <div className="ml-12">{'{'}{'}'}todo.text{'}'}</div>
                  <div className="ml-10">{'</li>'}</div>
                  <div className="ml-8">)){'}'}{'}'}</div>
                  <div className="ml-4">{'</ul>'}</div>
                  <div>{'}'}</div>
                  <div className="mt-3 text-green-400">{`// ✓ No polling, no manual refetch`}</div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">Automatic reactivity</h3>
              <p className="text-brand-rose/80 mb-6 leading-relaxed">
                Every query automatically subscribes to changes. When data updates—from any source—your UI re-renders instantly. No polling. No manual cache invalidation. Just automatic sync.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Sub-100ms update latency</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">No WebSocket configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Automatic reconnection</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Works across all tabs/devices</span>
                </li>
              </ul>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Convex API Parity */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-green-darker">
              Convex API parity included
            </h2>
            <p className="text-xl text-brand-green-dark text-center mb-12">
              Migrating from Convex? We support the same API patterns you're already using
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-brand-rose/30">
                    <th className="pb-4 pr-4 text-brand-rose font-semibold">Feature</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Convex</th>
                    <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">TypeScript-first queries</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Real-time subscriptions</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">ACID transactions</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Vector search</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Full-text search</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose/70 inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Frontend hosting included</td>
                    <td className="py-4 px-4 text-brand-rose/70">No</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">GPU compute included</td>
                    <td className="py-4 px-4 text-brand-rose/70">No</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Yes</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Auth included</td>
                    <td className="py-4 px-4 text-brand-rose/70">No</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Yes</td>
                  </tr>
                  <tr className="border-b-2 border-brand-rose/30">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Storage included</td>
                    <td className="py-4 px-4 text-brand-rose/70 text-xs">Limited</td>
                    <td className="py-4 pl-4 text-brand-rose">✓ Unlimited</td>
                  </tr>
                  <tr className="bg-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-green-darker font-bold">Starting price</td>
                    <td className="py-4 px-4 text-brand-green-dark font-semibold">Free / $25/mo</td>
                    <td className="py-4 pl-4 text-brand-rose font-bold text-lg">$99/mo (all included)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-green rounded-lg border border-brand-green-dark text-center">
              <p className="text-brand-rose font-semibold text-lg">
                <strong>Convex + separate hosting/compute: $200–500/month</strong> vs <strong className="text-brand-rose-light">Supadirect: $99–299/month</strong>
              </p>
              <p className="text-brand-rose/80 mt-2">
                Save 50–70% by using integrated database instead of separate backend service
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Built-in Features */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">
              Enterprise features built-in
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 h-full">
                <Shield className="w-12 h-12 text-brand-rose mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-rose">ACID Transactions</h3>
                <p className="text-brand-rose/80 text-sm leading-relaxed">
                  Strong consistency by default. No eventual consistency headaches. All updates happen in transactions with automatic rollback on error.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 h-full">
                <Database className="w-12 h-12 text-brand-rose mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-rose">Vector Search</h3>
                <p className="text-brand-rose/80 text-sm leading-relaxed">
                  Built-in vector search for AI embeddings. No separate Pinecone subscription. Store embeddings directly alongside your data.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 h-full">
                <Zap className="w-12 h-12 text-brand-rose mb-4" />
                <h3 className="text-xl font-bold mb-3 text-brand-rose">Full-Text Search</h3>
                <p className="text-brand-rose/80 text-sm leading-relaxed">
                  Full-text search built into the database. No Elasticsearch cluster to manage. Index any field, search instantly.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-green-darker">
              Database pricing
            </h2>
            <p className="text-xl text-brand-green-dark text-center mb-12">
              Pay for storage and throughput. No per-query charges.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-xl p-6 border-2 border-brand-green-dark">
                <h3 className="text-lg font-bold mb-2 text-brand-rose">Starter</h3>
                <p className="text-brand-rose/70 mb-4 text-sm">Included in $99/month</p>
                <ul className="space-y-2 text-sm text-brand-rose/80">
                  <li>• 5GB storage</li>
                  <li>• 10M queries/month</li>
                  <li>• Real-time sync</li>
                  <li>• Vector search</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/20 rounded-xl p-6 border-2 border-brand-rose">
                <h3 className="text-lg font-bold mb-2 text-brand-green-darker">Growth</h3>
                <p className="text-brand-green-dark mb-4 text-sm">Included in $599/month</p>
                <ul className="space-y-2 text-sm text-brand-green-dark">
                  <li>• 50GB storage</li>
                  <li>• 100M queries/month</li>
                  <li>• Real-time sync</li>
                  <li>• Vector + full-text search</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-xl p-6 border-2 border-brand-green-dark">
                <h3 className="text-lg font-bold mb-2 text-brand-rose">Scale</h3>
                <p className="text-brand-rose/70 mb-4 text-sm">Included in $1,999/month</p>
                <ul className="space-y-2 text-sm text-brand-rose/80">
                  <li>• 200GB+ storage</li>
                  <li>• 500M+ queries/month</li>
                  <li>• Dedicated instances</li>
                  <li>• Priority support</li>
                </ul>
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
              <Link href="/sync" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Sync →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Automatic data synchronization across all connected clients.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/features/hosting" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Frontend Hosting →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Deploy your database-connected frontend to 150+ edge locations.
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
                    Run serverless functions and AI workloads with database access.
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
            <h2 className="text-5xl font-bold mb-6">Start building with a real-time database</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              TypeScript-native queries, automatic subscriptions, ACID transactions. Plus integrated frontend hosting, auth, and compute. All starting at $99/month.
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
