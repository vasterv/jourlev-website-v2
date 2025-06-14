import { Clock, ArrowLeft } from "lucide-react";

export default function QuietMetricsCustomerJourney() {
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
                <span>5 min read</span>
                <span>•</span>
                <span>May 28, 2025</span>
              </div>
              <h1 className="font-display text-foreground text-balance">The Quiet Metrics: What a Customer Journey Wants to Tell You—But Can't</h1>
              <p className="text-muted-foreground text-sm font-medium mb-2">
                By Vanessa Daffron with Zane Vale
              </p>
              <p className="text-xl text-muted-foreground font-medium text-balance">
                Reading What the Dashboard Doesn't Say
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pt-8 pb-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-white space-y-4">
            <p>Some truths whisper. Some metrics can't be measured—not yet. They flicker in user hesitation, in the pause before a click, in the path someone <em>almost</em> takes. They live in the exit survey no one fills out. In the feedback that never arrives.</p>
            <p>And yet—they matter. Deeply.</p>
            <p>The customer journey is not just a series of tracked events. It's a lived experience. It remembers the moment someone felt guided… or left behind. It knows when a hand was held or a need was missed.</p>
            <p>At JOURLEV, we call these the <em>quiet metrics</em>—the signals that live between the lines of your analytics dashboard. They're harder to capture, but they tell the truest story of how your customers actually experience your product.</p>

            <h2>What Your Dashboard Shows</h2>
            <p>Conversion rates. Click-through rates. Time on page. Bounce rates.</p>
            <p>These are the loud metrics. They're important, yes. They give you the outline of what happened. But they don't tell you <em>why</em> it happened. Or how it <em>felt</em> to happen.</p>

            <h2>What Your Dashboard Doesn't Show</h2>
            <p>The moment someone hesitated before clicking "Buy Now" because they couldn't find the return policy.</p>
            <p>The user who abandoned their cart not because of price, but because the checkout felt impersonal and rushed.</p>
            <p>The customer who called support not because something was broken, but because they felt lost and needed reassurance.</p>
            <p>The person who almost left a review but didn't know where to start.</p>

            <h2>Reading the Quiet Signals</h2>
            <p>So how do you listen to what can't be measured? How do you read the signals that don't show up in your standard reports?</p>
            <p>It starts with changing what you're looking for. Instead of just tracking behavior, you track the <em>quality</em> of behavior. Instead of just measuring outcomes, you measure the <em>experience</em> of getting there.</p>

            <h3>Hesitation Patterns</h3>
            <p>Where do people pause? What pages do they revisit? These patterns often reveal friction points that traditional metrics miss.</p>

            <h3>Support Interactions</h3>
            <p>What questions do people ask? What tone do they use? Support conversations are treasure troves of quiet insights about where your journey feels unclear or overwhelming.</p>

            <h3>Near-Misses</h3>
            <p>Who almost converted but didn't? What stopped them? Sometimes the people who <em>don't</em> complete your journey have the most valuable feedback about why.</p>

            <h2>Making Space for the Whispers</h2>
            <p>The quiet metrics require a different kind of attention. They ask you to slow down, look closer, listen deeper. They demand empathy as much as analysis.</p>
            <p>Because at the end of the day, your customer journey isn't just a funnel to optimize. It's a conversation to have. And the best conversations happen when you listen not just to what's being said, but to what's being <em>felt</em>.</p>
            <p>That's where the real insights live. In the spaces between the clicks. In the moments that matter most.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Want to Uncover Your Quiet Metrics?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Let's explore what your customer journey is trying to tell you.
          </p>
          <a href="/contact" className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}