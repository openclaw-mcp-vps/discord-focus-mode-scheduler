export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          For remote dev teams &amp; indie hackers
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Auto Discord DND<br />during deep work
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Schedule recurring Do Not Disturb periods on Discord. Stay in flow, sync with your team, and never miss a beat — all on autopilot.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-lg"
        >
          Get started — $8/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
        {[
          { icon: "🔕", title: "Auto DND", desc: "Status flips to DND on your schedule, every day." },
          { icon: "🔄", title: "Team Sync", desc: "Teammates see your focus window before pinging." },
          { icon: "📅", title: "Smart Schedule", desc: "Recurring rules with timezone and override support." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited focus schedules",
              "Discord OAuth integration",
              "Team visibility dashboard",
              "Timezone-aware rules",
              "Manual override anytime",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9] text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Subscribe now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "How does it connect to Discord?",
              a: "You authenticate via Discord OAuth. The app uses Discord's API to update your status automatically based on your schedule — no bots required."
            },
            {
              q: "Will my teammates know I'm in focus mode?",
              a: "Yes. Your Discord status shows as DND and the team dashboard displays your active focus window so colleagues know when you're heads-down."
            },
            {
              q: "Can I override the schedule on the fly?",
              a: "Absolutely. You can pause or skip any focus period with one click, and the app will resume your normal schedule automatically."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Discord Focus Mode Scheduler. All rights reserved.
      </footer>
    </main>
  )
}
