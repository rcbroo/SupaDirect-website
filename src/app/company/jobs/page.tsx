'use client';

import { Github, Briefcase, MapPin, Clock, Heart, Zap, Users, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import Link from "next/link";

export default function JobsPage() {
  const jobs = [
    {
      title: 'Senior Backend Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      description: 'Build scalable distributed systems that power real-time applications for thousands of developers.',
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      description: 'Design delightful developer experiences and create the future of backend development tools.',
    },
    {
      title: 'Developer Advocate',
      department: 'Developer Relations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Help developers succeed with Supadirect through content, community engagement, and feedback.',
    },
    {
      title: 'Technical Writer',
      department: 'Developer Relations',
      location: 'Remote',
      type: 'Full-time',
      description: 'Create world-class documentation, guides, and tutorials that empower developers worldwide.',
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Work with enterprise customers to architect and implement Supadirect solutions.',
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive growth through creative campaigns, content strategy, and community building.',
    },
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Premium health, dental, and vision insurance for you and your family',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Team Retreats',
      description: 'Annual company offsites and quarterly team gatherings',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Growth Budget',
      description: '$5,000/year for conferences, courses, and professional development',
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Equity',
      description: 'Competitive equity packages for all employees',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Parental Leave',
      description: '16 weeks paid parental leave for all parents',
    },
  ];

  return (
    <div className="min-h-screen bg-brand-green">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-green/90 backdrop-blur-sm border-b border-[#53534B]/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center gap-8">
            <Link href="/">
              <h1 className="text-2xl font-bold text-brand-rose cursor-pointer">supadirect</h1>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <DropdownMenu
                label="Product"
                items={[
                  { label: 'Sync', href: '/sync', description: 'Real-time data synchronization' },
                  { label: 'Realtime', href: '/realtime', description: 'Live updates for your app' },
                  { label: 'Auth', href: '/auth', description: 'Built-in authentication' },
                  { label: 'Open source', href: '/open-source', description: 'Community-driven development' },
                  { label: 'AI coding', href: '/ai', description: 'AI-powered code generation' },
                  { label: 'FAQ', href: '/faq' },
                  { label: 'Pricing', href: '/pricing' },
                ]}
              />
              <DropdownMenu
                label="Developers"
                items={[
                  { label: 'Docs →', href: '#', description: 'Complete documentation' },
                  { label: 'Blog →', href: '/blog', description: 'Latest updates and tutorials' },
                  { label: 'Components', href: '/components', description: 'Pre-built components' },
                  { label: 'Templates', href: '/templates', description: 'Starter templates' },
                  { label: 'Startups', href: '/startups', description: 'Built for startups' },
                  { label: 'Champions', href: '/champions', description: 'Community champions' },
                  { label: 'Changelog', href: '#', description: 'Recent changes' },
                  { label: 'Podcast', href: '#', description: 'Developer interviews' },
                ]}
              />
              <Link href="/blog" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Blog</Link>
              <a href="#" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Docs</a>
              <Link href="/pricing" className="text-brand-rose/90 hover:text-brand-rose transition-colors py-2">Pricing</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-brand-rose/90 hover:text-brand-rose flex items-center gap-2 transition-colors">
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">16,435 stars</span>
            </a>
            <Button variant="ghost" className="text-brand-rose hidden sm:inline-flex">Log in</Button>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f59e0b] to-[#b45309] text-brand-rose">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Briefcase className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              Help us build the future of backend development. We're looking for talented, passionate people to join our mission.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-brand-rose/15 text-[#f59e0b] hover:bg-gray-100 px-8 py-6 text-lg">
                View Open Positions
              </Button>
              <Button variant="outline" className="border-2 border-white text-brand-rose hover:bg-brand-rose/15 hover:text-[#f59e0b] px-8 py-6 text-lg">
                Learn About Our Culture
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Why Join Supadirect?
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            Work on meaningful problems with world-class teammates
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Impact at Scale',
                description: 'Your work will empower 50,000+ developers and power millions of applications worldwide.',
              },
              {
                title: 'Cutting-Edge Tech',
                description: 'Work with Rust, TypeScript, distributed systems, and real-time sync technology.',
              },
              {
                title: 'Learn & Grow',
                description: 'Work alongside engineers from Google, Stripe, and Firebase. Continuous learning culture.',
              },
              {
                title: 'Remote-First',
                description: 'Work from anywhere with flexible hours. We optimize for async communication and trust.',
              },
              {
                title: 'Developer-Led',
                description: 'Engineers make technical decisions. We ship fast and iterate based on user feedback.',
              },
              {
                title: 'Competitive Comp',
                description: 'Top-tier salary, equity, and benefits. We pay market rates across all locations.',
              },
            ].map((reason, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200"
              >
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{reason.title}</h3>
                <p className="text-brand-green-dark">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Benefits & Perks
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            We take care of our team so they can focus on building great products
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-rose/15 rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="text-[#f59e0b] mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{benefit.title}</h3>
                <p className="text-brand-green-dark">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Open Positions
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            {jobs.length} open roles across engineering, design, and more
          </p>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-green rounded-2xl p-6 md:p-8 border-2 border-gray-200 hover:border-[#f59e0b] transition-colors cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-brand-green-darker group-hover:text-[#f59e0b] transition-colors">
                        {job.title}
                      </h3>
                      <span className="text-xs bg-brand-rose text-brand-rose px-3 py-1 rounded-full">
                        {job.type}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-brand-green mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                    </div>
                    <p className="text-brand-green-dark">{job.description}</p>
                  </div>
                  <Button className="bg-brand-rose text-brand-rose hover:bg-brand-rose-dark px-6 py-3 whitespace-nowrap">
                    Apply Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Our Hiring Process
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            What to expect when you apply
          </p>

          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Application Review',
                description: 'We review your application within 3-5 business days. We look for passion, experience, and cultural fit.',
              },
              {
                step: '2',
                title: 'Initial Call',
                description: '30-minute chat with our recruiter to discuss your background, interests, and answer any questions.',
              },
              {
                step: '3',
                title: 'Technical Interview',
                description: 'For technical roles: coding challenge or system design. For other roles: portfolio review or case study.',
              },
              {
                step: '4',
                title: 'Team Interviews',
                description: '2-3 interviews with potential teammates to assess skills, collaboration, and culture fit.',
              },
              {
                step: '5',
                title: 'Offer & Onboarding',
                description: 'If it\'s a mutual fit, we\'ll extend an offer and help you get started on day one.',
              },
            ].map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 bg-brand-rose/15 rounded-2xl p-6 border-2 border-gray-200"
              >
                <div className="w-12 h-12 rounded-full bg-brand-rose text-brand-rose flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {stage.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-brand-green-darker">{stage.title}</h3>
                  <p className="text-brand-green-dark">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#f59e0b] to-[#b45309] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Don't see a role that fits?
          </h2>
          <p className="text-xl text-brand-rose/90 mb-8">
            We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a href="mailto:jobs@supadirect.com">
            <Button className="bg-brand-rose/15 text-[#f59e0b] hover:bg-gray-100 px-8 py-4">
              Email Us Your Resume
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1d1d1d] text-brand-rose py-16 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl font-bold">supadirect</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/sync" className="hover:text-brand-rose">Sync</Link></li>
                <li><Link href="/realtime" className="hover:text-brand-rose">Realtime</Link></li>
                <li><Link href="/auth" className="hover:text-brand-rose">Auth</Link></li>
                <li><Link href="/open-source" className="hover:text-brand-rose">Open source</Link></li>
                <li><Link href="/ai" className="hover:text-brand-rose">AI coding</Link></li>
                <li><Link href="/faq" className="hover:text-brand-rose">FAQ</Link></li>
                <li><Link href="/pricing" className="hover:text-brand-rose">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-brand-rose">Docs →</a></li>
                <li><Link href="/blog" className="hover:text-brand-rose">Blog →</Link></li>
                <li><Link href="/components" className="hover:text-brand-rose">Components</Link></li>
                <li><Link href="/templates" className="hover:text-brand-rose">Templates</Link></li>
                <li><Link href="/startups" className="hover:text-brand-rose">Startups</Link></li>
                <li><Link href="/champions" className="hover:text-brand-rose">Champions</Link></li>
                <li><a href="#" className="hover:text-brand-rose">Changelog</a></li>
                <li><a href="#" className="hover:text-brand-rose">Podcast</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/about" className="hover:text-brand-rose">About us</Link></li>
                <li><Link href="/company/brand" className="hover:text-brand-rose">Brand</Link></li>
                <li><Link href="/company/investors" className="hover:text-brand-rose">Investors</Link></li>
                <li><a href="#" className="hover:text-brand-rose">Become a partner</a></li>
                <li><Link href="/company/jobs" className="hover:text-brand-rose">Jobs</Link></li>
                <li><a href="#" className="hover:text-brand-rose">Events</a></li>
                <li><Link href="/legal/terms" className="hover:text-brand-rose">Terms of service</Link></li>
                <li><Link href="/legal/privacy" className="hover:text-brand-rose">Privacy policy</Link></li>
                <li><Link href="/legal/security" className="hover:text-brand-rose">Security</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Social</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-brand-rose">Twitter →</a></li>
                <li><a href="#" className="hover:text-brand-rose">Discord →</a></li>
                <li><a href="#" className="hover:text-brand-rose">YouTube →</a></li>
                <li><a href="#" className="hover:text-brand-rose">GitHub →</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="space-y-2 text-sm text-white/50 mb-6">
              <p className="font-semibold">A Trusted Solution</p>
              <p>✓ SOC 2 Type II Compliant</p>
              <p>✓ HIPAA Compliant</p>
              <p>✓ GDPR Verified</p>
            </div>
            <p className="text-sm text-white/50">©2025 Supadirect, Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
