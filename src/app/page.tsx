'use client';

import { Copy, Check, Zap, Shield, Globe, Database, Cpu, HardDrive, RefreshCw, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CTA_LINKS, trackCTAClick } from "@/lib/cta-links";
import React from "react";

function FadeInSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function SlideInLeft({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: prefersReducedMotion ? 0 : -50 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

function SlideInRight({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.6, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

function ScaleIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
      transition={{ duration: prefersReducedMotion ? 0.01 : 0.5, ease: "easeOut", delay: prefersReducedMotion ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'code' | 'sync' | 'builtin'>('code');
  const [codeCompleted, setCodeCompleted] = useState(false);
  const [syncCount, setSyncCount] = useState(5);
  const [cronRunning, setCronRunning] = useState(true);
  const [copied, setCopied] = useState(false);

  const handleCopyCommand = async () => {
    try {
      await navigator.clipboard.writeText('npm create supadirect');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = 'npm create supadirect';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-brand-green">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-brand-green pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6" id="main-content">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-rose mb-6 leading-tight">
              Ship faster. Pay less. Sleep better.
            </h1>
            <p className="text-lg sm:text-xl text-brand-rose/90 mb-8 leading-relaxed">
              Replace Vercel, Convex, and AWS with one unified platform.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              Global frontend hosting. Real-time database. Serverless compute with GPU/NPU. Storage. CDN. All integrated. One dashboard. One bill.
            </p>
            <p className="text-lg sm:text-xl font-semibold text-brand-rose mb-8">
              Save 40-60% on infrastructure costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
              <Link href={CTA_LINKS.START_FREE_TRIAL} className="w-full sm:w-auto">
                <Button
                  onClick={() => trackCTAClick('Hero Primary CTA', CTA_LINKS.START_FREE_TRIAL)}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Start free (30 days)
                </Button>
              </Link>
              <Link href={CTA_LINKS.CALCULATE_SAVINGS} className="w-full sm:w-auto">
                <Button
                  onClick={() => trackCTAClick('Hero Secondary CTA', CTA_LINKS.CALCULATE_SAVINGS)}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Calculate your savings
                </Button>
              </Link>
            </div>
            <p className="text-sm text-brand-rose/70 mb-4">No credit card required. Deploy your first app in 15 minutes.</p>

            {/* CLI Command with Copy */}
            <button
              onClick={handleCopyCommand}
              className="bg-brand-green-darker rounded-lg px-4 py-3 inline-flex items-center gap-2 text-brand-rose/80 font-mono text-sm border border-brand-rose/20 hover:border-brand-rose/40 hover:bg-brand-green-darkest transition-all duration-200 cursor-pointer group"
              aria-label="Copy command to clipboard"
            >
              <span className="text-brand-rose">›</span>
              <span>npm create supadirect</span>
              <motion.div
                initial={false}
                animate={{ scale: copied ? 1.2 : 1 }}
                transition={{ duration: 0.2 }}
                className="ml-2"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 group-hover:text-brand-rose transition-colors" />
                )}
              </motion.div>
              {copied && (
                <span className="text-xs text-green-400 ml-1">Copied!</span>
              )}
            </button>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 mt-6 text-xs text-brand-rose/60">
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>SOC 2 Type II</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>99.99% Uptime</span>
              </div>
            </div>

            {/* Interactive Tabs - Hidden on mobile for cleaner UX */}
            <div className="mt-12 space-y-6 hidden lg:block">
              <motion.div
                className={`border-t pt-6 cursor-pointer transition-colors ${
                  activeTab === 'code' ? 'border-brand-rose/30' : 'border-brand-rose/10'
                }`}
                onClick={() => setActiveTab('code')}
              >
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  activeTab === 'code' ? 'text-brand-rose' : 'text-brand-rose/60'
                }`}>
                  <span className="text-brand-rose/50 text-sm mr-2">01</span>
                  One platform for your entire stack
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: activeTab === 'code' ? 'auto' : 0, opacity: activeTab === 'code' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-rose/80 leading-relaxed mb-3">
                    Supadirect bundles everything you need into a single TypeScript-first platform:
                  </p>
                  <ul className="text-brand-rose/70 leading-relaxed space-y-2 ml-4">
                    <li>• Global frontend hosting (like Vercel): Deploy Next.js, React, Vue to 150+ edge locations</li>
                    <li>• Real-time database: TypeScript-first database with subscriptions</li>
                    <li>• Serverless compute: Run Node.js functions without servers, auto-scaling included</li>
                    <li>• GPU & NPU acceleration: Fine-tune LLMs, run inference, batch process at scale</li>
                    <li>• File storage: Built-in with automatic CDN delivery, zero config</li>
                    <li>• Authentication: OAuth, email/password, custom JWT—fully managed</li>
                  </ul>
                  <p className="text-brand-rose/70 leading-relaxed mt-3">
                    No extra AWS accounts. No API stitching between Vercel, Convex, and compute providers. Everything works together out of the box.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className={`border-t pt-6 cursor-pointer transition-colors ${
                  activeTab === 'sync' ? 'border-brand-rose/30' : 'border-brand-rose/10'
                }`}
                onClick={() => setActiveTab('sync')}
              >
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  activeTab === 'sync' ? 'text-brand-rose' : 'text-brand-rose/60'
                }`}>
                  <span className="text-brand-rose/50 text-sm mr-2">02</span>
                  Transparent pricing, no surprises
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: activeTab === 'sync' ? 'auto' : 0, opacity: activeTab === 'sync' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-rose/80 leading-relaxed mb-3">
                    What used to be three invoices—Vercel ($50–300/mo), Convex ($100–500/mo), AWS ($200–2000+/mo)—becomes one simple bill starting at $99/month.
                  </p>
                  <p className="text-brand-rose/70 leading-relaxed">
                    No hidden egress fees. No per-seat charges. No surprise infrastructure bills at 3 a.m. No spending limits that trigger panic. You always know what you'll pay.
                  </p>
                  <p className="text-brand-rose/80 leading-relaxed mt-3">
                    <strong>Most teams save 40–60%</strong> compared to running Vercel + Convex + AWS separately.
                  </p>
                </motion.div>
              </motion.div>

              <motion.div
                className={`border-t pt-6 cursor-pointer transition-colors ${
                  activeTab === 'builtin' ? 'border-brand-rose/30' : 'border-brand-rose/10'
                }`}
                onClick={() => setActiveTab('builtin')}
              >
                <h3 className={`text-xl font-semibold mb-3 transition-colors ${
                  activeTab === 'builtin' ? 'text-brand-rose' : 'text-brand-rose/60'
                }`}>
                  <span className="text-brand-rose/50 text-sm mr-2">03</span>
                  Built for developers, not DevOps
                </h3>
                <motion.div
                  initial={false}
                  animate={{ height: activeTab === 'builtin' ? 'auto' : 0, opacity: activeTab === 'builtin' ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-brand-rose/80 leading-relaxed mb-3">
                    Everything is TypeScript—from database schema to queries to compute functions to auth to deployment config.
                  </p>
                  <ul className="text-brand-rose/70 leading-relaxed space-y-2 ml-4">
                    <li>✓ Full type safety end-to-end (database to frontend)</li>
                    <li>✓ IDE autocomplete for your entire backend</li>
                    <li>✓ AI-generated code that actually works (no API stitching to debug)</li>
                    <li>✓ Zero Kubernetes, Terraform, or infrastructure complexity</li>
                    <li>✓ Deploy with a single git push</li>
                  </ul>
                  <p className="text-brand-rose/70 leading-relaxed mt-3">
                    Your infrastructure decisions become invisible. You focus on product. We handle scale.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Code Demo - Hidden on mobile, contained on larger screens */}
          <div className="relative hidden lg:block">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#2d2d28] rounded-2xl p-6 border-2 border-[#D4A574] relative"
            >
              {activeTab === 'code' && (
                <>
                  <div className="flex gap-2 mb-4">
                    <div className="flex gap-2 bg-[#3d3d37] rounded px-3 py-1.5 text-xs">
                      <span className="text-pink-400">ts</span>
                      <span className="text-white/70">supadirect/todos.ts</span>
                    </div>
                    <div className="flex gap-2 bg-[#3d3d37] rounded px-3 py-1.5 text-xs">
                      <span className="text-blue-400">ts</span>
                      <span className="text-white/70">supadirect/schema.ts</span>
                    </div>
                  </div>

                  <div className="font-mono text-sm space-y-1 text-white/80">
                    <div><span className="text-purple-400">import</span> {'{ mutation, query }'}</div>
                    <div className="ml-4"><span className="text-orange-400">from</span> <span className="text-green-400">"./_generated/server"</span>;</div>
                    <div><span className="text-purple-400">import</span> {'{ v }'} <span className="text-orange-400">from</span></div>
                    <div className="ml-4"><span className="text-green-400">"supadirect/values"</span>;</div>
                    <div className="h-2"></div>
                    <div><span className="text-purple-400">export const</span> <span className="text-yellow-300">setComplete</span> =</div>
                    <div className="ml-4"><span className="text-blue-400">mutation</span>({'{'}</div>
                    <div className="ml-8">args: {'{ id: v.id("todos") }'},</div>
                    <div className="ml-8">handler: <span className="text-purple-400">async</span> (ctx, args) ={">"} {'{'}</div>
                    <div className="ml-12"><span className="text-purple-400">await</span> ctx.db.patch(args.id, {'{'}</div>
                    <div className="ml-16 text-white/40">{'// Try checking a todo--'}</div>
                    <div className="ml-16 text-white/40">{'// nothing happens!'}</div>
                    <div className="ml-16 text-white/40">{"// Change this to `true`"}</div>
                    <div className="ml-16 text-white/40">{"// and try again."}</div>
                    <div className="ml-16">completed: <span className="text-orange-400">{codeCompleted ? 'true' : 'false'}</span>,</div>
                    <div className="ml-12">{'});'}</div>
                    <div className="ml-8">{'}'}</div>
                    <div className="ml-4">{'});'}</div>
                  </div>
                </>
              )}

              {activeTab === 'sync' && (
                <>
                  <div className="flex gap-2 mb-4">
                    <div className="flex gap-2 bg-[#3d3d37] rounded px-3 py-1.5 text-xs">
                      <span className="text-blue-400">tsx</span>
                      <span className="text-white/70">TodoApp.tsx</span>
                    </div>
                    <div className="flex gap-2 bg-[#3d3d37] rounded px-3 py-1.5 text-xs">
                      <span className="text-pink-400">ts</span>
                      <span className="text-white/70">supadirect/todos.ts</span>
                    </div>
                  </div>

                  <div className="font-mono text-sm space-y-1 text-white/80">
                    <div><span className="text-purple-400">import</span> {'{ api }'} <span className="text-orange-400">from</span></div>
                    <div className="ml-4"><span className="text-green-400">"../../supadirect/_generated/api"</span>;</div>
                    <div><span className="text-purple-400">import</span> {'{ useQuery }'} <span className="text-orange-400">from</span></div>
                    <div className="ml-4"><span className="text-green-400">"supadirect/react"</span>;</div>
                    <div className="h-2"></div>
                    <div><span className="text-purple-400">export function</span> <span className="text-yellow-300">TodoApp</span>() {'{'}</div>
                    <div className="ml-4 text-white/40">{'// Load more by changing `count` to 10.'}</div>
                    <div className="ml-4 text-white/40">{'// Everything updates reactively.'}</div>
                    <div className="ml-4"><span className="text-purple-400">const</span> todos = <span className="text-blue-400">useQuery</span>(</div>
                    <div className="ml-8">api.todos.list,</div>
                    <div className="ml-8">{`{ count: ${syncCount} }`}</div>
                    <div className="ml-4">);</div>
                    <div className="ml-4"><span className="text-purple-400">return</span> {'<TodoList todos={todos} />;'}</div>
                    <div>{'}'}</div>
                  </div>
                </>
              )}

              {activeTab === 'builtin' && (
                <>
                  <div className="flex gap-2 mb-4">
                    <div className="flex gap-2 bg-[#3d3d37] rounded px-3 py-1.5 text-xs">
                      <span className="text-pink-400">ts</span>
                      <span className="text-white/70">supadirect/crons.ts</span>
                    </div>
                  </div>

                  <div className="font-mono text-sm space-y-1 text-white/80">
                    <div><span className="text-purple-400">import</span> {'{ cronJobs }'} <span className="text-orange-400">from</span></div>
                    <div className="ml-4"><span className="text-green-400">"supadirect/server"</span>;</div>
                    <div><span className="text-purple-400">import</span> {'{ internal }'} <span className="text-orange-400">from</span></div>
                    <div className="ml-4"><span className="text-green-400">"./_generated/api"</span>;</div>
                    <div className="h-2"></div>
                    <div><span className="text-purple-400">const</span> crons = <span className="text-blue-400">cronJobs</span>();</div>
                    <div className="h-2"></div>
                    <div>crons.<span className="text-yellow-300">interval</span>(</div>
                    <div className="ml-4"><span className="text-green-400">"categorize todos"</span>,</div>
                    <div className="ml-4">{'{ seconds: 5 }'},</div>
                    <div className="ml-4">internal.categorize.categorize,</div>
                    <div className="ml-4">{'{ categories: ["Chores", "Work"] }'}</div>
                    <div>);</div>
                    <div className="h-2"></div>
                    <div><span className="text-purple-400">export default</span> crons;</div>
                  </div>
                </>
              )}

              {/* Try it out button - now inside the card */}
              <button
                onClick={() => {
                  if (activeTab === 'code') {
                    setCodeCompleted(!codeCompleted);
                  } else if (activeTab === 'sync') {
                    setSyncCount(syncCount === 5 ? 10 : 5);
                  } else if (activeTab === 'builtin') {
                    setCronRunning(!cronRunning);
                  }
                }}
                className="absolute bottom-4 right-4 bg-[#D4A574] rounded-lg px-4 py-2 text-xs text-[#1a1a18] font-medium hover:bg-[#e0b585] transition-colors cursor-pointer shadow-lg"
              >
                Try it out!
              </button>
            </motion.div>

            {/* App Preview - now contained */}
            {activeTab === 'code' && (
              <motion.div
                key={codeCompleted ? 'completed' : 'incomplete'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 bg-[#2d2d28] rounded-xl p-4 border border-[#D4A574]/50"
              >
                <div className="bg-[#1a1a18] rounded px-3 py-1.5 text-xs mb-3">
                  <span className="text-white/70">my-amazing-project.app</span>
                </div>
                <div className="text-white/50 text-xs mb-2">Last categorized: 2s ago</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" checked={codeCompleted} readOnly className="rounded" />
                      <span className={`text-sm ${codeCompleted ? 'text-white/50 line-through' : 'text-white/80'}`}>
                        Play basketball
                      </span>
                    </div>
                    <span className="text-xs bg-gray-600 px-2 py-0.5 rounded">Other</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-white/80 text-sm">Talk to my boss</span>
                    </div>
                    <span className="text-xs bg-purple-600 px-2 py-0.5 rounded">Work</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-white/80 text-sm">Buy groceries</span>
                    </div>
                    <span className="text-xs bg-yellow-600 px-2 py-0.5 rounded">Chores</span>
                  </div>
                </div>
                {codeCompleted && (
                  <div className="mt-3 text-xs text-green-400 flex items-center gap-1">
                    <Check className="w-3 h-3" /> Updated in real-time
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === 'sync' && (
              <motion.div
                key={syncCount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 bg-[#2d2d28] rounded-xl p-4 border border-[#D4A574]/50"
              >
                <div className="bg-[#1a1a18] rounded px-3 py-1.5 text-xs mb-3">
                  <span className="text-white/70">my-amazing-project.app</span>
                </div>
                <div className="text-white/50 text-xs mb-2">Showing {syncCount} todos</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked readOnly className="rounded" />
                    <span className="text-white/50 text-sm line-through">Buy groceries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-white/80 text-sm">Finish project</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-white/80 text-sm">Call mom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-white/80 text-sm">Exercise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    <span className="text-white/80 text-sm">Read book</span>
                  </div>
                  {syncCount === 10 && (
                    <>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-white/80 text-sm">Learn TypeScript</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-white/80 text-sm">Write documentation</span>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-3 text-xs text-green-400 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Synced in real-time
                </div>
              </motion.div>
            )}

            {activeTab === 'builtin' && (
              <motion.div
                key={cronRunning ? 'running' : 'paused'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-4 bg-[#2d2d28] rounded-xl p-4 border border-[#D4A574]/50"
              >
                <div className="bg-[#1a1a18] rounded px-3 py-1.5 text-xs mb-3 flex items-center justify-between">
                  <span className="text-white/70">Cron Jobs</span>
                  <span className={cronRunning ? "text-green-400" : "text-orange-400"}>
                    ● {cronRunning ? 'Active' : 'Paused'}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="bg-[#1a1a18] rounded p-2">
                    <div className="text-white/80 text-xs font-semibold mb-1">categorize todos</div>
                    <div className="text-white/50 text-xs">Runs every 5 seconds</div>
                    <div className={`text-xs mt-1 ${cronRunning ? 'text-green-400' : 'text-white/40'}`}>
                      {cronRunning ? 'Last run: 2s ago' : 'Paused'}
                    </div>
                  </div>
                  <div className="bg-[#1a1a18] rounded p-2">
                    <div className="text-white/80 text-xs font-semibold mb-1">send notifications</div>
                    <div className="text-white/50 text-xs">Runs every hour</div>
                    <div className={`text-xs mt-1 ${cronRunning ? 'text-white/40' : 'text-white/40'}`}>
                      {cronRunning ? 'Last run: 45m ago' : 'Paused'}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Company Logo Bar - Social Proof */}
      <section className="py-12 px-4 sm:px-6 bg-brand-green-dark/50 border-y border-brand-green-dark/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-brand-rose/50 text-sm mb-8">
            Trusted by innovative teams worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-60">
            {/* Placeholder logos - these would be real company logos */}
            {['Acme Inc', 'TechCorp', 'StartupX', 'DevStudio', 'AI Labs', 'CloudBase'].map((company, i) => (
              <div key={i} className="text-brand-rose/70 text-lg font-semibold tracking-wide">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <FadeInSection>
        <section className="py-16 px-4 sm:px-6 bg-brand-green">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-rose mb-2">
                  <AnimatedCounter value={250} suffix="+" />
                </div>
                <p className="text-brand-rose/70 text-sm">Teams shipping faster</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-rose mb-2">
                  <AnimatedCounter value={50} suffix="%" />
                </div>
                <p className="text-brand-rose/70 text-sm">Average cost savings</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-rose mb-2">
                  <AnimatedCounter value={150} suffix="+" />
                </div>
                <p className="text-brand-rose/70 text-sm">Edge locations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-brand-rose mb-2">
                  99.99<span className="text-2xl">%</span>
                </div>
                <p className="text-brand-rose/70 text-sm">Uptime SLA</p>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* LLMs Love Supadirect */}
      <section className="py-20 px-4 sm:px-6 bg-brand-rose/15 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="border border-gray-400"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <SlideInLeft>
            <div className="inline-block bg-brand-green border border-brand-green-dark rounded-full px-4 py-1 text-sm mb-4 text-brand-rose">
              AI TOOLS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-brand-green-darker">LLMs love Supadirect</h2>
            <p className="text-lg text-brand-green-dark mb-4 leading-relaxed">
              Because your database, compute, hosting, and storage all live in one TypeScript-first platform, AI tools don't need to juggle three different services.
            </p>
            <p className="text-lg text-brand-green-dark mb-6 leading-relaxed">
              They can generate complete, end-to-end app code—from schema to backend to frontend—that actually runs on real infrastructure, without extra integration work.
            </p>
            <Link href="/ai">
              <Button>
                Learn more about AI
              </Button>
            </Link>
          </SlideInLeft>
          <SlideInRight delay={0.2}>
            <div className="bg-brand-rose/30 rounded-2xl p-6 sm:p-8 backdrop-blur border border-brand-green/30">
              <div className="bg-brand-green-darkest rounded-lg p-4 sm:p-6 text-brand-rose">
                <p className="mb-4 text-sm">
                  Build an app like Slack. It should have a sidebar with channels and direct messages where users can...
                </p>
                <div className="flex items-center justify-end gap-2">
                  <span className="text-sm">Try Supadirect with</span>
                  <span className="text-2xl">👨‍🍳</span>
                  <span className="font-bold text-red-400 text-xl">Chef</span>
                </div>
              </div>
              <p className="text-sm text-brand-green-darker mt-4 italic">
                Built a real Slack-like app in one prompt—with real-time messages, user auth, global hosting, file uploads, and a polished UI. Not mock data. Production-ready code.
              </p>
            </div>
          </SlideInRight>
        </div>
      </section>

      {/* Not Just a Database */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#1d1d1d] via-[#1a2332] to-[#1d1d1d] text-white relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 120 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>

        <FadeInSection>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-block bg-white/10 border border-white/20 rounded-full px-4 py-1 text-sm mb-4">
              PRODUCT
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-6">Everything your app needs to scale</h2>
            <p className="text-lg sm:text-xl text-white/70 mb-8">
              Frontend hosting, real-time data, serverless compute, GPU/NPU acceleration, storage, and CDN—on a single platform.
            </p>
            <Link href="/pricing">
              <Button className="bg-[#7CAAB7] text-white hover:bg-[#6a99a6]">
                See pricing
              </Button>
            </Link>
          </div>
        </FadeInSection>

        {/* Animated Platform Architecture Diagram */}
        <div className="max-w-6xl mx-auto mt-16 relative z-10">
          <div className="relative">
            {/* Central Hub */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-br from-brand-rose to-brand-rose-dark rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-rose/20 z-20"
              animate={{
                boxShadow: ["0 0 30px rgba(216, 156, 164, 0.3)", "0 0 60px rgba(216, 156, 164, 0.5)", "0 0 30px rgba(216, 156, 164, 0.3)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-brand-green-darker">SD</div>
                <div className="text-xs text-brand-green-darker/80 mt-1">Supadirect</div>
              </div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { icon: Globe, label: "Edge Hosting", desc: "150+ locations", color: "from-blue-500 to-cyan-500", delay: 0 },
                { icon: Database, label: "Real-time DB", desc: "TypeScript-first", color: "from-emerald-500 to-green-500", delay: 0.1 },
                { icon: Cpu, label: "GPU/NPU", desc: "AI acceleration", color: "from-purple-500 to-pink-500", delay: 0.2 },
                { icon: Shield, label: "Auth", desc: "Built-in security", color: "from-orange-500 to-red-500", delay: 0.3 },
                { icon: Zap, label: "Functions", desc: "Serverless compute", color: "from-yellow-500 to-amber-500", delay: 0.4 },
                { icon: HardDrive, label: "Storage", desc: "CDN delivery", color: "from-indigo-500 to-blue-500", delay: 0.5 },
                { icon: RefreshCw, label: "Sync", desc: "Real-time updates", color: "from-teal-500 to-cyan-500", delay: 0.6 },
                { icon: Code, label: "Type-safe", desc: "End-to-end TS", color: "from-rose-500 to-pink-500", delay: 0.7 },
              ].map((feature, i) => (
                <ScaleIn key={i} delay={feature.delay}>
                  <motion.div
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-3 group-hover:shadow-lg transition-shadow`}>
                      <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-white text-sm sm:text-base mb-1">{feature.label}</h3>
                    <p className="text-white/50 text-xs sm:text-sm">{feature.desc}</p>
                  </motion.div>
                </ScaleIn>
              ))}
            </div>

            {/* Connecting Lines Animation */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 10 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(216, 156, 164, 0)" />
                  <stop offset="50%" stopColor="rgba(216, 156, 164, 0.5)" />
                  <stop offset="100%" stopColor="rgba(216, 156, 164, 0)" />
                </linearGradient>
              </defs>
              {/* Animated pulse lines would connect features to center */}
            </svg>
          </div>
        </div>
      </section>

      {/* Customer Love */}
      <FadeInSection>
        <section className="py-20 px-4 sm:px-6 bg-brand-rose/15">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <div className="inline-block bg-brand-green border border-brand-green-dark rounded-full px-4 py-1 text-sm mb-4 text-brand-rose">
              CUSTOMER LOVE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-green-darker">Loved by developers</h2>
            <p className="text-lg text-brand-green-dark">
              What people building their business on Supadirect are saying.
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                text: "We replaced Vercel + Convex + AWS with Supadirect and cut our infra bill by 62% without changing a single line of app code. And we actually understand our bill now.",
                author: "Maya Rodriguez",
                handle: "CTO at Acme Labs",
                avatar: "https://ext.same-assets.com/2922290608/3640386592.jpeg"
              },
              {
                text: "Instead of five dashboards, five invoices, and five support docs, we have one of each. Our entire team—not just the CTO—understands our infrastructure now.",
                author: "James Chen",
                handle: "Head of Engineering",
                avatar: "https://ext.same-assets.com/2922290608/74539114.jpeg"
              },
              {
                text: "Everything is TypeScript from database schema to frontend component to deployment config. We went from infrastructure chaos to shipping features on day one.",
                author: "Priya Patel",
                handle: "Founder at AI Startup",
                avatar: "https://ext.same-assets.com/2922290608/3909432022.jpeg"
              },
              {
                text: "@supadirect feels like what I wanted Firebase and MongoDB Realm to be and more. Really enjoying the DX so far!",
                author: "David Kim",
                handle: "@dvddkkim",
                avatar: "https://ext.same-assets.com/2922290608/2888453120.jpeg"
              },
              {
                text: "From idea to production in under an hour. No AWS console, no Vercel dashboard confusion, no Convex setup. Just code and deploy.",
                author: "Sarah Johnson",
                handle: "Indie Developer",
                avatar: "https://ext.same-assets.com/2922290608/225205399.jpeg"
              },
              {
                text: "The GPU compute integration is seamless. We run inference jobs without managing any AWS infrastructure. It just works.",
                author: "Alex Park",
                handle: "ML Engineer",
                avatar: "https://ext.same-assets.com/2922290608/2020807249.jpeg"
              }
            ].map((testimonial, i) => (
              <ScaleIn key={i} delay={i * 0.1}>
                <div className="bg-brand-green text-brand-rose rounded-xl p-6 h-full border border-brand-green-dark hover:border-brand-green-light transition-colors">
                  <p className="mb-4 text-sm leading-relaxed text-brand-rose/90">{testimonial.text}</p>
                  <div className="flex items-center gap-3">
                    <Image src={testimonial.avatar} alt={testimonial.author} width={40} height={40} className="w-10 h-10 rounded-full object-cover border-2 border-brand-rose/30" />
                    <div>
                      <div className="font-semibold text-sm text-brand-rose">{testimonial.author}</div>
                      <div className="text-xs text-brand-rose/50">{testimonial.handle}</div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </section>
      </FadeInSection>

      {/* Framework Integrations */}
      <FadeInSection>
        <section className="py-20 px-4 sm:px-6 bg-brand-rose/15">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-brand-green border border-brand-green-dark rounded-full px-4 py-1 text-sm mb-4 text-brand-rose">
                  INTEGRATIONS
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-brand-green-darker">
                  Supadirect <span className="text-brand-green-dark">❤️</span> your favorite frameworks
                </h2>
                <p className="text-lg text-brand-green-dark mb-6 leading-relaxed">
                  Connect React, Next.js, Vue, and your favorite frameworks to a single backend that already includes database, compute, hosting, storage, and CDN. No extra services to wire up.
                </p>
                <Button>
                  View quickstart guides
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { name: "React", logo: "https://ext.same-assets.com/2922290608/89183838.svg" },
                  { name: "React Native", logo: "https://ext.same-assets.com/2922290608/1263623911.svg" },
                  { name: "Python", logo: "https://ext.same-assets.com/2922290608/2312855972.svg" },
                  { name: "Next.js", logo: "https://ext.same-assets.com/2922290608/178738355.svg" },
                  { name: "TanStack Start", logo: "https://ext.same-assets.com/2922290608/2780539850.svg" },
                  { name: "Rust", logo: "https://ext.same-assets.com/2922290608/2452206549.svg" },
                  { name: "Remix", logo: "https://ext.same-assets.com/2922290608/4029297459.svg" },
                  { name: "Vue", logo: "https://ext.same-assets.com/2922290608/3034011092.svg" },
                  { name: "Svelte", logo: "https://ext.same-assets.com/2922290608/1516263119.svg" }
                ].map((framework, i) => (
                  <ScaleIn key={i} delay={i * 0.08}>
                    <motion.div
                      className="bg-brand-green rounded-xl p-4 sm:p-6 border border-brand-green-dark cursor-pointer group"
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(74, 95, 90, 0.3)",
                        borderColor: "rgba(74, 95, 90, 0.8)"
                      }}
                    >
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 mb-3 flex items-center justify-center"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image src={framework.logo} alt={framework.name} width={48} height={48} className="w-full h-full object-contain" />
                      </motion.div>
                      <h3 className="font-semibold text-sm sm:text-base text-brand-rose">{framework.name}</h3>
                      <p className="text-xs sm:text-sm text-brand-rose/70 group-hover:text-brand-rose transition-colors">Quickstart guide →</p>
                    </motion.div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>

      {/* CTA Section */}
      <FadeInSection>
        <section className="py-24 sm:py-32 px-4 sm:px-6 bg-[#1d1d1d] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 h-full">
              {Array.from({ length: 120 }).map((_, i) => (
                <div key={i} className="border border-white/10"></div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              From idea to production in under an hour
            </h2>
            <p className="text-lg sm:text-xl text-white/80 mb-8">
              One platform. Transparent pricing. No DevOps setup.
            </p>
            <Link href={CTA_LINKS.START_FREE_TRIAL}>
              <Button
                onClick={() => trackCTAClick('Final CTA', CTA_LINKS.START_FREE_TRIAL)}
                size="xl"
                className="bg-[#D4653A] text-white hover:bg-[#c45830]"
              >
                Start free trial
              </Button>
            </Link>
            <p className="text-sm text-white/60 mt-6">
              Join 250+ teams replacing Vercel + Convex + AWS with Supadirect.<br />
              No credit card required. 30-day free trial of all Starter features.
            </p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-10 right-20 w-16 h-16 border-4 border-[#D4A574] rounded hidden sm:block"></div>
          <div className="absolute bottom-20 left-10 w-12 h-12 border-4 border-[#D4A574] rounded hidden sm:block"></div>
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border-4 border-[#D4A574] rounded hidden sm:block"></div>
        </section>
      </FadeInSection>

      {/* Footer */}
      <Footer />
    </div>
  );
}
