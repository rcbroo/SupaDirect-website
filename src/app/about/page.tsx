'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, TrendingUp, Heart, Users, Globe, Award, Rocket } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function AboutPage() {
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
            ABOUT US
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Building the infrastructure platform developers deserve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto"
          >
            One place to deploy frontends, backends, compute, and scale globally—without complexity.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* The Problem */}
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-brand-rose" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-rose">The Problem</h2>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  Developers were stitching together 4+ services:
                </p>
                <ul className="space-y-2 text-brand-rose/70">
                  <li>• Vercel for frontend hosting</li>
                  <li>• Convex (or Firebase) for real-time backend</li>
                  <li>• AWS (or GCP) for custom compute</li>
                  <li>• CloudFlare for CDN</li>
                </ul>
                <p className="text-brand-rose/80 leading-relaxed mt-4">
                  Each service had its own dashboard, API, pricing model, and team. Managing it felt like infrastructure DevOps, not product development.
                </p>
              </div>
            </FadeInSection>

            {/* The Solution */}
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-rose h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-brand-rose" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-rose">The Solution</h2>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  What if one platform handled everything?
                </p>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  Database. Compute. Hosting. Storage. CDN.
                </p>
                <p className="text-brand-rose/80 leading-relaxed">
                  All integrated, all TypeScript, all one dashboard, all one bill.
                </p>
                <div className="mt-6 p-4 bg-brand-rose/10 rounded-lg border border-brand-rose/20">
                  <p className="text-brand-rose font-semibold text-center">
                    Save 40–60% on infrastructure costs
                  </p>
                </div>
              </div>
            </FadeInSection>

            {/* Our Mission */}
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-brand-rose" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-brand-rose">Our Mission</h2>
                <p className="text-brand-rose/80 leading-relaxed mb-4">
                  Make infrastructure decisions invisible.
                </p>
                <p className="text-brand-rose/80 leading-relaxed">
                  Let developers focus on building amazing products, not managing DevOps. Your infrastructure should work seamlessly in the background—fast, reliable, and affordable.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">Our Journey</h2>
          </FadeInSection>

          <div className="space-y-8">
            <FadeInSection>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-rose">Q1 2024</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-brand-rose rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-rose mb-2">Founded</h3>
                  <p className="text-brand-rose/80">
                    Started by former engineers from Vercel and AWS who were tired of managing three separate platforms. Raised $5M seed round from top-tier investors.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-rose">Q2 2024</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-brand-rose rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-rose mb-2">Private Beta</h3>
                  <p className="text-brand-rose/80">
                    Launched private beta with 50 early customers. Integrated frontend hosting, real-time database, and serverless compute into one unified platform.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-rose">Q4 2024</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-brand-rose rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-rose mb-2">Beta Launch</h3>
                  <p className="text-brand-rose/80">
                    Opened beta to 500+ developers. Added GPU/NPU compute, file storage, and built-in authentication. First customers saved 40–60% on infrastructure costs.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-rose">Q1 2025</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-brand-rose rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-rose mb-2">General Availability</h3>
                  <p className="text-brand-rose/80">
                    Public launch with transparent pricing starting at $99/month. Growing to 250+ companies and 2,500+ developers building on Supadirect.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-2xl font-bold text-brand-rose">2025+</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-brand-rose/50 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-brand-rose mb-2">The Future</h3>
                  <p className="text-brand-rose/80">
                    Expanding to multi-region deployments, edge compute, and enterprise features. Building the platform developers wish they always had.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Meet the Team</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              We're a small team of engineers, designers, and builders who believe infrastructure should be invisible.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alice Chen",
                role: "Co-founder & CEO",
                bio: "Former engineering lead at Vercel. Built Supadirect to solve her own infrastructure pain.",
                avatar: "https://ext.same-assets.com/2922290608/3640386592.jpeg"
              },
              {
                name: "David Martinez",
                role: "Co-founder & CTO",
                bio: "Ex-AWS architect. Spent 7 years building scalable systems before starting Supadirect.",
                avatar: "https://ext.same-assets.com/2922290608/74539114.jpeg"
              },
              {
                name: "Priya Patel",
                role: "Head of Product",
                bio: "Previously at Convex and Firebase. Passionate about developer experience.",
                avatar: "https://ext.same-assets.com/2922290608/3909432022.jpeg"
              },
              {
                name: "James Wilson",
                role: "Head of Engineering",
                bio: "Built real-time systems at scale for 10+ years. Loves TypeScript and distributed systems.",
                avatar: "https://ext.same-assets.com/2922290608/2888453120.jpeg"
              },
              {
                name: "Sarah Kim",
                role: "Head of Design",
                bio: "Previously designed developer tools at GitHub and Vercel. Obsessed with beautiful UX.",
                avatar: "https://ext.same-assets.com/2922290608/225205399.jpeg"
              },
              {
                name: "Michael Brown",
                role: "Head of DevRel",
                bio: "Former developer advocate. Loves teaching and helping developers succeed.",
                avatar: "https://ext.same-assets.com/2922290608/2020807249.jpeg"
              },
            ].map((member, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark text-center hover:border-brand-rose transition-colors">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-brand-rose/30"
                  />
                  <h3 className="text-xl font-bold text-brand-rose mb-1">{member.name}</h3>
                  <p className="text-brand-rose/70 text-sm mb-3">{member.role}</p>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-rose">Our Values</h2>
            <p className="text-xl text-brand-rose/80 text-center mb-12 max-w-3xl mx-auto">
              These principles guide every decision we make and every feature we build.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/30 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-brand-rose" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-darker mb-4">Simplicity</h3>
                <p className="text-brand-green-dark leading-relaxed">
                  One platform should feel like one platform. No API fragmentation, no dashboard jumping, no mental overhead. Everything works together seamlessly.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/30 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-brand-rose" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-darker mb-4">Transparency</h3>
                <p className="text-brand-green-dark leading-relaxed">
                  You know what you pay and why. No surprise AWS bills, no vendor lock-in tricks. We're honest about pricing, features, and trade-offs.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/30 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-brand-rose" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-darker mb-4">Performance</h3>
                <p className="text-brand-green-dark leading-relaxed">
                  Global by default. Automatic scaling. Minimal cold starts. Maximum reliability. Your apps should be fast, always.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-brand-rose/30 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6 text-brand-rose" />
                </div>
                <h3 className="text-2xl font-bold text-brand-green-darker mb-4">Developer Joy</h3>
                <p className="text-brand-green-dark leading-relaxed">
                  Everything is TypeScript. Everything is typed. Everything has great docs and DX. Building should feel good, not frustrating.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Social Proof / Metrics */}
      <section className="py-20 px-6 bg-brand-green-darker text-brand-rose">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Users className="w-8 h-8 text-brand-rose" />
                </div>
                <div className="text-5xl font-bold mb-2">250+</div>
                <div className="text-brand-rose/70">Companies</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Globe className="w-8 h-8 text-brand-rose" />
                </div>
                <div className="text-5xl font-bold mb-2">2,500+</div>
                <div className="text-brand-rose/70">Developers</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Rocket className="w-8 h-8 text-brand-rose" />
                </div>
                <div className="text-5xl font-bold mb-2">1.2M</div>
                <div className="text-brand-rose/70">Function calls/day</div>
              </div>
              <div>
                <div className="flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-brand-rose" />
                </div>
                <div className="text-5xl font-bold mb-2">$8M+</div>
                <div className="text-brand-rose/70">Infrastructure saved</div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Investors */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-brand-green-darker">Backed by the best</h2>
            <p className="text-xl text-brand-green-dark mb-12">
              We're proud to be supported by investors who believe in making infrastructure invisible.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {['Y Combinator', 'Sequoia', 'Andreessen Horowitz', 'Accel'].map((investor, i) => (
                <div key={i} className="text-2xl font-bold text-brand-green-dark">
                  {investor}
                </div>
              ))}
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
            <h2 className="text-5xl font-bold mb-6">We're hiring!</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              Want to help build the infrastructure platform developers deserve? We're looking for talented engineers, designers, and DevRel folks to join our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/company/jobs">
                <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-6 text-lg">
                  View open positions
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-2 border-brand-rose text-brand-rose hover:bg-brand-rose/20 px-8 py-6 text-lg">
                  Get in touch
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
