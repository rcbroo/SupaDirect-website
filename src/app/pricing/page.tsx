'use client';

import { Github, Check, ArrowRight, Calculator, TrendingUp, Zap, Shield, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function PricingPage() {
  const [functionCalls, setFunctionCalls] = useState(50);
  const [storage, setStorage] = useState(25);
  const [currentCost, setCurrentCost] = useState(1200);
  const [timeToMarket, setTimeToMarket] = useState(6);
  const [pricingMode, setPricingMode] = useState<'monthly' | 'payg'>('monthly');

  const calculateEstimate = () => {
    let base = 0;
    if (functionCalls <= 10) base = 99;
    else if (functionCalls <= 100) base = 599;
    else base = 1999;

    const extraCalls = Math.max(0, functionCalls - (base === 99 ? 10 : base === 599 ? 100 : 500));
    const extraStorage = Math.max(0, storage - (base === 99 ? 5 : base === 599 ? 50 : 200));

    return base + (extraCalls * 0.5) + (extraStorage * 2);
  };

  const calculateROI = () => {
    const supadirectCost = calculateEstimate() * 12;
    const currentAnnual = currentCost * 12;
    const savings = currentAnnual - supadirectCost;
    const timesSaved = timeToMarket * 4; // weeks saved

    return { savings, timesSaved, roi: ((savings / supadirectCost) * 100).toFixed(0) };
  };

  return (
    <div className="min-h-screen bg-brand-green">
      <Navigation />

      {/* Hero Banner */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-brand-green-darker text-brand-rose rounded-2xl p-8 mb-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 80 }).map((_, i) => (
                  <div key={i} className="border border-brand-rose/10"></div>
                ))}
              </div>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-3xl font-bold mb-3">Supadirect for Startups</h2>
                <p className="text-brand-rose/80 max-w-2xl">
                  Startups can apply for up to 1 year free of Supadirect Professional, including no seat fees and 30% off usage-based fees up to $30k. Start and scale your company with Supadirect.
                </p>
              </div>
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-6 py-3 whitespace-nowrap">
                Learn more
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose">
              Starting at $99/month. Everything included. No hidden costs.
            </h1>
            <p className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-4">
              One transparent price for frontend, backend, compute, storage, and CDN.
              See exactly what you pay, with no surprise overage fees.
            </p>
            <p className="text-lg text-brand-rose/70 max-w-2xl mx-auto">
              What used to be three invoices—Vercel ($50–300/mo), Convex ($100–500/mo), AWS ($200–2000+/mo)—becomes one simple bill starting at $99/month.
            </p>
          </div>

          {/* Pricing Mode Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-brand-rose/15 rounded-full p-1 border-2 border-brand-rose/20">
              <button
                onClick={() => setPricingMode('monthly')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  pricingMode === 'monthly'
                    ? 'bg-brand-rose text-brand-green-darker'
                    : 'text-brand-rose hover:text-brand-rose-light'
                }`}
              >
                Monthly Plans
              </button>
              <button
                onClick={() => setPricingMode('payg')}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  pricingMode === 'payg'
                    ? 'bg-brand-rose text-brand-green-darker'
                    : 'text-brand-rose hover:text-brand-rose-light'
                }`}
              >
                Pay-as-you-go
              </button>
            </div>
          </div>

          {/* Pay-as-you-go Pricing */}
          {pricingMode === 'payg' && (
            <div className="mb-16">
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-brand-green-darker text-center">Pay only for what you use</h2>
                <p className="text-brand-green-dark text-center mb-8">
                  No monthly commitment. Perfect for side projects and variable workloads.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-brand-green rounded-xl p-6 border-2 border-brand-green-dark">
                    <h3 className="text-xl font-bold mb-4 text-brand-rose">Usage-Based Rates</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-brand-rose/80">API Calls</span>
                        <span className="font-semibold text-brand-rose">$0.001 per call</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-rose/80">GPU Compute</span>
                        <span className="font-semibold text-brand-rose">$0.30-0.50/hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-rose/80">NPU Compute</span>
                        <span className="font-semibold text-brand-rose">$0.10-0.20/hour</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-rose/80">Storage</span>
                        <span className="font-semibold text-brand-rose">$0.01/GB/month</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-brand-rose/80">Bandwidth</span>
                        <span className="font-semibold text-brand-rose">$0.01/GB external</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand-green rounded-xl p-6 border-2 border-brand-green-dark">
                    <h3 className="text-xl font-bold mb-4 text-brand-rose">What's Included</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                        <span className="text-brand-rose/80">All platform features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                        <span className="text-brand-rose/80">No monthly minimum</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                        <span className="text-brand-rose/80">Email support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                        <span className="text-brand-rose/80">Community access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                        <span className="text-brand-rose/80">TypeScript-first development</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-brand-green-darker rounded-lg p-6 border border-brand-rose/30">
                  <h4 className="font-bold text-brand-rose mb-4 text-center">Example: Side Project Cost</h4>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-brand-rose/70 mb-2">Monthly usage:</p>
                      <ul className="space-y-1 text-brand-rose/80">
                        <li>• 100,000 API calls</li>
                        <li>• 2GB storage</li>
                        <li>• 5GB bandwidth</li>
                        <li>• 2 GPU-hours</li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-brand-rose/70 mb-2">Total cost:</p>
                      <ul className="space-y-1 text-brand-rose/80">
                        <li>• API calls: $100</li>
                        <li>• Storage: $0.02</li>
                        <li>• Bandwidth: $0.05</li>
                        <li>• GPU compute: $0.80</li>
                        <li className="pt-2 border-t border-brand-rose/20"><strong className="text-brand-rose">Total: ~$101/month</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-4">
                    Start with pay-as-you-go
                  </Button>
                  <p className="text-sm text-brand-green-dark mt-3">
                    Switch to a monthly plan anytime to save 40-60%
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Monthly Plans */}
          {pricingMode === 'monthly' && (
            <div className="grid lg:grid-cols-3 gap-8 mb-16">

            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20"
            >
              <div className="text-sm font-semibold text-brand-green-dark mb-2">STARTER</div>
              <h2 className="text-4xl font-bold mb-2 text-brand-green-darker">$99<span className="text-lg text-brand-green-dark">/mo</span></h2>
              <p className="text-brand-green-dark mb-6">Perfect for small teams and growing projects</p>
              <Button className="w-full bg-brand-green text-brand-rose hover:bg-brand-green-dark mb-6">
                Start Free Trial
              </Button>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Up to 5 developers</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">10M function calls/month</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">5GB storage included</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark"><strong>100 GPU-hours/month</strong> (inference)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark text-xs">Overage: $0.50/GPU-hour</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Email support (48hr SLA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Community access</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">All core features</span>
                </div>
              </div>
            </motion.div>

            {/* Growth Plan - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose relative transform lg:scale-105"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-rose text-brand-green-darker px-4 py-1 rounded-full text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="text-sm font-semibold text-brand-green-dark mb-2">GROWTH</div>
              <h2 className="text-4xl font-bold mb-2 text-brand-green-darker">$599<span className="text-lg text-brand-green-dark">/mo</span></h2>
              <p className="text-brand-green-dark mb-6">For scaling teams with production workloads</p>
              <Button className="w-full bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light mb-6">
                Start Free Trial
              </Button>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark"><strong>Unlimited developers</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">100M function calls/month</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">50GB storage included</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark"><strong>500 GPU-hours + 200 NPU-hours/month</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark text-xs">Overage: $0.30/GPU-hour, $0.10/NPU-hour</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Priority support (24hr SLA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">99.9% uptime SLA</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Advanced analytics</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Preview environments</span>
                </div>
              </div>
            </motion.div>

            {/* Scale Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/20"
            >
              <div className="text-sm font-semibold text-brand-green-dark mb-2">SCALE</div>
              <h2 className="text-4xl font-bold mb-2 text-brand-green-darker">$1,999<span className="text-lg text-brand-green-dark">/mo</span></h2>
              <p className="text-brand-green-dark mb-6">For enterprises with mission-critical apps</p>
              <Button className="w-full bg-brand-green text-brand-rose hover:bg-brand-green-dark mb-6">
                Contact Sales
              </Button>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark"><strong>Unlimited everything</strong></span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">500M+ function calls/month</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">200GB+ storage</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark"><strong>Custom GPU/NPU compute</strong> (negotiated)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Dedicated support (4hr SLA)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">99.99% uptime SLA</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">Custom integrations</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-brand-green-dark">On-premises option</span>
                </div>
              </div>
            </motion.div>
          </div>
          )}

          {/* Comparison vs Competitors */}
          <div className="bg-brand-rose/15 rounded-2xl p-8 mb-16 overflow-x-auto border-2 border-brand-rose/20">
            <h3 className="text-3xl font-bold mb-4 text-center text-brand-green-darker">Supadirect vs Vercel + Convex + AWS</h3>
            <p className="text-brand-green-dark text-center mb-8">What used to be three invoices—Vercel, Convex, and AWS—becomes one simple bill with Supadirect</p>

            <table className="w-full text-left min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-brand-green/30">
                  <th className="pb-4 pr-4 text-brand-green-darker font-semibold">Feature</th>
                  <th className="pb-4 px-4 text-brand-green-dark">Vercel</th>
                  <th className="pb-4 px-4 text-brand-green-dark">Convex</th>
                  <th className="pb-4 px-4 text-brand-green-dark">AWS</th>
                  <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Frontend hosting</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Global Edge CDN</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green text-xs">CloudFront</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Real-time database</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Serverless functions</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center text-brand-green text-xs">Lambda</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">GPU compute</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">NPU compute</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">File storage</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green text-xs">Limited</td>
                  <td className="py-4 px-4 text-center text-brand-green text-xs">S3</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Built-in auth</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">TypeScript native</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Single dashboard</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">Transparent pricing</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center"><Check className="w-5 h-5 text-brand-green inline" /></td>
                  <td className="py-4 px-4 text-center text-brand-green text-xs">Complex</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b-2 border-brand-green/30">
                  <td className="py-4 pr-4 text-brand-green-dark font-medium">No egress fees</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">—</td>
                  <td className="py-4 px-4 text-center text-brand-green">✗</td>
                  <td className="py-4 pl-4 text-center"><Check className="w-5 h-5 text-brand-rose inline" /></td>
                </tr>
                <tr className="border-b border-brand-green/20 bg-brand-green/10">
                  <td className="py-4 pr-4 text-brand-green-darker font-bold">Monthly starting price</td>
                  <td className="py-4 px-4 text-center text-brand-green-dark">Free</td>
                  <td className="py-4 px-4 text-center text-brand-green-dark">Free</td>
                  <td className="py-4 px-4 text-center text-brand-green-dark">Free</td>
                  <td className="py-4 pl-4 text-center font-bold text-brand-rose text-lg">$99</td>
                </tr>
                <tr className="bg-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-green-darker font-bold">Typical all-in cost*</td>
                  <td className="py-4 px-4 text-center text-brand-green-dark font-semibold">$200–400</td>
                  <td className="py-4 px-4 text-center text-brand-green-dark font-semibold">$150–300</td>
                  <td className="py-4 px-4 text-center text-brand-green-dark font-semibold">$400–1500+</td>
                  <td className="py-4 pl-4 text-center font-bold text-brand-rose text-lg">$99–299</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-brand-green-dark mt-6 italic">
              * Estimated for seed-stage app with 10K users, ~500K/month API calls, 50GB storage, basic compute
            </p>
            <div className="mt-6 p-4 bg-brand-green rounded-lg border border-brand-green-dark">
              <p className="text-brand-rose font-semibold text-center">
                <strong>Total separate cost: $750–2,200/month</strong> vs <strong className="text-brand-rose-light">Supadirect: $99–299/month</strong>
              </p>
              <p className="text-brand-rose/80 text-center mt-2">
                Save 40–85% by using one unified platform instead of three separate services
              </p>
            </div>
          </div>

          {/* No Hidden Costs */}
          <div className="bg-brand-green-darker rounded-2xl p-12 mb-16 text-brand-rose text-center">
            <h3 className="text-3xl font-bold mb-4">No Hidden Costs, Ever</h3>
            <p className="text-xl text-brand-rose/90 mb-6 max-w-3xl mx-auto">
              What you see is what you pay. No surprise AWS egress fees, no per-seat charges, no hidden infrastructure bills at 3 a.m. All usage is transparent and predictable.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-5xl font-bold mb-2">$0</div>
                <div className="text-brand-rose/70">Egress fees</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">$0</div>
                <div className="text-brand-rose/70">Per seat charges</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">40-60%</div>
                <div className="text-brand-rose/70">Cost savings vs separate services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Estimator */}
      <section className="py-16 px-6 bg-brand-rose/15">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Calculator className="w-12 h-12 text-brand-green-dark mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-brand-green-darker">Estimate Your Costs</h2>
            <p className="text-xl text-brand-green-dark">
              Use our calculator to estimate your monthly costs based on your usage
            </p>
          </div>

          <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-rose">
                  Function Calls per Month (Millions)
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={functionCalls}
                  onChange={(e) => setFunctionCalls(Number(e.target.value))}
                  className="w-full h-2 bg-brand-green-dark rounded-lg appearance-none cursor-pointer accent-brand-rose"
                />
                <div className="flex justify-between text-sm text-brand-rose/70 mt-1">
                  <span>0M</span>
                  <span className="font-semibold text-brand-rose">{functionCalls}M</span>
                  <span>500M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-rose">
                  Storage (GB)
                </label>
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={storage}
                  onChange={(e) => setStorage(Number(e.target.value))}
                  className="w-full h-2 bg-brand-green-dark rounded-lg appearance-none cursor-pointer accent-brand-rose"
                />
                <div className="flex justify-between text-sm text-brand-rose/70 mt-1">
                  <span>0GB</span>
                  <span className="font-semibold text-brand-rose">{storage}GB</span>
                  <span>500GB</span>
                </div>
              </div>

              <div className="pt-6 border-t border-brand-green-dark">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-brand-rose">Estimated Monthly Cost:</span>
                  <span className="text-4xl font-bold text-brand-rose">
                    ${calculateEstimate().toFixed(2)}
                  </span>
                </div>
                <p className="text-sm text-brand-rose/70 mt-2">
                  Includes all features and support for your selected plan tier
                </p>
              </div>

              <Button className="w-full bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light py-6">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 px-6 bg-brand-green">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <TrendingUp className="w-12 h-12 text-brand-rose mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4 text-brand-rose">Calculate Your ROI</h2>
            <p className="text-xl text-brand-rose/80">
              See how much you can save by switching to Supadirect
            </p>
          </div>

          <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-rose">
                  Current Monthly Infrastructure Cost ($)
                </label>
                <input
                  type="number"
                  value={currentCost}
                  onChange={(e) => setCurrentCost(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-2 border-brand-rose/30 bg-brand-green text-brand-rose focus:border-brand-rose focus:outline-none"
                  placeholder="1200"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-brand-rose">
                  Current Time to Market (months)
                </label>
                <input
                  type="number"
                  value={timeToMarket}
                  onChange={(e) => setTimeToMarket(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-lg border-2 border-brand-rose/30 bg-brand-green text-brand-rose focus:border-brand-rose focus:outline-none"
                  placeholder="6"
                />
              </div>

              <div className="pt-6 border-t border-brand-rose/20">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-rose mb-1">
                      ${calculateROI().savings}
                    </div>
                    <div className="text-sm text-brand-rose/70">Annual Savings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-rose mb-1">
                      {calculateROI().timesSaved} weeks
                    </div>
                    <div className="text-sm text-brand-rose/70">Faster to Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-rose mb-1">
                      {calculateROI().roi}%
                    </div>
                    <div className="text-sm text-brand-rose/70">ROI</div>
                  </div>
                </div>

                <p className="text-sm text-brand-rose/70 mb-4">
                  Based on average reduction in development time and infrastructure costs
                </p>

                <Link href="/contact">
                  <Button className="w-full bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light py-6">
                    Talk to Sales
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-hosted */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-green-darker text-brand-rose rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <div className="grid grid-cols-12 h-full">
                {Array.from({ length: 120 }).map((_, i) => (
                  <div key={i} className="border border-brand-rose/10"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Server className="w-16 h-16 mb-6" />
                <h2 className="text-4xl font-bold mb-6">
                  Need On-Premises Deployment?
                </h2>
                <p className="text-xl text-brand-rose/80 mb-6">
                  Enterprise customers can deploy Supadirect on their own infrastructure for maximum control and compliance.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span>Complete data sovereignty and compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span>Deploy in your VPC or on-premises</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span>Full feature parity with cloud version</span>
                  </li>
                </ul>
                <Link href="/contact">
                  <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-4 flex items-center gap-2">
                    Contact Enterprise Sales
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
              <div className="bg-brand-green rounded-xl p-8 border-2 border-brand-rose/20">
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">Includes:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span className="text-brand-rose/90">Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span className="text-brand-rose/90">24/7 priority support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span className="text-brand-rose/90">Custom SLAs and guarantees</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span className="text-brand-rose/90">Professional services and training</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-brand-rose flex-shrink-0 mt-1" />
                    <span className="text-brand-rose/90">Architecture review and optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-brand-green-darker">Frequently asked questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How did you choose the built-in resource counts and features for each plan?',
                a: 'We analyzed usage patterns from thousands of applications to determine optimal resource allocations that meet real-world needs without overcharging.'
              },
              {
                q: 'What happens if I exceed the built-in resource counts of each plan?',
                a: 'You\'ll only pay for what you use beyond the included amounts. We charge $0.50 per million additional function calls and $2 per GB of additional storage.'
              },
              {
                q: 'Are built-in resource counts per-project or per-team?',
                a: 'Resource counts are per-team across all projects. This gives you flexibility to allocate resources where needed most.'
              },
              {
                q: 'Does Supadirect have a Business or Enterprise plan?',
                a: 'Yes! Our Scale plan starts at $1,999/mo and includes dedicated support, custom integrations, and on-premises deployment options. Contact sales for details.'
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-brand-green rounded-xl p-6 border-2 border-brand-green-dark"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-brand-rose mb-2">{faq.q}</h3>
                    <p className="text-brand-rose/80">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-brand-green-dark hover:text-brand-green-darker underline">
              View all FAQ →
            </Link>
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
          <h2 className="text-5xl font-bold mb-8">
            Get your app up and running in minutes
          </h2>
          <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
            Start building
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
