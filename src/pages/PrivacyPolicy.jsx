import { Link } from 'react-router-dom'
import { ArrowLeft, Flame } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background text-ink">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-primary hover:text-primary-light transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>

        <div className="mt-10 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary">
            <Flame className="h-6 w-6 text-background" strokeWidth={2.2} />
          </span>
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Privacy Policy</h1>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">Last updated June 2026</p>

        <div className="prose-zoobies mt-10 space-y-6 text-muted leading-relaxed">
          <p>Zoobie's Old Town Tavern ("we", "us") respects your privacy. This page explains what we collect when you visit our website or contact us, and how we use it.</p>

          <h2 className="font-display text-xl font-bold text-ink">Information we collect</h2>
          <p>This website doesn’t collect personal information through forms — there’s no online ordering or booking here. If you call or email us, we use only the details you share to respond and coordinate your visit. We never sell your information.</p>

          <h2 className="font-display text-xl font-bold text-ink">Reservations</h2>
          <p>Reservations are made by phone — we don’t take bookings or payments through this website. When you call, we only use your details to hold your table and coordinate your visit.</p>

          <h2 className="font-display text-xl font-bold text-ink">Analytics &amp; cookies</h2>
          <p>We may use basic, privacy-respecting analytics to understand how guests find us so we can improve the site. You can disable cookies in your browser at any time.</p>

          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>Questions about your data? Call us at (517) 897-3563 or visit us at 1200 N Larch St, Lansing, MI 48906.</p>
        </div>
      </div>
    </main>
  )
}
