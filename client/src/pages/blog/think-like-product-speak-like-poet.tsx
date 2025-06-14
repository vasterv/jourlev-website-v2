import { Clock, ArrowLeft } from "lucide-react";

export default function ThinkLikeProductSpeakLikePoet() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg py-16 pb-8">
        <div className="content-container">
          <div className="max-w-4xl mx-auto">
            <a href="/insights" className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Insights
            </a>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>4 min read</span>
                <span>•</span>
                <span>May 28, 2025</span>
              </div>
              <h1 className="font-display text-foreground text-balance">Think Like a Product, Speak Like a Poet</h1>
              <p className="text-muted-foreground text-sm font-medium mb-2">
                By Vanessa Daffron
              </p>
              <p className="text-xl text-muted-foreground font-medium text-balance">
                On holding function and feeling in the same hand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pt-8 pb-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-white space-y-4">
            <p>A product solves a problem.</p>
            <p>A poet names what hurts.</p>
            <p>Both create meaning—just with different tools.</p>
            <p>In today's market, features are table stakes. What people want is resonance. They want to feel seen, soothed, and stirred—even in a checkout flow or onboarding screen. And so the best product minds don't just think in frameworks; they speak in signals. They listen for what's <em>unsaid.</em> They translate tension into clarity. They build with empathy, then edit with intention.</p>
            <p>To think like a product is to understand the mechanics of need: What problem are we solving? Who are we solving it for? How do we know when we've succeeded?</p>
            <p>But to speak like a poet is to understand the music of that need: What does this problem <em>feel</em> like? What words would someone use when they're alone, frustrated, trying to explain what they can't quite name?</p>
            <p>The gap between thinking and speaking—between function and feeling—is where magic happens. It's where a simple notification becomes a gentle nudge. Where an error message becomes a moment of understanding. Where a feature becomes a bridge.</p>
            <p>At JOURLEV, we believe the best products are built in this space. Where strategy meets story. Where data meets intuition. Where the head and heart work in partnership, not opposition.</p>
            <p>Because ultimately, people don't just want products that work. They want products that <em>get</em> them. Products that speak their language—not just the language of the interface, but the language of their actual lived experience.</p>
            <p>Think like a product. Speak like a poet. Hold both truths in the same hand.</p>
            <p>That's where breakthrough lives.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Ready to Build Products That Resonate?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Let's explore how empathy-driven strategy can transform your product experience.
          </p>
          <a href="/contact" className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}