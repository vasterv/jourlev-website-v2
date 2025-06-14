import { Clock, ExternalLink, ChevronRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Post } from "@shared/schema";

export default function Insights() {
  // Fetch blog posts from database
  const { data: blogPosts = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  // Filter only published posts and sort by date
  const publishedPosts = blogPosts
    .filter(post => post.isPublished)
    .sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime());

  // Voices That Move Us
  const voicesThatMoveUs = [
    {
      title: "Sam Altman and Jony Ive Will Force A.I. Into Your Life",
      summary: "Explores the collaboration between OpenAI's CEO and Apple's former design chief to create a revolutionary AI device, raising questions about technology's role in daily life.",
      publication: "The New Yorker",
      date: "May 29, 2025",
      url: "#",
    },
    {
      title: "Ross Lovegrove on Working with AI: 'The Potential is, I Think, Utopian'",
      summary: "Industrial designer Ross Lovegrove discusses integrating AI into his creative process, emphasizing its potential to complement human creativity.",
      publication: "Wallpaper",
      date: "May 25, 2025",
      url: "#",
    },
    {
      title: "Former OpenAI VP Says Human Taste Will Become the 'Real Differentiator'",
      summary: "Krithika Shankarraman, former VP of Marketing at OpenAI, emphasizes the growing importance of human insight and creativity in an AI-driven business landscape.",
      publication: "Business Insider",
      date: "May 27, 2025",
      url: "#",
    },
    {
      title: "A Block Product Designer Spent 2 Months Vibe Coding a Dog ID App",
      summary: "Cynthia Chen shares her experience developing an AI-powered app, highlighting the balance between AI assistance and human creativity.",
      publication: "Business Insider",
      date: "May 27, 2025",
      url: "#",
    },
    {
      title: "When AI Became My Creative Partner: Building a Brand, Not Just a Product",
      summary: "Abdul Ahad recounts using AI to build a brand with personality and emotional connection, illustrating AI's role in creative endeavors.",
      publication: "Medium",
      date: "April 2025",
      url: "#",
    },
    {
      title: "AI and Brand Voice: Your Secret to Quality Scalable Content",
      summary: "Discusses aligning AI tools with unique brand voices to produce high-quality, on-brand content at scale without sacrificing authenticity.",
      publication: "Social Media Examiner",
      date: "May 20, 2025",
      url: "#",
    },
    {
      title: "Your Favorite Brands Might Be Talking To You In AI And You'd Never Know",
      summary: "Explores how brands are increasingly using generative AI for content creation, raising questions about authenticity and human touch.",
      publication: "AIM Research",
      date: "April 17, 2025",
      url: "#",
    },
    {
      title: "Welcome, New Brand Colleague! A Conceptual Framework for Efficient and Effective Human–AI Co-Creation for Creative Brand Voice",
      summary: "Presents a framework for human–AI collaboration in developing creative brand voices, emphasizing efficiency and effectiveness.",
      publication: "Journal of Brand Management",
      date: "May 14, 2025",
      url: "#",
    },
    {
      title: "Brand Persona, Brand Messaging, Brand Voice: Winning AI Search",
      summary: "Joanne Z. Tan discusses building unique brand personas and voices to stand out in AI-driven search environments.",
      publication: "10 Plus Brand",
      date: "March 14, 2025",
      url: "#",
    },
    {
      title: "AI Can't Fix a Bad Idea: Why Creativity Still Matters in 2025",
      summary: "This article emphasizes that while AI can enhance and streamline creative processes, it can't substitute the foundational human element of originality and emotional connection.",
      publication: "Forbes",
      date: "April 11, 2025",
      url: "#",
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg pt-12 pb-16">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-foreground mb-8 text-balance">Insights</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-6 text-balance">
              Where JOURLEV shares what we're seeing, sensing, and shaping. A curated space for ideas and inspirations shaping human-first, AI-amplified products and empathetic strategy.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Our own reflections, bold voices from today's product builders, and the movements remaking the human experience.
            </p>
          </div>
        </div>
      </section>

      {/* JOURLEV's Blog Section */}
      <section className="py-16 bg-background">
        <div className="content-container">
          <div className="mb-16">
            <h2 className="font-display text-primary mb-6 text-balance">From the JOURLEV Mindstream: Our Blog</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Reflections on empathy-driven strategy, human-centered design, and product experiences that connect.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {isLoading ? (
              <div className="md:col-span-2 text-center py-12">
                <p className="text-muted-foreground">Loading insights...</p>
              </div>
            ) : publishedPosts.length === 0 ? (
              <div className="md:col-span-2 text-center py-12">
                <p className="text-muted-foreground">No blog posts available.</p>
              </div>
            ) : (
              publishedPosts.map((post, index) => (
                <article key={post.id} className={`card-jourlev group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'md:col-span-2' : ''}`}>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>5 min read</span>
                        <span>•</span>
                        <span>{new Date(post.createdAt || 0).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      <h3 className="font-display text-primary text-xl group-hover:text-accent transition-colors duration-300">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        By JOURLEV Team
                      </p>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {post.excerpt}
                    </p>
                    <a href={`/insights/${post.slug}`} className="flex items-center text-accent font-medium group-hover:gap-2 transition-all duration-300">
                      <span>Read full post</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Voices That Move Us Section */}
      <section className="section-padding bg-muted">
        <div className="content-container">
          <div className="mb-16">
            <h2 className="font-display text-primary mb-6 text-balance">Voices That Move Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Ideas are energy—and these are the ones sparking something deeper. From product provocateurs to AI philosophers, these thinkers challenge the norm, reframe the familiar, and remind us why we do what we do. We read them, follow them, and listen closely—because movement starts in the mind.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {voicesThatMoveUs.map((voice, index) => (
              <a 
                key={index}
                href={voice.url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-jourlev group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="font-display text-primary text-lg group-hover:text-accent transition-colors duration-300 leading-tight">
                      {voice.title}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors duration-300 flex-shrink-0 ml-2" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{voice.publication}</span>
                    <span>•</span>
                    <span>{voice.date}</span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {voice.summary}
                  </p>
                  <div className="flex items-center text-accent font-medium group-hover:gap-2 transition-all duration-300">
                    <span>Read the article</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Trends & Tastemakers Section - COMMENTED OUT FOR RECURATION */}
      {/* <section className="section-padding bg-background">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-primary mb-6 text-balance">Trends & Tastemakers</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Some move fast. Others shape the movement.<br />
              We study the people doing both—because they reveal where the story's going next.
            </p>
            <a 
              href="/insights/tastemakers-2025" 
              target="_blank"
              rel="noopener noreferrer"
              className="button-jourlev accent-gradient text-black font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Explore the 2025 List
            </a>
          </div>
        </div>
      </section> */}

      {/* Newsletter CTA */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container text-center max-w-3xl mx-auto">
          <h2 className="font-display text-white mb-6 text-balance">Have a Topic You'd Like Us to Explore?</h2>
          <p className="text-xl opacity-90 mb-12 leading-relaxed">
            We're always interested in diving deeper into the questions that matter to product leaders and strategists.
          </p>
          <a href="/contact" className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}