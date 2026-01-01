import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1d1d1d] text-white py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-bold">supadirect</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/sync" className="hover:text-white">Sync</Link></li>
              <li><Link href="/realtime" className="hover:text-white">Realtime</Link></li>
              <li><Link href="/auth" className="hover:text-white">Auth</Link></li>
              <li><Link href="/open-source" className="hover:text-white">Open source</Link></li>
              <li><Link href="/ai" className="hover:text-white">AI coding</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Developers</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Docs →</a></li>
              <li><Link href="/blog" className="hover:text-white">Blog →</Link></li>
              <li><Link href="/components" className="hover:text-white">Components</Link></li>
              <li><Link href="/templates" className="hover:text-white">Templates</Link></li>
              <li><Link href="/startups" className="hover:text-white">Startups</Link></li>
              <li><Link href="/champions" className="hover:text-white">Champions</Link></li>
              <li><a href="#" className="hover:text-white">Changelog</a></li>
              <li><a href="#" className="hover:text-white">Podcast</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white">About us</Link></li>
              <li><Link href="/company/brand" className="hover:text-white">Brand</Link></li>
              <li><Link href="/company/investors" className="hover:text-white">Investors</Link></li>
              <li><Link href="/company/partners" className="hover:text-white">Become a partner</Link></li>
              <li><Link href="/company/jobs" className="hover:text-white">Jobs</Link></li>
              <li><Link href="/company/events" className="hover:text-white">Events</Link></li>
              <li><Link href="/legal/terms" className="hover:text-white">Terms of service</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-white">Privacy policy</Link></li>
              <li><Link href="/legal/security" className="hover:text-white">Security</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-white">Twitter →</a></li>
              <li><a href="#" className="hover:text-white">Discord →</a></li>
              <li><a href="#" className="hover:text-white">YouTube →</a></li>
              <li><a href="#" className="hover:text-white">GitHub →</a></li>
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
  );
}
