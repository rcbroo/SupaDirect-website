'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import { trackCTAClick } from "@/lib/cta-links";
import { Check } from "lucide-react";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    companyName: '',
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  // Get plan from URL query params
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    trackCTAClick('Signup Form Submit', `/signup?plan=${selectedPlan}`);

    // Simulate API call
    setTimeout(() => {
      alert(`Signup successful! (Demo mode)\n\nEmail: ${formData.email}\nPlan: ${selectedPlan.toUpperCase()}\n\nIn production, this would create your account.`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />

      <main className="pt-32 pb-20 px-6" id="main-content">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-brand-green/10">
              <h1 className="text-4xl font-bold text-brand-green-darker mb-2">
                Start your free trial
              </h1>
              <p className="text-brand-green-dark mb-8">
                No credit card required. 30 days free access to all Starter features.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-brand-green-darker mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-rose focus:border-transparent ${
                      errors.fullName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-brand-green-darker mb-2"
                  >
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-rose focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="you@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-brand-green-darker mb-2"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-rose focus:border-transparent"
                    placeholder="Acme Inc."
                  />
                </div>

                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-brand-green-darker mb-2"
                  >
                    Password *
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-rose focus:border-transparent ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Minimum 8 characters"
                    aria-invalid={!!errors.password}
                    aria-describedby={errors.password ? 'password-error password-requirements' : 'password-requirements'}
                  />
                  <p id="password-requirements" className="mt-1 text-xs text-gray-500">
                    Use 8+ characters with a mix of letters, numbers & symbols
                  </p>
                  {errors.password && (
                    <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-brand-green-darker mb-2"
                  >
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-brand-rose focus:border-transparent ${
                      errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Re-enter your password"
                    aria-invalid={!!errors.confirmPassword}
                    aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                  />
                  {errors.confirmPassword && (
                    <p id="confirmPassword-error" className="mt-1 text-sm text-red-600" role="alert">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={(e) => setFormData({ ...formData, agreeToTerms: e.target.checked })}
                    className="mt-1 w-4 h-4 text-brand-rose border-gray-300 rounded focus:ring-brand-rose"
                    aria-invalid={!!errors.agreeToTerms}
                    aria-describedby={errors.agreeToTerms ? 'terms-error' : undefined}
                  />
                  <label htmlFor="agreeToTerms" className="text-sm text-gray-700">
                    I agree to Supadirect's{' '}
                    <Link href="/legal/terms" className="text-brand-rose hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/legal/privacy" className="text-brand-rose hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.agreeToTerms && (
                  <p id="terms-error" className="text-sm text-red-600" role="alert">
                    {errors.agreeToTerms}
                  </p>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-brand-rose text-white hover:bg-brand-rose-light py-6 text-lg font-semibold"
                  aria-busy={isLoading}
                >
                  {isLoading ? 'Creating account...' : 'Start free trial'}
                </Button>

                <p className="text-center text-sm text-gray-600">
                  Already have an account?{' '}
                  <Link href="/login" className="text-brand-rose font-semibold hover:underline">
                    Log in
                  </Link>
                </p>
              </form>
            </div>

            {/* Right Column - Plan Details */}
            <div className="lg:sticky lg:top-32">
              <div className="bg-brand-green rounded-2xl p-8 text-brand-rose">
                <h2 className="text-2xl font-bold mb-4">Your Free Trial</h2>
                <p className="text-brand-rose/90 mb-6">
                  Get full access to all Starter features for 30 days. No credit card required.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Global Frontend Hosting</p>
                      <p className="text-sm text-brand-rose/80">Deploy to 150+ edge locations</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Real-Time Database</p>
                      <p className="text-sm text-brand-rose/80">TypeScript-first with subscriptions</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Serverless Compute</p>
                      <p className="text-sm text-brand-rose/80">GPU/NPU acceleration included</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">Built-in Auth</p>
                      <p className="text-sm text-brand-rose/80">OAuth, email/password, custom JWT</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold">CDN & Storage</p>
                      <p className="text-sm text-brand-rose/80">Automatic file delivery</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-brand-rose/20 pt-6">
                  <p className="text-sm text-brand-rose/90 mb-4">
                    After your trial ends, continue at $99/month or cancel anytime. No long-term contracts.
                  </p>
                  <Link href="/pricing" className="text-sm font-semibold hover:underline">
                    View all pricing options →
                  </Link>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 bg-white rounded-xl p-6 border border-brand-green/10">
                <p className="text-sm font-semibold text-brand-green-darker mb-3">Trusted by developers</p>
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <div>✓ SOC 2 Compliant</div>
                  <div>✓ GDPR Verified</div>
                  <div>✓ HIPAA Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
