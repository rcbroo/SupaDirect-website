'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [developersOpen, setDevelopersOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  const featuresItems = [
    { label: 'Features Overview', href: '/features', description: 'Complete platform features' },
    { label: 'Frontend Hosting', href: '/features/hosting', description: 'Deploy to 150+ edge locations' },
    { label: 'Real-Time Database', href: '/features/database', description: 'TypeScript-native database' },
    { label: 'GPU/NPU Compute', href: '/features/compute', description: 'Run AI models' },
  ];

  const productItems = [
    { label: 'Sync', href: '/sync', description: 'Real-time data synchronization' },
    { label: 'Realtime', href: '/realtime', description: 'Live updates for your app' },
    { label: 'Auth', href: '/auth', description: 'Built-in authentication' },
    { label: 'Open source', href: '/open-source', description: 'Community-driven development' },
    { label: 'AI coding', href: '/ai', description: 'AI-powered code generation' },
  ];

  const developerItems = [
    { label: 'Docs →', href: '#', description: 'Complete documentation' },
    { label: 'Components', href: '/components', description: 'Pre-built components' },
    { label: 'Templates', href: '/templates', description: 'Starter templates' },
    { label: 'Startups Program', href: '/startups', description: 'Benefits for startups' },
    { label: 'Champions Program', href: '/champions', description: 'Community champions' },
    { label: 'Changelog →', href: '#', description: 'Recent changes' },
    { label: 'Podcast →', href: '#', description: 'Developer interviews' },
  ];

  const companyItems = [
    { label: 'About us', href: '/about', description: 'Our story and mission' },
    { label: 'Contact', href: '/contact', description: 'Get in touch' },
    { label: 'Contact Sales', href: '/contact/sales', description: 'Talk to our sales team' },
    { label: 'Brand', href: '/company/brand', description: 'Brand assets' },
    { label: 'Investors', href: '/company/investors', description: 'Investor information' },
    { label: 'Partners', href: '/company/partners', description: 'Partnership opportunities' },
    { label: 'Jobs', href: '/company/jobs', description: 'Join our team' },
    { label: 'Events', href: '/company/events', description: 'Upcoming events' },
  ];

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-brand-rose p-2"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#53534B] border-t border-white/10 overflow-hidden max-h-[80vh] overflow-y-auto"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="px-6 py-4 space-y-2">
              {/* Features Dropdown */}
              <div>
                <button
                  onClick={() => setFeaturesOpen(!featuresOpen)}
                  className="text-brand-rose/90 hover:text-brand-rose flex items-center justify-between w-full text-left py-2 font-medium"
                  aria-expanded={featuresOpen}
                  aria-controls="features-menu"
                >
                  <span>Features</span>
                  <motion.div
                    animate={{ rotate: featuresOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    aria-hidden="true"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {featuresOpen && (
                    <motion.div
                      id="features-menu"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 space-y-2 mt-2"
                      role="menu"
                    >
                      {featuresItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="block py-2 text-brand-rose/70 hover:text-brand-rose text-sm"
                        >
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-brand-rose/50 mt-0.5">{item.description}</div>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Product Dropdown */}
              <div>
                <button
                  onClick={() => setProductOpen(!productOpen)}
                  className="text-brand-rose/90 hover:text-brand-rose flex items-center justify-between w-full text-left py-2 font-medium"
                >
                  <span>Product</span>
                  <motion.div
                    animate={{ rotate: productOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {productOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 space-y-2 mt-2"
                    >
                      {productItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="block py-2 text-brand-rose/70 hover:text-brand-rose text-sm"
                        >
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-brand-rose/50 mt-0.5">{item.description}</div>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Developers Dropdown */}
              <div>
                <button
                  onClick={() => setDevelopersOpen(!developersOpen)}
                  className="text-brand-rose/90 hover:text-brand-rose flex items-center justify-between w-full text-left py-2 font-medium"
                >
                  <span>Developers</span>
                  <motion.div
                    animate={{ rotate: developersOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {developersOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 space-y-2 mt-2"
                    >
                      {developerItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="block py-2 text-brand-rose/70 hover:text-brand-rose text-sm"
                        >
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-brand-rose/50 mt-0.5">{item.description}</div>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Dropdown */}
              <div>
                <button
                  onClick={() => setCompanyOpen(!companyOpen)}
                  className="text-brand-rose/90 hover:text-brand-rose flex items-center justify-between w-full text-left py-2 font-medium"
                >
                  <span>Company</span>
                  <motion.div
                    animate={{ rotate: companyOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {companyOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4 space-y-2 mt-2"
                    >
                      {companyItems.map((item, index) => (
                        <motion.a
                          key={index}
                          href={item.href}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="block py-2 text-brand-rose/70 hover:text-brand-rose text-sm"
                        >
                          <div className="font-medium">{item.label}</div>
                          {item.description && (
                            <div className="text-xs text-brand-rose/50 mt-0.5">{item.description}</div>
                          )}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Divider between dropdowns and single links */}
              <div className="border-t border-white/10 my-4"></div>

              {/* Direct Links */}
              <a href="/pricing" className="text-brand-rose/90 hover:text-brand-rose block py-2 font-medium">Pricing</a>
              <a href="/faq" className="text-brand-rose/90 hover:text-brand-rose block py-2 font-medium">FAQ</a>
              <a href="/blog" className="text-brand-rose/90 hover:text-brand-rose block py-2 font-medium">Blog</a>
              <a href="#" className="text-brand-rose/90 hover:text-brand-rose block py-2 font-medium">Docs</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
