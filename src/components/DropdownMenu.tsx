'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
}

export function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') setIsOpen(false);
      }}
    >
      <button
        className="text-white/90 hover:text-white flex items-center gap-1 transition-colors py-2"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`${label} menu`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
            role="menu"
            aria-label={`${label} menu items`}
          >
            {items.map((item, index) => {
              const isInternalLink = item.href.startsWith('/');
              const LinkComponent = isInternalLink ? Link : 'a';
              const linkProps = !isInternalLink ? { target: "_blank", rel: "noopener noreferrer" } : {};

              return (
                <LinkComponent
                  key={index}
                  href={item.href}
                  className="block px-4 py-3 hover:bg-gray-50 transition-colors group"
                  role="menuitem"
                  {...linkProps}
                >
                  <div className="font-medium text-gray-900 group-hover:text-[#D4653A] transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-gray-500 mt-1">
                      {item.description}
                    </div>
                  )}
                </LinkComponent>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
