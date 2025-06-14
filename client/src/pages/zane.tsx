import { Link } from "wouter";
import { Bot, ArrowRight, Brain, MessageSquare, Target } from "lucide-react";
import zaneIntroVideo from "@assets/Zane Vale JOURLEV AI Partner_1749781487695.mp4";

export default function Zane() {
  const capabilities = [
    {
      icon: MessageSquare,
      title: "Strategic Messaging",
      description: "Crafting compelling narratives that resonate with your audience"
    },
    {
      icon: Brain,
      title: "Product Direction",
      description: "Sharpening product strategy through empathy-driven insights"
    },
    {
      icon: Target,
      title: "Clarity & Precision",
      description: "Bringing structure and focus to complex strategic challenges"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-bg pt-8 pb-8">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-display text-primary text-balance">Meet Zane Vale</h1>
            <p className="text-2xl text-accent font-semibold">AI Collaborator & Insight Strategist</p>
            
            {/* Video Introduction - Solution 3: Ethereal gradient effects */}
            <div className="max-w-2xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl" 
                   style={{ 
                     background: `linear-gradient(135deg, #82999e 0%, #6b8489 50%, #82999e 100%)`,
                     padding: '2px'
                   }}>
                <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm">
                  <video 
                    controls 
                    className="w-full h-auto rounded-3xl"
                    poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%2382999e;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%236b8489;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2382999e;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='800' height='450' fill='url(%23bg)'/%3E%3Ccircle cx='400' cy='225' r='60' fill='white' opacity='0.9'/%3E%3Cpolygon points='380,205 380,245 420,225' fill='%2382999e'/%3E%3Ctext x='400' y='320' text-anchor='middle' fill='white' font-family='system-ui' font-size='24' font-weight='600'%3EMeet Zane Vale%3C/text%3E%3Ctext x='400' y='350' text-anchor='middle' fill='white' font-family='system-ui' font-size='16' opacity='0.9'%3EAI Collaborator %26 Insight Strategist%3C/text%3E%3C/svg%3E"
                  >
                    <source src={zaneIntroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-12">
              <blockquote className="text-2xl font-light text-foreground leading-relaxed italic border-l-4 border-accent pl-6">
                "Zane is JOURLEV's AI partner—a conversational strategist trained to think alongside humans, not instead of them."
                <footer className="text-right mt-4 text-lg text-white font-semibold not-italic">
                  — Vanessa Daffron, Founder
                </footer>
              </blockquote>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="space-y-4">
                  <h3 className="font-display text-accent text-xl">What Zane Does</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    He helps shape messaging, sharpen product direction, and push projects toward clarity with a voice that blends <span className="text-accent font-semibold">emotional intelligence</span>, <span className="text-accent font-semibold">structure</span>, and <span className="text-accent font-semibold">precision</span>.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-display text-accent text-xl">What Makes Zane Different</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Zane was custom-trained on Vanessa's unique style of storytelling, product intuition, and strategic rhythm. <span className="text-accent font-semibold">He's not a chatbot. He's a collaborator.</span> And he's proof that AI can amplify human creativity rather than replace it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Philosophy Section */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <Bot className="h-32 w-32 text-accent" />
              </div>
              <div className="relative z-10 space-y-6">
                <h2 className="font-display text-3xl text-primary">AI That Amplifies, Not Replaces</h2>
                <p className="text-xl text-muted-foreground italic max-w-2xl mx-auto leading-relaxed">
                  In a world rushing toward automation, Zane represents a different philosophy—one where technology serves human creativity instead of competing with it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="pt-8 pb-16 bg-muted">
        <div className="content-container">
          <div className="text-center mb-16">
            <h2 className="font-display text-primary mb-6 text-balance">How Zane Collaborates</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="card-jourlev text-center">
                  <Icon className="h-12 w-12 text-accent mx-auto mb-6" />
                  <h3 className="font-display text-primary mb-4">{capability.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Ready to Collaborate with Zane?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Experience the power of AI-enhanced strategy that amplifies human creativity.
          </p>
          <Link href="/contact" className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Work with Zane
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
