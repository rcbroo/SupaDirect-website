'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Database, Zap, Cpu, Folder, Lock, CreditCard, Code, Check, ArrowRight } from "lucide-react";
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

export default function FeaturesPage() {
  const features = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Frontend Hosting",
      description: "Deploy Next.js, React, Vue apps to 150+ edge locations. Automatic CDN, SSL certificates, custom domains, analytics. Zero configuration needed.",
      highlights: [
        "Deploy to 150+ edge locations worldwide",
        "Automatic SSL certificates & custom domains",
        "Built-in analytics & performance monitoring",
        "Zero-downtime deployments"
      ],
      link: "/docs/frontend-hosting"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Real-Time Database",
      description: "TypeScript-first database with real-time sync, subscriptions, full-text search. No eventual consistency headaches. ACID guarantees.",
      highlights: [
        "Real-time subscriptions (no polling)",
        "TypeScript-native queries",
        "Full-text & vector search built-in",
        "ACID transactions by default"
      ],
      link: "/docs/database"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Serverless Functions",
      description: "Run Node.js functions without servers. Automatic scaling, cold start optimization, cron jobs, error handling. Pay per execution.",
      highlights: [
        "Auto-scaling with zero config",
        "Cold start optimization (<100ms)",
        "Built-in cron jobs & scheduling",
        "Automatic error handling & retries"
      ],
      link: "/docs/functions"
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "GPU & NPU Compute",
      description: "Fine-tune LLMs, run image models, inference at scale. Flexible hardware selection, per-second billing. No AWS complexity.",
      highlights: [
        "NVIDIA A100/H100 GPUs available",
        "Apple Neural Engine & Google TPU",
        "Per-second billing (no minimums)",
        "Automatic warm instance pooling"
      ],
      link: "/features/compute"
    },
    {
      icon: <Folder className="w-8 h-8" />,
      title: "Built-in File Storage",
      description: "Store, serve, and organize files with automatic CDN delivery. Zero configuration. Signed URLs, access control, automatic optimization.",
      highlights: [
        "Automatic CDN delivery globally",
        "Image optimization & transformations",
        "Signed URLs for secure access",
        "Unlimited storage (pay per GB)"
      ],
      link: "/docs/file-storage"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Authentication Built-In",
      description: "OAuth (Google, GitHub, etc.), email/password, custom JWT. Full control, no 3rd party SDK lock-in. Session management included.",
      highlights: [
        "80+ OAuth providers supported",
        "Email/password & magic links",
        "Custom JWT & session management",
        "RBAC & fine-grained permissions"
      ],
      link: "/docs/auth"
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "One Bill for Everything",
      description: "No more spreadsheets. One dashboard, one invoice, transparent pricing. See exactly what you're paying for—no surprise charges.",
      highlights: [
        "Transparent usage tracking",
        "Real-time cost monitoring",
        "No hidden egress fees",
        "Consolidated billing for all services"
      ],
      link: "/pricing"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "TypeScript Everywhere",
      description: "From database schema to frontend components. Full type safety, autocomplete, AI-generated code that actually works. End-to-end safety.",
      highlights: [
        "End-to-end type safety",
        "IDE autocomplete for everything",
        "AI-friendly code generation",
        "Automatic schema validation"
      ],
      link: "/docs/typescript"
    },
  ];

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
            FEATURES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Everything you need to build a complete product
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            Frontend hosting, real-time database, serverless compute, storage, and CDN—all integrated, all TypeScript.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/pricing">
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
                See pricing
              </Button>
            </Link>
            <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
              View docs
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, i) => (
              <FadeInSection key={i}>
                <motion.div
                  className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark hover:border-brand-rose transition-all cursor-pointer h-full flex flex-col group"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-14 h-14 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose group-hover:bg-brand-rose/30 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-rose">{feature.title}</h3>
                  <p className="text-brand-rose/80 text-sm mb-4 leading-relaxed flex-1">{feature.description}</p>
                  <a href={feature.link} className="text-brand-rose font-semibold text-sm hover:underline flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Feature Sections */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto space-y-24">
          {features.map((feature, i) => (
            <FadeInSection key={i}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-4 text-brand-rose">
                    {feature.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-brand-rose">{feature.title}</h2>
                  <p className="text-xl text-brand-rose/80 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3 mb-6">
                    {feature.highlights.map((highlight, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                        <span className="text-brand-rose/80">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={feature.link}>
                    <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light">
                      Learn more
                    </Button>
                  </Link>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20 aspect-video flex items-center justify-center">
                    <div className="text-brand-green-dark text-6xl opacity-20">
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Supadirect vs Vercel + Convex + AWS</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              See what you get with one unified platform vs piecing together three separate services
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-brand-rose/30">
                    <th className="pb-4 pr-4 text-brand-rose font-semibold">Feature</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Vercel</th>
                    <th className="pb-4 px-4 text-brand-rose/70">Convex</th>
                    <th className="pb-4 px-4 text-brand-rose/70">AWS</th>
                    <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Frontend hosting</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Real-time database</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Serverless functions</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                    <td className="py-4 px-4 text-center text-brand-rose/70 text-xs">Lambda</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">GPU compute</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">NPU compute</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">File storage</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/70 text-xs">Limited</td>
                    <td className="py-4 px-4 text-center text-brand-rose/70 text-xs">S3</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Built-in auth</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">TypeScript native</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b border-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">Single dashboard</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="border-b-2 border-brand-rose/30">
                    <td className="py-4 pr-4 text-brand-rose/90 font-medium">No egress fees</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose/50">—</td>
                    <td className="py-4 px-4 text-center text-brand-rose text-lg">✗</td>
                    <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                  </tr>
                  <tr className="bg-brand-rose/20">
                    <td className="py-4 pr-4 text-brand-rose font-bold">Monthly starting price</td>
                    <td className="py-4 px-4 text-center text-brand-rose/90">Free tier</td>
                    <td className="py-4 px-4 text-center text-brand-rose/90">Free tier</td>
                    <td className="py-4 px-4 text-center text-brand-rose/90">Free tier</td>
                    <td className="py-4 pl-4 text-center font-bold text-brand-rose text-lg">$99/mo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-green-darker rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-rose font-semibold text-lg">
                <strong>Typical separate cost: $750–2,200/month</strong> vs <strong className="text-brand-rose-light">Supadirect: $99–599/month</strong>
              </p>
              <p className="text-brand-rose/80 mt-2">
                Save 40–60% by using one unified platform instead of three separate services
              </p>
            </div>
          </FadeInSection>
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
            <h2 className="text-5xl font-bold mb-6">Ready to build on Supadirect?</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Get started with 30 days free. All features included. No credit card required.
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
