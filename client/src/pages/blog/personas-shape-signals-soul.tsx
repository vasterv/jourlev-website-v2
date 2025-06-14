import { Clock, ArrowLeft } from "lucide-react";

export default function PersonasShapeSignalsSoul() {
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
                <span>7 min read</span>
                <span>•</span>
                <span>May 28, 2025</span>
              </div>
              <h1 className="font-display text-foreground text-balance">Personas Give Shape. Signals Give Soul.</h1>
              <p className="text-muted-foreground text-sm font-medium mb-2">
                By Vanessa Daffron with Zane Vale
              </p>
              <p className="text-xl text-muted-foreground font-medium text-balance">
                Insight lives in the flicker, not the freeze-frame.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pt-8 pb-16 bg-background">
        <div className="content-container">
          <div className="max-w-3xl mx-auto text-white space-y-4">
            <p>Personas give us the outline. But real people—real journeys—are always in motion.</p>
            <p>At JOURLEV, we believe that true insight doesn't freeze someone in place. It notices the shift. The blink. The hesitation before the click. We look for what lives in the moment someone almost abandons a form, but doesn't. In the gesture of scrolling past a headline—and then circling back. In the way someone searches, but never selects. These aren't just artifacts. They're flickers—micro-behaviors that tell a deeper truth than most surveys ever will.</p>
            <p>The freeze-frame gives us a snapshot. The flicker shows us the story that's still unfolding.</p>
            <p>So when we say we listen to signals, we mean we're watching and interpreting this living data: Not just who the user is, but how they're changing in real time.</p>

            <h2>Behavioral Signals</h2>
            <p>These are derived from actual user interactions:</p>
            <ul>
              <li><strong>Hesitation Time:</strong> Prolonged pauses before taking action can indicate confusion or uncertainty.</li>
              <li><strong>Click Patterns:</strong> Rapid, repetitive clicks (often termed "rage clicks") may signal frustration.</li>
              <li><strong>Navigation Loops:</strong> Users revisiting the same pages can suggest they are not finding what they need.</li>
            </ul>
            <p>Tools like heatmaps and session recordings help in capturing these behaviors, allowing for a deeper understanding of user interactions.</p>

            <h2>Emotional Signals</h2>
            <p>Beyond actions, the emotional undertones in user feedback provide valuable insights:</p>
            <ul>
              <li><strong>Support Tickets:</strong> Phrases like "I don't understand…" highlight areas of confusion.</li>
              <li><strong>NPS Comments:</strong> Emotional language in feedback can indicate user satisfaction or dissatisfaction.</li>
            </ul>
            <p>Analyzing these sentiments helps in tailoring experiences that resonate emotionally with users.</p>

            <h2>Contextual Signals</h2>
            <p>Understanding the environment in which users interact with products is crucial:</p>
            <ul>
              <li><strong>Device Type:</strong> User behavior can vary significantly between mobile and desktop platforms.</li>
              <li><strong>Time of Day:</strong> Engagement patterns often shift depending on the time, reflecting users' routines and contexts.</li>
            </ul>
            <p>Recognizing these factors ensures that designs are adaptable and relevant across different user scenarios.</p>

            <h2>From Static to Dynamic Understanding</h2>
            <p>Traditional personas tell us about demographics and preferences. But signals tell us about intent, emotion, and the micro-moments that shape decisions.</p>
            <p>A persona might tell us that "Sarah is a busy marketing manager who values efficiency." But signals show us that Sarah hesitates for 15 seconds before clicking "upgrade" because she's calculating whether her budget can handle it this month. That hesitation is the soul of her experience.</p>

            <h2>Building for the Flicker</h2>
            <p>When we design for signals rather than just personas, we create experiences that respond to people as they actually are in each moment:</p>
            <ul>
              <li>Confused? Offer contextual help.</li>
              <li>Hesitating? Provide reassurance.</li>
              <li>Exploring? Give them space to browse.</li>
              <li>Ready to commit? Clear the path forward.</li>
            </ul>
            <p>By focusing on these signals, we move beyond static personas to a more dynamic, empathetic understanding of our users. This approach allows us to design experiences that are not only functional but also emotionally resonant and contextually appropriate.</p>
            <p>The outline matters. But the soul of your user experience lives in the flicker—in the moments between intention and action, where real human behavior reveals itself.</p>
            <p>That's where breakthrough design begins.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Ready to Design for the Flicker?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Let's explore how signal-driven design can transform your user experience.
          </p>
          <a href="/contact" className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}