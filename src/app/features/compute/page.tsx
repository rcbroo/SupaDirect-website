'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Cpu, TrendingDown, Clock, Check, ArrowRight, Sparkles } from "lucide-react";
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

export default function ComputePage() {
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
            GPU & NPU COMPUTE
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-brand-rose"
          >
            Run AI models. Fine-tune LLMs. Process at scale.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-brand-rose/80 max-w-3xl mx-auto mb-8"
          >
            GPU compute for heavy AI workloads. NPU compute for real-time inference. Automatic routing picks the cheapest hardware. Pay per second, not per month.
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
              View pricing
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GPU vs NPU Decision Guide */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">GPU vs NPU: Which should you use?</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              Supadirect automatically routes to the cheapest hardware available. But here's how to choose manually:
            </p>
          </FadeInSection>

          <div className="grid lg:grid-cols-2 gap-8">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">GPU Compute</h3>
                <p className="text-brand-rose/80 mb-6 leading-relaxed">
                  For heavy AI workloads: LLM fine-tuning, image generation, batch processing
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-brand-rose mb-2">Hardware Options:</p>
                    <ul className="space-y-1 text-sm text-brand-rose/80">
                      <li>• NVIDIA H100 (80GB VRAM)</li>
                      <li>• NVIDIA A100 (40GB VRAM)</li>
                      <li>• NVIDIA RTX 4090 (24GB VRAM)</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brand-rose mb-2">Best for:</p>
                    <ul className="space-y-1 text-sm text-brand-rose/80">
                      <li>✓ Fine-tuning LLaMA, GPT models</li>
                      <li>✓ Stable Diffusion image generation</li>
                      <li>✓ Video processing with ML models</li>
                      <li>✓ Large batch inference jobs</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brand-rose mb-2">Pricing:</p>
                    <p className="text-sm text-brand-rose/80">$0.30–$0.50/hour (Growth tier)</p>
                    <p className="text-sm text-brand-rose/80">Cold start: ~500ms</p>
                  </div>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">NPU Compute</h3>
                <p className="text-brand-rose/80 mb-6 leading-relaxed">
                  For edge AI and real-time inference: personalization, embeddings, small models
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-semibold text-brand-rose mb-2">Optimized for:</p>
                    <ul className="space-y-1 text-sm text-brand-rose/80">
                      <li>• Low-latency inference</li>
                      <li>• Edge AI workloads</li>
                      <li>• Cost-effective processing</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brand-rose mb-2">Best for:</p>
                    <ul className="space-y-1 text-sm text-brand-rose/80">
                      <li>✓ Real-time embeddings (search)</li>
                      <li>✓ Personalization engines</li>
                      <li>✓ Small model inference</li>
                      <li>✓ Text classification/sentiment</li>
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-brand-rose mb-2">Pricing:</p>
                    <p className="text-sm text-brand-rose/80">$0.10–$0.20/hour (Growth tier)</p>
                    <p className="text-sm text-brand-rose/80">Cold start: ~200ms</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <div className="mt-8 p-6 bg-brand-green-darker rounded-lg border border-brand-rose/30 text-center">
              <p className="text-brand-rose font-semibold text-lg mb-2">
                💡 Smart Routing: Let Supadirect choose
              </p>
              <p className="text-brand-rose/80">
                Don't specify hardware manually. Supadirect automatically picks the cheapest available option for your workload.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">Real-world AI workloads</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fine-tune LLaMA on proprietary data",
                description: "Train custom LLMs with your company's knowledge base",
                hardware: "GPU (H100, A100)",
                cost: "$0.40/hour",
                time: "2-8 hours",
                icon: "🧠"
              },
              {
                title: "Generate images with Stable Diffusion",
                description: "Create thousands of custom images at scale",
                hardware: "GPU (RTX 4090)",
                cost: "$0.30/hour",
                time: "~5 sec/image",
                icon: "🎨"
              },
              {
                title: "Embed documents for semantic search",
                description: "Process and index large document collections",
                hardware: "NPU",
                cost: "$0.10/hour",
                time: "~100ms/doc",
                icon: "🔍"
              },
              {
                title: "Batch process video with ML",
                description: "Apply computer vision models to video content",
                hardware: "GPU (A100)",
                cost: "$0.50/hour",
                time: "~1 min/video",
                icon: "🎥"
              },
              {
                title: "Real-time personalization",
                description: "Serve personalized content recommendations",
                hardware: "NPU",
                cost: "$0.15/hour",
                time: "~50ms/request",
                icon: "⚡"
              },
              {
                title: "Text classification at scale",
                description: "Classify customer support tickets automatically",
                hardware: "NPU",
                cost: "$0.10/hour",
                time: "~30ms/text",
                icon: "📝"
              }
            ].map((useCase, i) => (
              <FadeInSection key={i}>
                <div className="bg-brand-green-darker rounded-2xl p-6 border-2 border-brand-rose/20 h-full">
                  <div className="text-4xl mb-4">{useCase.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-brand-rose">{useCase.title}</h3>
                  <p className="text-brand-rose/80 text-sm mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="space-y-2 text-sm border-t border-brand-rose/20 pt-4">
                    <p className="text-brand-rose/70"><strong>Hardware:</strong> {useCase.hardware}</p>
                    <p className="text-brand-rose/70"><strong>Cost:</strong> {useCase.cost}</p>
                    <p className="text-brand-rose/70"><strong>Time:</strong> {useCase.time}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Details */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-8 text-center text-brand-green-darker">
              Pay per second, not per month
            </h2>
            <p className="text-xl text-brand-green-dark text-center mb-12">
              Only pay when your code actually runs. No idle server costs.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark">
                <h3 className="text-lg font-bold mb-2 text-brand-rose">Starter</h3>
                <p className="text-3xl font-bold text-brand-rose mb-4">100 GPU-hours</p>
                <ul className="space-y-2 text-sm text-brand-rose/80">
                  <li>• Included in $99/month plan</li>
                  <li>• GPU inference only</li>
                  <li>• Overage: $0.50/GPU-hour</li>
                  <li>• No NPU access</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-rose/20 rounded-2xl p-6 border-2 border-brand-rose transform scale-105">
                <div className="text-xs font-semibold text-brand-green-darker mb-2">MOST POPULAR</div>
                <h3 className="text-lg font-bold mb-2 text-brand-green-darker">Growth</h3>
                <p className="text-3xl font-bold text-brand-green-darker mb-4">500 GPU + 200 NPU</p>
                <ul className="space-y-2 text-sm text-brand-green-dark">
                  <li>• Included in $599/month plan</li>
                  <li>• GPU + NPU compute</li>
                  <li>• Overage: $0.30/GPU, $0.10/NPU</li>
                  <li>• H100, A100, RTX 4090 access</li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark">
                <h3 className="text-lg font-bold mb-2 text-brand-rose">Scale</h3>
                <p className="text-3xl font-bold text-brand-rose mb-4">Custom</p>
                <ul className="space-y-2 text-sm text-brand-rose/80">
                  <li>• Negotiated based on usage</li>
                  <li>• Dedicated GPU instances</li>
                  <li>• Volume discounts available</li>
                  <li>• Priority hardware access</li>
                </ul>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection>
            <div className="bg-brand-green-darker rounded-lg p-6 border border-brand-rose/30">
              <h4 className="font-bold text-brand-rose mb-4">Example: AI Image Generation App</h4>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-brand-rose/70 mb-2">Usage per month:</p>
                  <ul className="space-y-1 text-brand-rose/80">
                    <li>• 10,000 images generated</li>
                    <li>• ~5 seconds per image</li>
                    <li>• Total: 14 GPU-hours</li>
                  </ul>
                </div>
                <div>
                  <p className="text-brand-rose/70 mb-2">Cost breakdown:</p>
                  <ul className="space-y-1 text-brand-rose/80">
                    <li>• Growth plan: $599/month (includes 500 GPU-hours)</li>
                    <li>• Compute used: 14 hours (well under limit)</li>
                    <li>• <strong className="text-brand-rose">Total extra cost: $0</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-brand-green">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">How GPU/NPU compute works</h2>
          </FadeInSection>

          <div className="grid lg:grid-cols-3 gap-8">
            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">1. Write your code</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Import PyTorch, TensorFlow, or any ML framework. Write your inference or training code in Python. No Docker or infrastructure config needed.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">2. Deploy instantly</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Push to Supadirect. Hardware spins up automatically. Cold starts in 200-500ms. Your code runs on H100, A100, or NPU based on availability.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="bg-brand-green-darker rounded-2xl p-8 border-2 border-brand-rose/20 h-full">
                <div className="w-12 h-12 bg-brand-rose/20 rounded-lg flex items-center justify-center mb-6 text-brand-rose">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-brand-rose">3. Pay per second</h3>
                <p className="text-brand-rose/80 leading-relaxed">
                  Billed by the second, not the hour. Hardware shuts down when idle. No paying for unused capacity. Track usage in real-time dashboard.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Related Features */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">Explore related features</h2>
            <p className="text-xl text-brand-green-dark text-center mb-12 max-w-3xl mx-auto">
              Build faster with our integrated platform features
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeInSection>
              <Link href="/ai" className="block group">
                <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    AI Tools →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Vector search, embeddings, and AI-powered development tools.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/features/database" className="block group">
                <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Real-Time Database →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Store model outputs, training data, and inference results.
                  </p>
                </div>
              </Link>
            </FadeInSection>

            <FadeInSection>
              <Link href="/features/hosting" className="block group">
                <div className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark hover:border-brand-rose transition-all h-full">
                  <h3 className="text-xl font-bold mb-3 text-brand-rose group-hover:text-brand-rose-light transition-colors">
                    Frontend Hosting →
                  </h3>
                  <p className="text-brand-rose/80 text-sm leading-relaxed">
                    Deploy your AI app's frontend to 150+ edge locations globally.
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
            <h2 className="text-5xl font-bold mb-6">Start running AI workloads today</h2>
            <p className="text-xl text-brand-rose/80 mb-8 max-w-2xl mx-auto">
              GPU and NPU compute included with every plan. No separate AWS Sagemaker or Lambda needed. Starting at $99/month.
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
