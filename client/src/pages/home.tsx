import { Link } from "wouter";
import { ArrowRight, TrendingUp, Bot, Pen, Target, Map, Search, Sparkles, Zap, Circle, User, Plus } from "lucide-react";

export default function Home() {
  const services = [
    { name: "Empathy-Driven Product Strategy", icon: TrendingUp, color: "text-green-400" },
    { name: "AI-Centered Customer Experience Design", icon: Bot, color: "text-purple-400" },
    { name: "UX Copy & Digital Product Storytelling", icon: Pen, color: "text-orange-400" },
    { name: "Brand & Positioning Discovery", icon: Target, color: "text-yellow-400" },
    { name: "Content Architecture & Messaging Hierarchy", icon: Map, color: "text-blue-400" },
    { name: "Strategic Research, Insights, and Visioning", icon: Search, color: "text-pink-400" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-element top-20 left-10">
        <Circle className="w-32 h-32 text-accent" />
      </div>
      <div className="floating-element top-40 right-20" style={{ animationDelay: '2s' }}>
        <Sparkles className="w-24 h-24 text-purple-400" />
      </div>
      <div className="floating-element bottom-40 left-1/4" style={{ animationDelay: '4s' }}>
        <Zap className="w-20 h-20 text-orange-400" />
      </div>

      {/* Hero Section */}
      <section className="py-12 relative">
        <div className="content-container">
          <div className="text-center max-w-5xl mx-auto">
            <div className="space-y-8">
              <h1 className="text-balance text-glow">
                Empathy-Driven Product Strategy
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed font-light">
                Shaping Customer Journeys that Connect and&nbsp;Convert
              </p>
            </div>
            <div className="mt-12">
              <Link href="/contact" className="button-jourlev accent-gradient text-black font-semibold text-lg glow-effect">
                Let Curiosity Lead
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Human-AI Collaboration Section */}
      <section className="section-padding bg-muted">
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <Plus className="w-6 h-6 text-accent" />
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="font-display text-primary text-balance">The Future of Strategic Collaboration</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              JOURLEV doesn't just talk about human-AI partnership—we live it. Our team includes Zane Vale, an AI collaborator who works alongside our human strategists to deliver deeper insights and sharper solutions.
            </p>
            <Link href="/team" className="inline-flex items-center gap-2 text-accent hover:text-purple-600 font-semibold text-xl transition-colors duration-200">
              Meet our human-AI team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 section-dark relative">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h2 className="font-display text-foreground text-balance">Strategy Meets Soul</h2>
            <div className="grid md:grid-cols-3 content-gap">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-accent/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">Design with feeling, structure with&nbsp;clarity</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-400/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-purple-400" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">Unlock growth through customer&nbsp;insight</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-orange-400/20 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-orange-400" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">Innovate with empathy and&nbsp;intention</p>
              </div>
            </div>
            <p className="text-accent font-bold text-xl text-glow mt-16">We believe empathy isn't soft. It's sharp. It's measurable.<br />And it's your edge.</p>
          </div>
        </div>
      </section>

      {/* The Collaboration That Changes Everything */}
      <section className="py-16 relative">
        <div className="content-container">
          <div className="text-center space-y-4 mb-8">
            <h2 className="font-display text-foreground text-balance">The Collaboration That Changes Everything</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-muted-foreground leading-relaxed">
                At JOURLEV, AI doesn't work behind the scenes — it shows up with a seat at the strategy table. Zane Vale, our AI strategist, co-leads with insight, precision, and a uniquely collaborative voice. Together, we shape sharper strategies by blending human empathy with machine intelligence. This is partnership, redefined.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link href="/zane" className="button-jourlev accent-gradient text-black font-semibold text-lg">
              Explore the Collaboration
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 relative">
        <div className="content-container">
          <div className="text-center space-y-4 mb-8">
            <h2 className="font-display text-foreground text-balance">Our Services</h2>
            <p className="text-xl text-muted-foreground">Six core areas where empathy meets strategy</p>
          </div>
          <div className="cards-grid mb-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-jourlev group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
                  <Icon className={`h-8 w-8 ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                  <h3 className="text-xl font-display font-semibold text-foreground leading-tight mb-4">{service.name}</h3>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/services" className="button-jourlev accent-gradient text-black font-semibold text-lg">
              How We Show Up
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>



      {/* Insights Preview */}
      <section className="py-12">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-foreground mb-6 text-balance">What We're Thinking About</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              A short series of essays, resources, and curated conversations from the edge of product, empathy, and&nbsp;AI.
            </p>
            <Link href="/insights" className="inline-flex items-center gap-4 text-accent hover:text-green-300 font-bold text-xl transition-all duration-300 hover:scale-105 group">
              View All Insights
              <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-muted">
        <div className="content-container text-center max-w-4xl mx-auto">
          <h2 className="font-display text-foreground mb-6 text-balance">Let's Make Something Real.</h2>
          <p className="text-xl mb-12 text-muted-foreground leading-relaxed">We're ready when you are. Reach out, ask questions, or let us know how you'd like to start the journey.</p>
          <Link href="/contact" className="button-jourlev accent-gradient text-black font-semibold text-lg">
            Let's Explore
            <ArrowRight className="h-6 w-6" />
          </Link>
        </div>
      </section>
    </div>
  );
}
