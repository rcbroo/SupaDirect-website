'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#faf8f6] flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <AlertCircle className="w-24 h-24 mx-auto text-[#a8534f] mb-6" />
          <h1 className="text-8xl font-bold text-[#1d1d1d] mb-4">500</h1>
          <h2 className="text-3xl font-bold text-[#1d1d1d] mb-4">Something Went Wrong</h2>
          <p className="text-xl text-gray-700 mb-8">
            We're sorry, but something unexpected happened. Our team has been notified and is working on a fix.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => reset()}
            className="bg-[#208a8d] text-white hover:bg-[#1a7070] px-8 py-6 text-lg flex items-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline" className="border-2 border-[#208a8d] text-[#208a8d] hover:bg-[#208a8d] hover:text-white px-8 py-6 text-lg flex items-center gap-2">
              <Home className="w-5 h-5" />
              Go Home
            </Button>
          </Link>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
          <h3 className="text-lg font-semibold mb-4 text-[#1d1d1d]">Need Help?</h3>
          <p className="text-gray-700 mb-4">
            If this problem persists, please contact our support team with the error details.
          </p>
          {error.digest && (
            <p className="text-sm text-gray-500 font-mono bg-gray-100 px-4 py-2 rounded">
              Error ID: {error.digest}
            </p>
          )}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/faq">
              <Button variant="outline" className="border-gray-300">
                View FAQ
              </Button>
            </Link>
            <a href="mailto:support@supadirect.com">
              <Button variant="outline" className="border-gray-300">
                Email Support
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
