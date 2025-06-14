import { Target, Zap, Cpu } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Human-First Strategy",
      description: "We start with people—not personas. Strategy must serve the real, the felt, and the lived experience."
    },
    {
      icon: Zap,
      title: "Empathy with Teeth",
      description: "Our empathy isn't soft. It sharpens clarity, uncovers friction, and brings customer truths into focus."
    },
    {
      icon: Cpu,
      title: "Intelligence in Tandem",
      description: "AI doesn't replace our thinking—it augments it. We design in partnership with what's possible."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-display text-primary mb-8 leading-snug text-balance">
              You Know Something Has to Change.<br />
              So Do We.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We work with AI to help teams solve real human problems—faster, smarter, and with&nbsp;sharper&nbsp;focus.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-primary mb-6 text-balance">What We Believe</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-jourlev">
                  <Icon className="h-12 w-12 text-accent mb-6" />
                  <h3 className="font-display text-primary mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Humans Drive Our Purpose */}
      <section className="section-padding">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-primary mb-8 text-balance">Humans Drive Our Purpose</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At JOURLEV, every insight begins with a person. Not a persona, not a segment—an actual human with desires, limitations, hopes, and signals. We shape products and journeys with this truth at the center. Whether we're supporting a founder's vision, helping teams deliver more thoughtful experiences, or making sure AI shows up in service of empathy, we return to the same source: people. They are not just the end users. They are the reason we exist.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-muted">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-primary mb-8 text-balance">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To help brands harness empathy and AI together—to build braver strategies, more human products, and experiences that resonate with clarity and care.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe in insight with integrity. In tools that serve people. And in partnering with bold teams ready to reshape the world with meaning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-muted via-card to-muted border-t border-accent/20">
        <div className="content-container text-center max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-accent/10 to-purple-400/10 rounded-3xl p-12 border border-accent/20">
            <h2 className="font-display text-foreground mb-6 leading-snug">
              <span className="whitespace-nowrap">Let's Build a New Kind of Strategy.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We're here to help you unlock what your customers feel, what your message means, and how AI can amplify both.
            </p>
            <a href="/contact" className="button-jourlev accent-gradient text-black font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
              Let's Begin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
