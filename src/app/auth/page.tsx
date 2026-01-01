'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Lock, Shield, Key, Check, ArrowRight, Users } from "lucide-react";
import Link from "next/link";

function FadeInSection({ children }: { children: React.ReactNode}) {
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

export default function AuthPage() {
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
            AUTHENTICATION
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Authentication built into your platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            No Auth0. No Clerk. No separate identity service. Authentication is built into the platform—integrated with your database, functions, and frontend.
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
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">How authentication works on Supadirect</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              User data lives in your database, accessible from your functions. No external API calls to Auth0 or Clerk needed
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">1. Users in your database</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  User accounts are stored directly in your Supadirect database. Query and manage users just like any other data—no separate service needed.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">2. 80+ OAuth providers</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Google, GitHub, Microsoft, Apple—all included. One-click setup for any OAuth provider. No configuration across multiple services.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">3. Integrated permissions</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Check user permissions directly in your functions. No API roundtrips to Auth0/Clerk. Everything type-safe and instant.
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
              Why auth works better as part of the platform
            </h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <FadeInSection>
              <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">Direct database access to users</h3>
              <p className="text-xl text-brand-rose/80 mb-6 leading-relaxed">
                Because users live in your Supadirect database, you can query them like any other table. No separate Auth0/Clerk API calls. No rate limits. Just instant access.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Query users with TypeScript</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">Join users with your app data</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-rose/80">No external API dependencies</span>
                </li>
              </ul>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20">
                <div className="bg-brand-green-darker rounded-lg p-4 font-mono text-sm text-brand-rose">
                  <div className="text-brand-rose/70 mb-2">{`// Users are just data`}</div>
                  <div>const user = await ctx.db</div>
                  <div className="ml-4">.get(args.userId);</div>
                  <div className="mt-4 text-brand-rose/70">{`// No Auth0 API call needed`}</div>
                  <div className="text-brand-rose">✓ Type-safe</div>
                  <div className="text-brand-rose">✓ Instant</div>
                  <div className="text-brand-rose">✓ No rate limits</div>
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
                  <li>• Auth: Auth0/Clerk ($50-200/mo)</li>
                  <li>• Database: Convex ($100-300/mo)</li>
                  <li>• Separate API calls to fetch users</li>
                  <li>• Complex permission syncing</li>
                  <li className="font-bold text-brand-green-darker pt-2">Total: $200-700/month</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose">
                <h4 className="text-lg font-bold mb-4 text-brand-rose">With Supadirect</h4>
                <ul className="space-y-2 text-brand-rose/80 text-sm">
                  <li>✓ Frontend hosting included</li>
                  <li>✓ Auth included ($0 extra)</li>
                  <li>✓ Database included</li>
                  <li>✓ Users in your database</li>
                  <li>✓ Permissions built-in</li>
                  <li className="font-bold text-brand-rose pt-2">Total: $99–299/month</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* OAuth Providers */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">80+ OAuth providers included</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12">
              Google, GitHub, Microsoft, Apple, and 75+ more. All included. No extra configuration.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Google', color: 'from-red-400 to-yellow-400' },
              { name: 'GitHub', color: 'from-gray-700 to-gray-900' },
              { name: 'Microsoft', color: 'from-blue-500 to-cyan-400' },
              { name: 'Apple', color: 'from-gray-800 to-black' },
              { name: 'Discord', color: 'from-indigo-500 to-purple-500' },
              { name: 'Slack', color: 'from-purple-500 to-pink-500' },
              { name: 'LinkedIn', color: 'from-blue-600 to-blue-700' },
              { name: 'Twitter', color: 'from-sky-400 to-blue-500' },
            ].map((provider, i) => (
              <FadeInSection key={i}>
                <div className={`bg-gradient-to-br ${provider.color} rounded-2xl p-6 h-32 flex items-center justify-center text-white font-bold text-xl border-2 border-white/20 hover:scale-105 transition-transform cursor-pointer`}>
                  {provider.name}
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection>
            <div className="mt-12 text-center">
              <p className="text-brand-green-dark text-lg">
                Plus 75+ more providers supported via Auth.js ecosystem
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">Built for every auth pattern</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Magic links & OTP",
                description: "Passwordless authentication with email magic links or one-time passwords. No password management headaches.",
                examples: ["Email magic links", "SMS OTP codes", "Passwordless login"]
              },
              {
                title: "OAuth & social login",
                description: "One-click authentication with Google, GitHub, and 80+ providers. Secure, fast, and familiar to users.",
                examples: ["Google Sign-In", "GitHub OAuth", "Apple Sign In"]
              },
              {
                title: "Email & password",
                description: "Classic authentication with secure password hashing (Scrypt by default). Full control over the flow.",
                examples: ["Registration forms", "Password reset", "Account management"]
              }
            ].map((useCase, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 h-full">
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
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-green-darker">
              Auth0/Clerk vs Supadirect for authentication
            </h2>
            <p className="text-xl text-brand-green-dark text-center mb-12">
              See what you save by using integrated auth instead of a separate identity service
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="border-b-2 border-brand-rose/30">
                    <th className="pb-4 pr-4 text-brand-rose font-semibold">Feature</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Auth0 / Clerk</th>
                    <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">User storage</td>
                    <td className="py-4 px-4 text-brand-rose/70">Separate service</td>
                    <td className="py-4 pl-4 text-brand-rose">Your database</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">OAuth providers</td>
                    <td className="py-4 px-4 text-brand-rose/70">Extra config each</td>
                    <td className="py-4 pl-4 text-brand-rose">80+ included</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Database access</td>
                    <td className="py-4 px-4 text-brand-rose/70">API calls required</td>
                    <td className="py-4 pl-4 text-brand-rose">Direct queries</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Frontend hosting</td>
                    <td className="py-4 px-4 text-brand-rose/70">Separate (Vercel)</td>
                    <td className="py-4 pl-4 text-brand-rose">Included</td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Type safety</td>
                    <td className="py-4 px-4 text-brand-rose/70">SDK-based</td>
                    <td className="py-4 pl-4 text-brand-rose">End-to-end TypeScript</td>
                  </tr>
                  <tr className="border-b-2 border-brand-rose/30">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Per-user pricing</td>
                    <td className="py-4 px-4 text-brand-rose/70">$0.05–0.20 per user</td>
                    <td className="py-4 pl-4 text-brand-rose">$0 (flat monthly)</td>
                  </tr>
                  <tr className="bg-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-green-darker font-bold">Monthly cost for 10K users*</td>
                    <td className="py-4 px-4 text-brand-green-dark font-semibold">$200–700/mo</td>
                    <td className="py-4 pl-4 text-brand-rose font-bold text-lg">$99–299/mo</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-brand-rose/70 mt-6 italic">
                * Estimated for app with 10K users, OAuth + email/password auth, basic permissions
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-green-darker rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-rose font-semibold text-lg">
                <strong>Separate services: $200–700/month</strong> vs <strong className="text-brand-rose-light">Supadirect: $99–299/month</strong>
              </p>
              <p className="text-brand-rose/80 mt-2">
                Save 50-70% by using integrated auth instead of Auth0/Clerk
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
              <Link href="/realtime" className="block group">
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Updates →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Add live presence tracking and real-time user activity to your authenticated apps.
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
                    Auth-aware components that work seamlessly with your user data and permissions.
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
                    SaaS templates with authentication, user management, and teams pre-configured.
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
            <h2 className="text-5xl font-bold mb-6">Start building with integrated auth</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Get frontend hosting, database, auth, and compute in one platform. No Auth0/Clerk needed. Starting at $99/month.
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
