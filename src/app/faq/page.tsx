'use client';

import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  // Product Category
  {
    category: "Product",
    question: "What is Supadirect?",
    answer: "Supadirect is a unified platform that replaces Vercel (frontend hosting), Convex (real-time database), and AWS (compute/storage) with one integrated solution. Everything you need to build and scale modern web applications—frontend, backend, database, GPU/NPU compute, storage, and CDN—in one dashboard, with one API, and one bill."
  },
  {
    category: "Product",
    question: "Why not just use Vercel + Convex + AWS separately?",
    answer: "You could, but you'd need to: manage three separate accounts and dashboards, handle API integration between services, pay three separate bills (often totaling $750–2,200/month), deal with cross-service latency, and learn three different pricing models. Supadirect eliminates all that friction—one dashboard, one API, one bill starting at $99/month. Most teams save 40–60% on infrastructure costs."
  },
  {
    category: "Product",
    question: "How is Supadirect different from Firebase?",
    answer: "While Firebase offers real-time capabilities, Supadirect provides stronger consistency guarantees, TypeScript-first development, automatic reactivity, and a more developer-friendly API. Everything in Supadirect is code, not configuration."
  },
  {
    category: "Product",
    question: "Can I use Supadirect with my existing tech stack?",
    answer: "Yes! Supadirect integrates seamlessly with React, Next.js, Vue, Svelte, and many other frameworks. We provide official client libraries for JavaScript/TypeScript, Python, and Rust."
  },
  {
    category: "Product",
    question: "Does Supadirect support real-time updates?",
    answer: "Absolutely. Real-time synchronization is built into the core of Supadirect. All queries automatically subscribe to updates, and your UI stays in sync without manual polling or WebSocket management."
  },
  {
    category: "Product",
    question: "What databases does Supadirect support?",
    answer: "Supadirect uses its own high-performance document database optimized for real-time sync. It provides automatic indexing, vector search, full-text search, and strong ACID guarantees."
  },
  {
    category: "Product",
    question: "Can I self-host Supadirect?",
    answer: "Yes! Supadirect is open source and can be self-hosted using Docker and Postgres. We provide detailed documentation and support for self-hosted deployments."
  },
  {
    category: "Product",
    question: "What's the difference between Supadirect Cloud and self-hosted?",
    answer: "Supadirect Cloud is fully managed with automatic scaling, backups, and monitoring. Self-hosted gives you complete control but requires you to manage infrastructure, updates, and scaling yourself."
  },
  {
    category: "Product",
    question: "Does Supadirect have a dashboard?",
    answer: "Yes, we provide a comprehensive dashboard where you can view your data, monitor function executions, check logs, manage deployments, and configure your project settings."
  },
  {
    category: "Product",
    question: "What compliance certifications does Supadirect have?",
    answer: "Supadirect is SOC 2 Type II compliant, HIPAA compliant, and GDPR verified. We take security and compliance seriously and undergo regular third-party audits."
  },
  {
    category: "Product",
    question: "Can I migrate from Convex/Firebase to Supadirect?",
    answer: "Yes! We provide migration guides and tools to help you migrate from Convex, Firebase, and other platforms. Our support team can also assist with complex migrations."
  },

  // Technical Category
  {
    category: "Technical",
    question: "Which should I use: GPU or NPU compute?",
    answer: "GPUs are better for heavy ML training, large language model fine-tuning, complex image processing, and high-throughput inference. NPUs are better for edge AI/on-device inference, power-efficient ML, real-time personalization, and small model inference. For most AI workloads, start with GPU. If you need extremely low latency or power efficiency, consider NPU. Our compute guide has detailed benchmarks and cost breakdowns."
  },
  {
    category: "Technical",
    question: "What programming languages are supported?",
    answer: "Supadirect backend functions are written in TypeScript or JavaScript. We also provide client libraries for Python and Rust for backend-to-backend communication."
  },
  {
    category: "Technical",
    question: "How does automatic reactivity work?",
    answer: "Supadirect tracks all dependencies for every query function, including arguments and database rows accessed. When any dependency changes, queries automatically re-run and push updates to subscribed clients."
  },
  {
    category: "Technical",
    question: "What are the performance characteristics?",
    answer: "Supadirect provides sub-100ms query latency for most operations, automatic caching at the edge, and can handle millions of concurrent connections with automatic scaling."
  },
  {
    category: "Technical",
    question: "How do I handle authentication?",
    answer: "Supadirect Auth provides built-in authentication with magic links, OTP, OAuth (80+ providers), and email/password. You can also integrate with Clerk, Auth0, or WorkOS."
  },
  {
    category: "Technical",
    question: "Can I run background jobs and cron tasks?",
    answer: "Yes! Supadirect includes built-in support for cron jobs, scheduled functions, and background tasks. You can define them directly in your code with full type safety."
  },
  {
    category: "Technical",
    question: "How does file storage work?",
    answer: "Supadirect provides built-in file storage with automatic CDN distribution. Files are stored securely and can be accessed via signed URLs with configurable access control."
  },
  {
    category: "Technical",
    question: "What's the maximum database size?",
    answer: "There's no hard limit on database size. We automatically shard and distribute data as your application grows. Most customers scale to billions of documents without issues."
  },
  {
    category: "Technical",
    question: "Can I use SQL with Supadirect?",
    answer: "Supadirect uses a TypeScript-first query API instead of SQL. This provides better type safety, IDE autocomplete, and easier refactoring. You can express complex queries using familiar JavaScript array methods."
  },
  {
    category: "Technical",
    question: "How do transactions work?",
    answer: "All Supadirect functions run in ACID-compliant transactions by default. This means your data is always consistent, and you don't have to worry about race conditions or partial updates."
  },
  {
    category: "Technical",
    question: "What about database migrations?",
    answer: "Schema changes in Supadirect are handled through code. You can use the Migrations component to safely migrate live data, or leverage our automatic schema evolution for non-breaking changes."
  },
  {
    category: "Technical",
    question: "Does Supadirect support GraphQL?",
    answer: "While Supadirect doesn't use GraphQL internally, you can easily build a GraphQL API on top of Supadirect functions if needed. However, most developers find our TypeScript API more convenient."
  },
  {
    category: "Technical",
    question: "How do I handle API rate limiting?",
    answer: "Supadirect includes a built-in Rate Limiter component that's type-safe, transactional, and configurable. You can set limits per user, IP, or custom keys."
  },
  {
    category: "Technical",
    question: "Can I have my data in Europe and compute in the US?",
    answer: "Yes. Specify region for database (EU data residency) and separately for compute (US region). We handle cross-region sync automatically. There's a slight latency trade-off but full compliance with data residency laws like GDPR."
  },
  {
    category: "Technical",
    question: "How do I route to the cheapest GPU/NPU?",
    answer: "Use our compute routing API. Specify your workload type (training, inference, batch processing) and Supadirect automatically routes to the cheapest available GPU/NPU in your region. You can also pin to specific hardware types if needed for consistency."
  },
  {
    category: "Technical",
    question: "Can I use vector embeddings for AI?",
    answer: "Yes! Supadirect has built-in vector search powered by high-performance indexing. It's perfect for semantic search, RAG systems, and AI applications."
  },
  {
    category: "Technical",
    question: "What monitoring and observability tools are available?",
    answer: "Supadirect provides built-in monitoring with function execution logs, performance metrics, error tracking, and custom event logging. You can also integrate with Datadog, Sentry, or New Relic."
  },
  {
    category: "Technical",
    question: "How do I test Supadirect functions?",
    answer: "Supadirect functions are pure TypeScript, so you can test them with any testing framework (Jest, Vitest, etc.). We also provide testing utilities for mocking the database and simulating real-time updates."
  },

  // Pricing Category
  {
    category: "Pricing",
    question: "How much does Supadirect cost?",
    answer: "Paid plans start at $99/month for the Starter tier (includes frontend hosting, backend, compute, storage, and CDN). Growth tier is $599/month with higher limits. Scale tier is custom pricing for enterprises. No free tier, but you get 30 days free to try all Starter features."
  },
  {
    category: "Pricing",
    question: "How does Supadirect save me money compared to separate services?",
    answer: "Most teams running Vercel ($50–300/mo) + Convex ($100–500/mo) + AWS ($200–2000+/mo) pay $750–2,200/month total. With Supadirect, the same workload costs $99–599/month—a 40–60% savings. You also save engineering time (no API stitching, no managing three dashboards), which translates to faster shipping and lower DevOps overhead."
  },
  {
    category: "Pricing",
    question: "Is there a free tier?",
    answer: "We don't offer a permanent free tier, but you get 30 days free access to all Starter features when you sign up ($99/month value). After 30 days, continue at $99/month or cancel. For educational or open source projects, email hello@supadirect.dev for discount codes."
  },
  {
    category: "Pricing",
    question: "How does usage-based pricing work?",
    answer: "You're charged for function calls, database operations, storage, and bandwidth. We provide transparent pricing with no hidden fees. Use our pricing calculator to estimate your costs."
  },
  {
    category: "Pricing",
    question: "Are there any hidden costs?",
    answer: "No hidden costs! All pricing is transparent and displayed upfront. You only pay for what you use, and we provide real-time usage monitoring in your dashboard."
  },
  {
    category: "Pricing",
    question: "Do you offer discounts for startups?",
    answer: "Yes! Startups can apply for up to 1 year free of Supadirect Professional, including no seat fees and 30% off usage-based fees up to $30k in credits."
  },
  {
    category: "Pricing",
    question: "What's the difference between Starter and Professional plans?",
    answer: "Professional includes unlimited developers, higher deployment limits, priority support, SLA guarantees, and advanced features like custom auth providers and dedicated infrastructure."
  },
  {
    category: "Pricing",
    question: "Can I change plans at any time?",
    answer: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately, and we prorate charges based on usage."
  },
  {
    category: "Pricing",
    question: "Do you offer enterprise pricing?",
    answer: "Yes! Enterprise plans include dedicated support, custom SLAs, on-premise deployment options, and volume discounts. Contact sales for custom pricing."
  },
  {
    category: "Pricing",
    question: "What happens if I exceed my plan limits?",
    answer: "You'll receive notifications when approaching limits. You can either upgrade or pay overage fees. We never shut down your app without warning."
  },
  {
    category: "Pricing",
    question: "Is there a free trial?",
    answer: "Yes! All new accounts get access to all features for 14 days. No credit card required to start."
  },
  {
    category: "Pricing",
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, debit cards, and ACH transfers for enterprise customers. Payments are processed securely through Stripe."
  },

  // Support Category
  {
    category: "Support",
    question: "What support channels are available?",
    answer: "Free tier includes community support via Discord. Paid plans include email support. Professional and Enterprise plans get priority support with guaranteed response times."
  },
  {
    category: "Support",
    question: "What's your support response time?",
    answer: "Community: Best effort. Starter: 2 business days. Professional: 24 hours. Enterprise: 4 hours (critical issues get immediate attention)."
  },
  {
    category: "Support",
    question: "Do you offer onboarding assistance?",
    answer: "Professional and Enterprise plans include onboarding calls, architecture review, and migration assistance. We also have extensive documentation and video tutorials."
  },
  {
    category: "Support",
    question: "Where can I find documentation?",
    answer: "Complete documentation is available at docs.supadirect.com. We have guides, API references, examples, and video tutorials for all features."
  },
  {
    category: "Support",
    question: "Is there a community forum?",
    answer: "Yes! Join our Discord community with 50,000+ developers. We also have GitHub Discussions for feature requests and bug reports."
  },
  {
    category: "Support",
    question: "Do you provide training?",
    answer: "Enterprise customers can access custom training sessions. We also offer public workshops, webinars, and certification programs for developers."
  },
  {
    category: "Support",
    question: "What's your uptime guarantee?",
    answer: "Professional plans include 99.9% uptime SLA. Enterprise plans offer 99.99% uptime with financial penalties for downtime."
  },
  {
    category: "Support",
    question: "How do I report a bug or security issue?",
    answer: "Bugs can be reported via GitHub or email. For security issues, please email security@supadirect.com. We have a bug bounty program for responsible disclosure."
  },
  {
    category: "Support",
    question: "Can I get help with architecture design?",
    answer: "Yes! Professional plans include architecture reviews. Our team can help design scalable systems, optimize performance, and implement best practices."
  },
  {
    category: "Support",
    question: "Do you offer dedicated support?",
    answer: "Enterprise customers can purchase dedicated support with a named support engineer, private Slack channel, and guaranteed response times for critical issues."
  },
  {
    category: "Support",
    question: "What happens if Supadirect goes down?",
    answer: "We have 99.9%+ uptime with automatic failover, multi-region redundancy, and real-time status monitoring. Check status.supadirect.com for live status updates."
  },
  {
    category: "Support",
    question: "How do I request a feature?",
    answer: "Feature requests can be submitted via GitHub Discussions or our Discord community. We regularly review and prioritize based on community feedback."
  },
];

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const categories = ['All', 'Product', 'Technical', 'Pricing', 'Support'];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-brand-green">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 bg-brand-green">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-rose/80 mb-8"
          >
            Find answers to common questions about Supadirect. Can't find what you're looking for? Contact our support team.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-rose/50" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-brand-rose/30 focus:border-brand-rose focus:outline-none text-lg bg-brand-green-darker text-brand-rose placeholder:text-brand-rose/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-8 px-6 bg-brand-rose/15 border-b border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-brand-rose text-white'
                    : 'bg-gray-100 text-brand-green-dark hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-brand-rose">No FAQs found matching your search.</p>
              <Button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-4 bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light"
              >
                Clear filters
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.02 }}
                  className="bg-brand-green rounded-xl border-2 border-brand-green-dark overflow-hidden hover:border-brand-rose transition-colors"
                >
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-brand-rose/20 text-brand-rose">
                          {faq.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-brand-rose">{faq.question}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-brand-rose/70" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5">
                          <p className="text-brand-rose/80 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-20 px-6 bg-brand-green-darker text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Still have questions?</h2>
          <p className="text-xl text-brand-rose/80 mb-8">
            Our support team is here to help. Reach out via Discord, email, or schedule a call with our team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
                Contact Support
              </Button>
            </Link>
            <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
              Join Discord
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
