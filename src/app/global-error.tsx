'use client';

import { AlertCircle, Home } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-[#faf8f6] flex items-center justify-center px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <AlertCircle className="w-24 h-24 mx-auto text-[#a8534f] mb-6" />
              <h1 className="text-8xl font-bold text-[#1d1d1d] mb-4">500</h1>
              <h2 className="text-3xl font-bold text-[#1d1d1d] mb-4">Application Error</h2>
              <p className="text-xl text-gray-700 mb-8">
                A critical error occurred. Please refresh the page or contact support if the problem persists.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => reset()}
                className="bg-[#208a8d] text-white hover:bg-[#1a7070] px-8 py-4 rounded-lg text-lg font-medium transition-colors"
              >
                Try Again
              </button>
              <button
                onClick={() => window.location.href = '/'}
                className="border-2 border-[#208a8d] text-[#208a8d] hover:bg-[#208a8d] hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors inline-flex items-center gap-2 justify-center"
              >
                <Home className="w-5 h-5" />
                Go Home
              </button>
            </div>

            {error.digest && (
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <p className="text-sm text-gray-500 font-mono bg-gray-100 px-4 py-2 rounded">
                  Error ID: {error.digest}
                </p>
              </div>
            )}
          </div>
        </div>
      </body>
    </html>
  );
}
