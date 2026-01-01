'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Search, Rocket, Check, ArrowRight, Code, Zap, Database } from "lucide-react";
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

export default function TemplatesPage() {
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
            TEMPLATES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Start with a complete stack, not just a frontend
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            Templates include frontend, backend, database, auth, and deployment config. Deploy the full stack in one command—no AWS, Vercel, or Convex configuration needed.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
              Browse templates
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
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">How templates work on Supadirect</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              Unlike frontend-only templates, Supadirect templates include your entire application—database schema, backend functions, auth config, and deployment settings
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">1. Clone the full stack</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  One command clones frontend UI, backend functions, database schema, auth providers, and deployment config. Everything you need to run the app.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Database className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">2. Database auto-provisioned</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  The database schema is automatically created in your Supadirect project. No manual migrations or AWS RDS setup required.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">3. Deploy in one command</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Run <code className="bg-brand-green-darker px-2 py-1 rounded text-sm">supadirect deploy</code> and your entire app goes live. No Vercel config, no AWS console, no Convex setup.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">
              Why templates work better on a unified platform
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeInSection>
              <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">No service stitching required</h3>
              <p className="text-xl text-brand-rose/80 mb-6 leading-relaxed">
                Because the frontend, backend, database, and auth all run on one platform, templates just work. No environment variables for 5 different services. No API key management.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Zero service integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">One deployment command</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Production-ready in minutes</span>
                </li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20">
                <div className="bg-brand-green-darker rounded-lg p-4 font-mono text-sm text-brand-rose">
                  <div className="text-brand-rose/70 mb-2">{`# Clone template`}</div>
                  <div className="text-green-400">$</div> <span>supadirect init --template saas</span>
                  <div className="mt-4 text-brand-rose/70">{`# Deploy everything`}</div>
                  <div className="text-green-400">$</div> <span>supadirect deploy</span>
                  <div className="mt-4 text-brand-rose">✓ Frontend deployed</div>
                  <div className="text-brand-rose">✓ Database provisioned</div>
                  <div className="text-brand-rose">✓ Auth configured</div>
                  <div className="text-brand-rose">✓ Backend live</div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20">
                <h4 className="text-lg font-bold mb-4 text-brand-green-darker">With Separate Services</h4>
                <ul className="space-y-2 text-brand-green-dark text-sm">
                  <li>• Clone frontend template from Vercel</li>
                  <li>• Set up Convex backend separately</li>
                  <li>• Configure AWS S3 for storage</li>
                  <li>• Add Auth0/Clerk for authentication</li>
                  <li>• Connect all services with API keys</li>
                  <li>• Deploy to 4 different platforms</li>
                  <li className="font-bold text-brand-green-darker pt-2">Time: 2-4 hours setup</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose">
                <h4 className="text-lg font-bold mb-4 text-brand-rose">With Supadirect</h4>
                <ul className="space-y-2 text-brand-rose/80 text-sm">
                  <li>✓ Clone full-stack template</li>
                  <li>✓ Database auto-provisioned</li>
                  <li>✓ Auth pre-configured</li>
                  <li>✓ Storage included</li>
                  <li>✓ Backend functions ready</li>
                  <li>✓ Deploy with one command</li>
                  <li className="font-bold text-brand-rose pt-2">Time: 15 minutes</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Popular Templates */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Popular full-stack templates</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12">
              Each template includes frontend, backend, database, auth, and deployment config
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "SaaS Starter",
                description: "Complete SaaS template with auth, payments (Stripe), teams, and admin dashboard. Production-ready billing and user management.",
                icon: "💼",
                features: ["Stripe integration", "Team collaboration", "Admin dashboard"]
              },
              {
                title: "AI Chat App",
                description: "Real-time chat with AI responses, vector search, and message history. Includes GPU compute for LLM inference.",
                icon: "🤖",
                features: ["Vector search", "GPU compute", "Real-time chat"]
              },
              {
                title: "E-commerce Store",
                description: "Full e-commerce with product catalog, cart, checkout, and order management. Stripe payments included.",
                icon: "🛍️",
                features: ["Product catalog", "Cart & checkout", "Order tracking"]
              },
              {
                title: "Social Network",
                description: "Twitter/Reddit-style app with posts, comments, likes, and real-time feeds. Built-in presence and notifications.",
                icon: "📱",
                features: ["Real-time feeds", "Likes & comments", "User profiles"]
              },
              {
                title: "Collaborative Editor",
                description: "Google Docs-style editor with real-time collaboration, cursors, and comments. Multiplayer out of the box.",
                icon: "📝",
                features: ["Real-time collab", "Cursors & presence", "Comments"]
              },
              {
                title: "Analytics Dashboard",
                description: "Real-time analytics with charts, metrics, and data visualization. Track events and user behavior.",
                icon: "📊",
                features: ["Real-time charts", "Event tracking", "User analytics"]
              }
            ].map((template, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark hover:border-brand-rose transition-all cursor-pointer h-full group">
                  <div className="text-4xl mb-4">{template.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed mb-4">
                    {template.description}
                  </p>
                  <div className="space-y-2">
                    {template.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-brand-rose/60" />
                        <span className="text-brand-rose/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-12 text-center">
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-4">
                Browse all templates
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-rose">
              Starting from scratch vs full-stack templates
            </h2>
            <p className="text-xl text-brand-rose/80 text-center mb-12">
              See the time and cost savings of deploying a complete template instead of configuring separate services
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-brand-rose/30">
                    <th className="pb-4 pr-4 text-brand-rose font-semibold">Task</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Separate Services</th>
                    <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect Template</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Frontend setup</td>
                    <td className="py-4 px-4 text-brand-rose/70">Clone + Vercel config (30 min)</td>
                    <td className="py-4 pl-4 text-brand-rose">Included (0 min)</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Database setup</td>
                    <td className="py-4 px-4 text-brand-rose/70">Convex init + schema (45 min)</td>
                    <td className="py-4 pl-4 text-brand-rose">Auto-provisioned (0 min)</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Auth configuration</td>
                    <td className="py-4 px-4 text-brand-rose/70">Auth0/Clerk setup (30 min)</td>
                    <td className="py-4 pl-4 text-brand-rose">Pre-configured (0 min)</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Backend functions</td>
                    <td className="py-4 px-4 text-brand-rose/70">Write from scratch (2-4 hrs)</td>
                    <td className="py-4 pl-4 text-brand-rose">Included (0 min)</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Service integration</td>
                    <td className="py-4 px-4 text-brand-rose/70">Connect APIs (1 hr)</td>
                    <td className="py-4 pl-4 text-brand-rose">Works out of the box (0 min)</td>
                  </tr>
                  <tr className="border-b-2 border-brand-rose/30">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Deployment</td>
                    <td className="py-4 px-4 text-brand-rose/70">Deploy to 3+ platforms (30 min)</td>
                    <td className="py-4 pl-4 text-brand-rose">One command (2 min)</td>
                  </tr>
                  <tr className="bg-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose font-bold">Total setup time</td>
                    <td className="py-4 px-4 text-brand-rose/90 font-semibold">4-6 hours</td>
                    <td className="py-4 pl-4 text-brand-rose font-bold text-lg">15 minutes</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-brand-rose/70 mt-6 italic">
                * Estimated for deploying a SaaS starter template with auth, database, and payments
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-rose/20 rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-green-darker font-semibold text-lg">
                <strong>Separate services: 4-6 hours setup</strong> vs <strong className="text-brand-rose">Supadirect: 15 minutes</strong>
              </p>
              <p className="text-brand-green-dark mt-2">
                Get to production 16x faster with full-stack templates
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
              <Link href="/components" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Pre-Built Components →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Extend templates with pre-built components for common features.
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
                    All templates include built-in authentication with 80+ OAuth providers.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/sync" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Sync →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Templates with real-time data sync for collaborative and live features.
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
            <h2 className="text-5xl font-bold mb-6">Deploy a full-stack app in 15 minutes</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Get frontend hosting, database, auth, backend functions, and deployment in one template. No AWS, Vercel, or Convex configuration needed.
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
