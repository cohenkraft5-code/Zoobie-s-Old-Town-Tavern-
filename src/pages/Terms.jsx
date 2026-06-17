import { Link } from 'react-router-dom'
import { ArrowLeft, Flame } from 'lucide-react'

export default function Terms() {
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
          <h1 className="font-display text-4xl font-extrabold tracking-tight">Terms of Use</h1>
        </div>

        <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-muted">Last updated June 2026</p>

        <div className="mt-10 space-y-6 text-muted leading-relaxed">
          <p>Welcome to the Zoobie's Old Town Tavern website. By using this site you agree to the terms below.</p>

          <h2 className="font-display text-xl font-bold text-ink">Information accuracy</h2>
          <p>Menus, pricing, hours, and availability are subject to change without notice. Seasonal items and draft selections rotate frequently. Please call ahead to confirm specific offerings or accommodate allergies and dietary restrictions.</p>

          <h2 className="font-display text-xl font-bold text-ink">Reservations</h2>
          <p>Reservation requests are confirmed through our booking partner. A confirmed reservation holds your table for a limited grace period. Large parties may be subject to a service charge.</p>

          <h2 className="font-display text-xl font-bold text-ink">Intellectual property</h2>
          <p>All content on this site — including the name, logo, photography, and menu descriptions — belongs to Zoobie's Old Town Tavern and may not be reproduced without permission.</p>

          <h2 className="font-display text-xl font-bold text-ink">Responsible service</h2>
          <p>We proudly serve craft beer, wine, and cocktails to guests 21 and over. Valid ID is required. We reserve the right to refuse service.</p>

          <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
          <p>Questions? Call (517) 897-3563 or visit 1200 N Larch St, Lansing, MI 48906.</p>
        </div>
      </div>
    </main>
  )
}
