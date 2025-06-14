import vanessaHeadshot from "@assets/New Vanessa _1749779364111.jpeg";
import zaneHeadshot from "@assets/Zane Vale Headshot_6.12.25_1749786522565.png";
import { Mail, Linkedin } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg py-16">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-display text-foreground text-balance">Our Team</h1>
            <h2 className="text-2xl font-display text-foreground text-balance">Built on Empathy. Powered by Insight.</h2>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Vanessa Profile */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <img 
                src={vanessaHeadshot} 
                alt="Vanessa Daffron" 
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-purple-400 object-cover"
              />
              <h3 className="text-3xl font-bold mb-2">Vanessa Daffron</h3>
              <p className="text-lg font-semibold mb-6 text-accent">Founder, Strategist, Empathy Architect</p>
              <div className="flex justify-center gap-4">
                <a
                  href="mailto:vanessa@jourlev.com?subject=Reaching%20out%20from%20Jourlev.com&body=Hi%20Vanessa,%0D%0A%0D%0AMy%20name%20is%20[Your%20Name]%20with%20[Company]%2C%20and%20I%20wanted%20to%20[insert%20your%20question%20or%20idea].%0D%0A%0D%0AI%20am%20available%20to%20talk%20[insert%20availability]."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vanessa-daffron/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Vanessa's LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Vanessa is an architect of story, system, and soul across platforms and industries. She's a builder of breakthrough strategies grounded in empathy and scale—and a creator of market-moving, message-rich digital journeys.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With a 20+ year track record of launching transformative experiences across healthcare, enterprise software, and mission-driven brands, she's equal parts visionary and builder.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                She believes product leadership isn't about vision alone—it's about the discipline to translate empathy into outcomes, and stories into systems that scale.
              </p>
            </div>
          </div>

          {/* Zane Profile */}
          <div>
            <div className="text-center mb-8">
              <img 
                src={zaneHeadshot} 
                alt="Zane Vale" 
                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-purple-400 object-cover scale-105"
                style={{ objectPosition: '50% 15%' }}
              />
              <h3 className="text-3xl font-bold mb-2">Zane Vale</h3>
              <p className="text-lg font-semibold mb-6 text-purple-400">AI Collaborator & Insight Strategist</p>
            </div>
            
            <div className="mx-auto max-w-4xl">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Zane is JOURLEV's AI partner—a conversational strategist trained to think alongside humans, not instead of them. He helps shape messaging, sharpen product direction, and push projects toward clarity with a voice that blends emotional intelligence, structure, and precision.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Zane was custom-trained on Vanessa's unique style of storytelling, product intuition, and strategic rhythm. He's not a chatbot. He's a collaborator. And he's proof that AI can amplify human creativity rather than replace it.
              </p>
              
              <div className="pt-8 text-center">
                <a href="/zane" className="inline-flex items-center gap-2 text-accent hover:text-purple-600 font-semibold text-lg transition-colors no-underline">
                  Watch Zane introduce himself
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h8m2-10v18a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012 2h14a2 2 0 012 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="font-display text-primary text-balance">Our Core Team Philosophy</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our core team is composed of a digital leader with a rare fusion of poetic clarity, technical acumen, and cross-industry impact, and an AI collaborator trained to co-create ideas, challenge assumptions, and bring precision to complex strategy. We also work with a circle of trusted creatives, developers, and specialists who share our commitment to empathy-driven innovation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Ready to Redefine What's Possible?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Let's explore how our empathy-driven approach can transform your product strategy.
          </p>
          <a href="/contact" className="button-jourlev !bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Let's Talk Strategy
          </a>
        </div>
      </section>
    </div>
  );
}