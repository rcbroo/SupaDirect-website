import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search, FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#faf8f6] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <FileQuestion className="w-24 h-24 mx-auto text-[#208a8d] mb-6" />
          <h1 className="text-8xl font-bold text-[#1d1d1d] mb-4">404</h1>
          <h2 className="text-3xl font-bold text-[#1d1d1d] mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-700 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/">
            <Button className="bg-[#208a8d] text-white hover:bg-[#1a7070] px-8 py-6 text-lg flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
          <Link href="/faq">
            <Button variant="outline" className="border-2 border-[#208a8d] text-[#208a8d] hover:bg-[#208a8d] hover:text-white px-8 py-6 text-lg flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search FAQ
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-[#1d1d1d]">Popular Pages</h3>
          <div className="grid grid-cols-2 gap-4 text-left">
            <Link href="/pricing" className="text-[#208a8d] hover:underline">
              → Pricing
            </Link>
            <Link href="/components" className="text-[#208a8d] hover:underline">
              → Components
            </Link>
            <Link href="/templates" className="text-[#208a8d] hover:underline">
              → Templates
            </Link>
            <Link href="/ai" className="text-[#208a8d] hover:underline">
              → AI Coding
            </Link>
            <Link href="/sync" className="text-[#208a8d] hover:underline">
              → Sync
            </Link>
            <Link href="/faq" className="text-[#208a8d] hover:underline">
              → FAQ
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
