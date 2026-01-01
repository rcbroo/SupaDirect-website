'use client';

import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-brand-green">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-bold mb-6 text-brand-rose"
          >
            Build AI apps without AWS complexity
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-rose/80 mb-8"
          >
            GPU & NPU compute, real-time database, vector search, and frontend hosting—all integrated. No Sagemaker. No Lambda. No S3. Just TypeScript.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-brand-green-darker rounded-2xl p-6 max-w-3xl mx-auto mb-8 border-2 border-brand-rose/20"
          >
            <div className="text-left mb-4">
              <p className="text-brand-rose/80 text-sm">
                Build an app like Slack. It should have a sidebar with channels and direct messages where users can...
              </p>
            </div>
            <div className="flex items-center justify-end gap-2">
              <span className="text-brand-rose text-sm">Try Supadirect with</span>
              <span className="text-2xl">👨‍🍳</span>
              <span className="font-bold text-red-400 text-xl">Chef</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rules & Prompts */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-3xl font-bold mb-4">Rules & Prompts for AI</h2>
            <p className="text-brand-green-dark mb-6">
              Get the best results from AI by adding rules to your favorite AI IDEs like Cursor and Windsurf.
            </p>
            <Button className="bg-[#1d1d1d] text-brand-rose hover:bg-[#2d2d2d]">
              Download Rules
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
          >
            <h2 className="text-3xl font-bold mb-4">Building an AI Coding Platform?</h2>
            <p className="text-brand-green-dark mb-6">
              Supadirect is the best way for AI to generate the database and backend for your AI coding platform. Entirely in code.
            </p>
            <Button className="bg-[#1d1d1d] text-brand-rose hover:bg-[#2d2d2d]">
              Learn more
            </Button>
          </motion.div>
        </div>
      </section>

      {/* GPU/NPU Compute */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-green-darker">GPU & NPU compute without AWS</h2>
            <p className="text-xl text-brand-green-dark mb-6">
              Run ML inference, fine-tune LLMs, and process images at scale—all from your Supadirect backend.
            </p>
            <p className="text-lg text-brand-green-dark/80 max-w-3xl mx-auto">
              No need for AWS Sagemaker, Lambda, or S3. Everything runs in the same platform as your frontend, database, and serverless functions. Pay per-second for compute. Automatic scaling included.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark"
            >
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">GPU Compute</h3>
              <p className="text-brand-rose/80 mb-4">Best for heavy ML training, LLM fine-tuning, complex image processing, and high-throughput inference.</p>
              <ul className="space-y-2 text-brand-rose/70">
                <li>• NVIDIA A100/H100 GPUs available</li>
                <li>• $0.30–0.50 per GPU-hour (Growth tier)</li>
                <li>• Automatic warm instance pooling</li>
                <li>• Cold start ~500ms, warm calls &lt;50ms</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark"
            >
              <h3 className="text-2xl font-bold mb-4 text-brand-rose">NPU Compute</h3>
              <p className="text-brand-rose/80 mb-4">Best for edge AI, on-device inference, power-efficient ML, and real-time personalization.</p>
              <ul className="space-y-2 text-brand-rose/70">
                <li>• Apple Neural Engine, Google TPU</li>
                <li>• $0.10 per NPU-hour (Growth tier)</li>
                <li>• Optimized for small models</li>
                <li>• Ultra-low latency for edge use cases</li>
              </ul>
            </motion.div>
          </div>

          <div className="text-center">
            <Link href="/pricing">
              <Button className="bg-brand-rose text-brand-green-darker hover:bg-brand-rose-light px-8 py-4">
                See compute pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Build AI Apps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-brand-green-darker">Build AI Apps with ease</h2>
            <p className="text-xl text-brand-green-dark">
              Supadirect Components make it easy to build intelligent, real-time features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Workflow',
                description: 'Simplifies long-running logic with durable execution',
              },
              {
                title: 'AI Agent',
                description: 'Structures your AI flows with built-in memory and vector search',
              },
              {
                title: 'Persistent Text Streaming',
                description: 'Powers real-time chat with efficient storage',
              },
            ].map((component, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-green rounded-2xl p-6 border-2 border-brand-green-dark hover:border-brand-rose transition-colors cursor-pointer"
              >
                <h3 className="text-xl font-bold mb-3 text-brand-rose">{component.title}</h3>
                <p className="text-brand-rose/80 mb-4">{component.description}</p>
                <a href="#" className="text-brand-rose font-semibold hover:underline">
                  Learn more →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-brand-green-darker">
            AWS Sagemaker vs Supadirect for AI
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            See what you get with Supadirect's integrated AI platform vs piecing together AWS services
          </p>

          <div className="bg-brand-green rounded-2xl p-8 border-2 border-brand-green-dark overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-brand-rose/30">
                  <th className="pb-4 pr-4 text-brand-rose font-semibold">Feature</th>
                  <th className="pb-4 px-4 text-brand-rose/70">AWS Sagemaker + Lambda + S3</th>
                  <th className="pb-4 pl-4 text-brand-rose font-semibold">Supadirect</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-rose/90 font-medium">GPU inference</td>
                  <td className="py-4 px-4 text-brand-rose/70">Complex setup, separate service</td>
                  <td className="py-4 pl-4 text-brand-rose">Built-in, TypeScript functions</td>
                </tr>
                <tr className="border-b border-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-rose/90 font-medium">Vector database</td>
                  <td className="py-4 px-4 text-brand-rose/70">Separate (Pinecone, pgvector)</td>
                  <td className="py-4 pl-4 text-brand-rose">Built-in vector search</td>
                </tr>
                <tr className="border-b border-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-rose/90 font-medium">Frontend hosting</td>
                  <td className="py-4 px-4 text-brand-rose/70">Separate (Vercel/Amplify)</td>
                  <td className="py-4 pl-4 text-brand-rose">Included</td>
                </tr>
                <tr className="border-b border-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-rose/90 font-medium">Real-time sync</td>
                  <td className="py-4 px-4 text-brand-rose/70">Complex (AppSync/custom)</td>
                  <td className="py-4 pl-4 text-brand-rose">Automatic</td>
                </tr>
                <tr className="border-b border-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-rose/90 font-medium">Type safety</td>
                  <td className="py-4 px-4 text-brand-rose/70">Manual (boto3, SDK)</td>
                  <td className="py-4 pl-4 text-brand-rose">End-to-end TypeScript</td>
                </tr>
                <tr className="border-b-2 border-brand-rose/30">
                  <td className="py-4 pr-4 text-brand-rose/90 font-medium">Egress fees</td>
                  <td className="py-4 px-4 text-brand-rose/70">$0.09/GB (expensive!)</td>
                  <td className="py-4 pl-4 text-brand-rose">$0 (free)</td>
                </tr>
                <tr className="bg-brand-rose/20">
                  <td className="py-4 pr-4 text-brand-rose font-bold">Monthly cost for AI app*</td>
                  <td className="py-4 px-4 text-brand-rose/90 font-semibold">$800–2,500/mo</td>
                  <td className="py-4 pl-4 text-brand-rose font-bold text-lg">$299–599/mo</td>
                </tr>
              </tbody>
            </table>
            <p className="text-sm text-brand-rose/70 mt-6 italic">
              * Estimated for AI app with 10K users, 100K inference calls/month, 50GB storage, vector search
            </p>
          </div>

          <div className="mt-8 p-6 bg-brand-green-darker rounded-lg border border-brand-rose/30 text-center">
            <p className="text-brand-rose font-semibold text-lg">
              <strong>AWS total: $800–2,500/month</strong> vs <strong className="text-brand-rose-light">Supadirect: $299–599/month</strong>
            </p>
            <p className="text-brand-rose/80 mt-2">
              Save 60–75% on AI infrastructure by using one integrated platform
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-brand-rose">
            Why choose Supadirect for AI apps?
          </h2>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3 text-brand-rose">Thoroughly evaluated rules</h3>
              <p className="text-brand-rose/80 leading-relaxed">
                Supadirect AI rules are thoroughly evaluated using convex-evals. You can see the results of the evaluation in the LLM Leaderboard. We've also created full-stack benchmarks for AI coding to see that Supadirect outperforms other platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3 text-brand-rose">Queries are Code</h3>
              <p className="text-brand-rose/80 leading-relaxed">
                Your database queries are pure TypeScript functions with end-to-end type safety and IDE support. This means AI can generate database code using the large training set of TypeScript code without switching to SQL.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3 text-brand-rose">Automatic Reactivity</h3>
              <p className="text-brand-rose/80 leading-relaxed">
                The reactive system automatically tracks data dependencies and updates your UI. AI doesn't need to manually manage subscriptions, WebSocket connections, or complex state synchronization—Supadirect handles all of this automatically.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-3 text-brand-rose">Transactional Guarantees</h3>
              <p className="text-brand-rose/80 leading-relaxed">
                All functions that call the database are run in transactions. This makes it impossible for AI to write code that could corrupt your data or leave your app in an inconsistent state.
              </p>
            </motion.div>
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
