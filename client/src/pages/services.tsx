import { Compass, Bot, PenTool, Telescope, Network, Search } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Empathy-Driven Product Strategy",
      description: "We partner with you to turn user emotion and behavior into actionable strategy—grounding every decision in clarity and care.",
      icon: Compass,
      iconBg: "bg-pink-500",
      floatingBg: "bg-pink-500",
    },
    {
      title: "AI-Centered Customer Experience Design",
      description: "We bring a human-centered approach to AI tools and experiences, helping you build with nuance, intelligence, and trust. Our AI collaborator Zane works directly with clients to enhance strategic thinking.",
      icon: Bot,
      iconBg: "bg-purple-500",
      floatingBg: "bg-purple-500",
    },
    {
      title: "UX Copy & Digital Product Storytelling",
      description: "From onboarding flows to error messages to mission statements—we write with empathy, rhythm, and a voice that reflects your purpose.",
      icon: PenTool,
      iconBg: "bg-orange-500",
      floatingBg: "bg-orange-500",
    },
    {
      title: "Brand & Positioning Discovery",
      description: "Whether you're naming a product, evolving your message, or defining a voice—we help you find the story that fits the soul of your offering.",
      icon: Telescope,
      iconBg: "bg-green-500",
      floatingBg: "bg-green-500",
    },
    {
      title: "Content Architecture & Messaging Hierarchy",
      description: "We help you structure and prioritize your message across pages, platforms, and teams—so the right words reach the right people at the right time.",
      icon: Network,
      iconBg: "bg-blue-500",
      floatingBg: "bg-blue-500",
    },
    {
      title: "Strategic Research, Insights, and Visioning",
      description: "We dig deep into your audiences, competitors, and goals—turning research into resonance, and insights into direction.",
      icon: Search,
      iconBg: "bg-violet-500",
      floatingBg: "bg-violet-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg py-12">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h1 className="font-display text-primary text-balance">Our Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At JOURLEV, our services are designed to help brands and product teams go deeper—with empathy, clarity, and strategic structure. We don't believe in bloated scope. We believe in sharp solutions that connect human truth with measurable outcomes.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Grid - Beautiful colorful cards */}
      <section className="py-12 bg-muted">
        <div className="content-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="card-jourlev relative overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className={`absolute top-0 right-0 w-24 h-24 ${service.floatingBg} opacity-10 rounded-full -translate-y-4 translate-x-4 group-hover:scale-150 transition-transform duration-500`}></div>
                  <div className="relative space-y-6">
                    <div className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-display text-primary text-xl text-balance group-hover:text-accent transition-colors duration-300">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Ready to Transform Your Product Strategy?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            Let's explore how empathy-driven strategy can unlock growth for your organization.
          </p>
          <a href="/contact" className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Start the Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
