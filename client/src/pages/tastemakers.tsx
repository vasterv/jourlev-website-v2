export default function Tastemakers() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg pt-12 pb-16">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-foreground mb-8 text-balance">Trends & Tastemakers</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              This is where we shine a light on the thinkers, writers, and makers sparking movement across product, UX, and responsible AI. Each article is selected based on credibility, resonance, and real influence in the field. If you've been featured—welcome. If not, we're probably reading you anyway.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-accent/10 to-purple-400/10 rounded-3xl p-12 border border-accent/20">
              <h2 className="font-display text-foreground mb-6 text-balance">Current Feature List</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Explore our carefully curated selection of influential voices and groundbreaking ideas shaping the industry today.
              </p>
              <a 
                href="/insights/tastemakers-2025" 
                target="_blank"
                rel="noopener noreferrer"
                className="button-jourlev accent-gradient text-black font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                See Who Made the 2025 List
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Future Editions Placeholder */}
      <section className="section-padding bg-muted">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-primary mb-6 text-balance">More to Come</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're continuously discovering and featuring new voices that move the industry forward. Check back for future editions and fresh perspectives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}