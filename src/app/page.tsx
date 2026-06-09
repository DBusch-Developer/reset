import Link from "next/link";
import { resetRules, snacks } from "@/data/meal-plan";

export default function HomePage() {
  return (
    <div className="shell stack-lg">

      {/* Hero */}
      <section className="hero">
        <p className="eyebrow">14-Day Reset</p>
        <h1 className="hero-title">
          Eat clean.<br />
          Feel <span className="green">different.</span>
        </h1>
        <p className="edition-tag">Anti-Inflammatory Edition</p>
        <p className="hero-sub">
          A practical anti-inflammatory reset — dairy-free, plant-forward,
          with optional fatty fish. No rigid schedules, just smart options.
        </p>
        <div className="cta-row">
          <Link href="/meals" className="btn btn-green">Browse meals</Link>
          <Link href="/progress" className="btn btn-outline">Track progress</Link>
        </div>
      </section>

      {/* Reset Rules */}
      <section>
        <div className="section-head">
          <div>
            <p className="eyebrow">The Rules</p>
            <h2>What this reset looks like</h2>
          </div>
        </div>
        <div className="rules-grid">
          {resetRules.map((rule, i) => (
            <div key={i} className="rule-card">
              <span className="rule-num">0{i + 1}</span>
              <p className="rule-text">{rule}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Food guide download */}
      <section>
        <div className="guide-card">
          <div className="guide-card-text">
            <p className="eyebrow" style={{ marginBottom: ".4rem" }}>Quick Reference</p>
            <h2 style={{ fontSize: "clamp(1.2rem, 3vw, 1.6rem)", marginBottom: ".5rem" }}>
              Anti-Inflammatory Food Guide
            </h2>
            <p className="muted t-sm">
              What to eat, limit, and avoid — all on one page. Save it to your phone or print it out for grocery runs.
            </p>
          </div>
          <a
            href="/food-guide.png"
            download="Anti-Inflammatory-Food-Guide.png"
            className="btn btn-green btn-sm"
            style={{ flexShrink: 0 }}
          >
            ↓ Download guide
          </a>
        </div>
      </section>

      {/* How it works */}
      <section>
        <div className="section-head">
          <div>
            <p className="eyebrow">How It Works</p>
            <h2>Simple by design</h2>
          </div>
        </div>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon">🥗</div>
            <h3>Browse meals</h3>
            <p>Explore all breakfast, lunch, and dinner options. Every recipe has a full ingredient list and steps.</p>
          </div>
          <div className="how-card">
            <div className="how-icon">✓</div>
            <h3>Pick and cook</h3>
            <p>Choose what sounds good. Swap freely between the vegan base or the fatty fish options.</p>
          </div>
          <div className="how-card">
            <div className="how-icon">📊</div>
            <h3>Log and track</h3>
            <p>Mark meals as done, log water, note how you feel. 14 sessions to see how the reset changes things.</p>
          </div>
        </div>
      </section>

      {/* Snack ideas */}
      <section>
        <div className="section-head">
          <div>
            <p className="eyebrow">Snack Ideas</p>
            <h2>Between-meal options</h2>
          </div>
        </div>
        <div className="snack-list">
          {snacks.slice(0, 12).map((snack) => (
            <div key={snack.title} className="snack-item">
              <span className="snack-bullet" />
              <div>
                <p className="snack-name">{snack.title}</p>
                <p className="snack-why">{snack.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ paddingBottom: "1rem" }}>
        <div className="card card-p" style={{ textAlign: "center", background: "var(--surface-3)" }}>
          <p className="eyebrow" style={{ marginBottom: ".5rem" }}>Ready to start?</p>
          <h2 style={{ fontSize: "1.5rem", marginBottom: ".6rem" }}>Sign in to track your reset</h2>
          <p className="muted t-sm" style={{ marginBottom: "1.25rem" }}>
            No password needed — we email you a 6-digit code.
          </p>
          <div className="cta-row">
            <Link href="/login" className="btn btn-green">Get started</Link>
            <Link href="/meals" className="btn btn-outline">Just browse meals</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
