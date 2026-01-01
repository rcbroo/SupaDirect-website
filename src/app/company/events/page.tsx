'use client';

import { Github, Calendar, MapPin, Clock, Users, Video, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { DropdownMenu } from "@/components/DropdownMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function EventsPage() {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('upcoming');

  const upcomingEvents = [
    {
      title: 'Supadirect Annual Conference 2025',
      date: 'March 15-17, 2025',
      time: '9:00 AM - 6:00 PM PST',
      location: 'San Francisco, CA',
      type: 'Conference',
      attendees: '1,500+',
      description: 'Our biggest event of the year featuring product launches, technical workshops, and networking.',
      image: '🎯',
      registration: 'Open',
    },
    {
      title: 'Real-time Architecture Workshop',
      date: 'February 10, 2025',
      time: '2:00 PM - 4:00 PM EST',
      location: 'Virtual',
      type: 'Workshop',
      attendees: '200',
      description: 'Deep dive into building real-time applications with Supadirect sync technology.',
      image: '⚡',
      registration: 'Open',
    },
    {
      title: 'Developer Meetup - Austin',
      date: 'February 28, 2025',
      time: '6:00 PM - 9:00 PM CST',
      location: 'Austin, TX',
      type: 'Meetup',
      attendees: '75',
      description: 'Connect with local developers, hear customer success stories, and learn best practices.',
      image: '🤝',
      registration: 'Open',
    },
    {
      title: 'AI + Backend Webinar Series',
      date: 'Every Tuesday in February',
      time: '11:00 AM PST',
      location: 'Virtual',
      type: 'Webinar',
      attendees: 'Unlimited',
      description: 'Weekly webinar series on integrating AI features into your Supadirect apps.',
      image: '🤖',
      registration: 'Open',
    },
  ];

  const pastEvents = [
    {
      title: 'Supadirect Launch Party',
      date: 'January 15, 2025',
      location: 'Virtual',
      type: 'Launch Event',
      attendees: '3,000+',
      description: 'Celebrated the launch of Supadirect 2.0 with live demos and Q&A.',
      image: '🚀',
      recording: 'Available',
    },
    {
      title: 'Holiday Hackathon 2024',
      date: 'December 20-22, 2024',
      location: 'Virtual',
      type: 'Hackathon',
      attendees: '500+',
      description: '48-hour hackathon with $50,000 in prizes for the best Supadirect apps.',
      image: '🏆',
      recording: 'Available',
    },
    {
      title: 'TypeScript Backend Masterclass',
      date: 'November 8, 2024',
      location: 'New York, NY',
      type: 'Workshop',
      attendees: '150',
      description: 'Hands-on workshop on building type-safe backends with Supadirect.',
      image: '💻',
      recording: 'Available',
    },
  ];

  const displayEvents = filter === 'upcoming' ? upcomingEvents : filter === 'past' ? pastEvents : [...upcomingEvents, ...pastEvents];

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
            <Calendar className="w-20 h-20 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Supadirect Events
            </h1>
            <p className="text-xl md:text-2xl text-brand-rose/90 mb-8 max-w-3xl mx-auto">
              Join us at conferences, workshops, meetups, and virtual events to connect with the Supadirect community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 px-6 bg-brand-rose/15 border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex justify-center gap-4">
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              filter === 'upcoming'
                ? 'bg-brand-rose text-white'
                : 'bg-gray-100 text-brand-green-dark hover:bg-gray-200'
            }`}
          >
            Upcoming Events
          </button>
          <button
            onClick={() => setFilter('past')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              filter === 'past'
                ? 'bg-brand-rose text-white'
                : 'bg-gray-100 text-brand-green-dark hover:bg-gray-200'
            }`}
          >
            Past Events
          </button>
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-brand-rose text-white'
                : 'bg-gray-100 text-brand-green-dark hover:bg-gray-200'
            }`}
          >
            All Events
          </button>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {filter === 'upcoming' && (
            <>
              <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
                Upcoming Events
              </h2>
              <p className="text-xl text-brand-green-dark text-center mb-12">
                Register for our upcoming events and workshops
              </p>
            </>
          )}

          {filter === 'past' && (
            <>
              <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
                Past Events
              </h2>
              <p className="text-xl text-brand-green-dark text-center mb-12">
                Watch recordings and catch up on what you missed
              </p>
            </>
          )}

          <div className="space-y-6">
            {displayEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-brand-rose/15 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#f59e0b] transition-colors"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-brand-rose p-8 md:p-12 flex items-center justify-center text-8xl md:w-64 flex-shrink-0">
                    {event.image}
                  </div>
                  <div className="p-8 md:p-12 flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-brand-green-darker mb-2">
                          {event.title}
                        </h3>
                        <div className="inline-block bg-brand-rose/10 text-[#f59e0b] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                          {event.type}
                        </div>
                      </div>
                      {'registration' in event && (
                        <Button className="bg-brand-rose text-brand-rose hover:bg-brand-rose-dark whitespace-nowrap">
                          Register Now
                        </Button>
                      )}
                      {'recording' in event && (
                        <Button variant="outline" className="border-[#f59e0b] text-[#f59e0b] hover:bg-brand-rose hover:text-brand-rose whitespace-nowrap">
                          Watch Recording
                        </Button>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-brand-green-dark">
                        <Calendar className="w-5 h-5 text-[#f59e0b]" />
                        <span className="text-sm">{event.date}</span>
                      </div>
                      {'time' in event && (
                        <div className="flex items-center gap-2 text-brand-green-dark">
                          <Clock className="w-5 h-5 text-[#f59e0b]" />
                          <span className="text-sm">{event.time}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-brand-green-dark">
                        <MapPin className="w-5 h-5 text-[#f59e0b]" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    </div>

                    <p className="text-brand-green-dark mb-4">{event.description}</p>

                    <div className="flex items-center gap-2 text-brand-green">
                      <Users className="w-5 h-5" />
                      <span className="text-sm">{event.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 px-6 bg-brand-rose/15">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-brand-green-darker">
            Event Types
          </h2>
          <p className="text-xl text-brand-green-dark text-center mb-12">
            We host various types of events to engage with our community
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Trophy className="w-10 h-10" />,
                title: 'Conferences',
                description: 'Multi-day events with keynotes, workshops, and networking',
              },
              {
                icon: <Video className="w-10 h-10" />,
                title: 'Webinars',
                description: 'Virtual sessions on product features and best practices',
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: 'Meetups',
                description: 'Local gatherings to connect with developers in your area',
              },
              {
                icon: <Star className="w-10 h-10" />,
                title: 'Workshops',
                description: 'Hands-on technical training and certification programs',
              },
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-green rounded-2xl p-8 border-2 border-gray-200 text-center"
              >
                <div className="text-[#f59e0b] mb-4 flex justify-center">{type.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-green-darker">{type.title}</h3>
                <p className="text-brand-green-dark">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#f59e0b] to-[#b45309] text-brand-rose">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Stay Updated on Events
          </h2>
          <p className="text-xl text-brand-rose/90 mb-8">
            Subscribe to our events newsletter to get notified about upcoming events, exclusive invites, and early bird discounts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button className="bg-brand-rose/15 text-[#f59e0b] hover:bg-gray-100 px-8 py-4 whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-white/70 mt-4">
            No spam. Unsubscribe anytime.
          </p>
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
                <li><Link href="/company/partners" className="hover:text-brand-rose">Become a partner</Link></li>
                <li><Link href="/company/jobs" className="hover:text-brand-rose">Jobs</Link></li>
                <li><Link href="/company/events" className="hover:text-brand-rose">Events</Link></li>
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
