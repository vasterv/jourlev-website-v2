import React from "react";
import { ExternalLink } from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { TastemakerArticle } from "@shared/schema";

export default function Tastemakers2025() {
  const queryClient = useQueryClient();
  
  React.useEffect(() => {
    // Clear cache and refetch
    queryClient.removeQueries({ queryKey: ["/api/tastemaker-articles"] });
  }, [queryClient]);

  const { data: articles = [], isLoading } = useQuery<TastemakerArticle[]>({
    queryKey: ["/api/tastemaker-articles"],
    staleTime: 0,
    gcTime: 0,
  });

  const tastemakers2025 = articles.filter(article => article.year === 2025);
  
  // Debug: Log the actual data being received
  React.useEffect(() => {
    if (tastemakers2025.length > 0) {
      console.log("Article data:", tastemakers2025[0]);
      console.log("First article URL:", tastemakers2025[0].url);
    }
  }, [tastemakers2025]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="content-container py-16">
          <div className="text-center">
            <p className="text-muted-foreground">Loading articles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="gradient-bg pt-12 pb-16">
        <div className="content-container">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display text-foreground mb-8 text-balance">Tastemakers: June 2025 Shortlist</h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-balance">
              Seven essential reads that are shaping how we think about product strategy, user experience, and responsible AI. Each piece offers fresh perspective on building technology that truly serves people.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding">
        <div className="content-container">
          <div className="grid gap-8 md:gap-12">
            {tastemakers2025.map((article, index) => (
              <article key={index} className="group">
                <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-8 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h2 className="font-display text-2xl text-foreground mb-4 group-hover:text-accent transition-colors duration-300 text-balance">
                        {article.title}
                      </h2>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="font-medium">{article.source}</span>
                        <span>•</span>
                        <span>{article.published}</span>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {article.summary}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-md hover:scale-105"
                      >
                        Read the article
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding accent-gradient text-white">
        <div className="content-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-white mb-6 text-balance">Ready to Shape the Future?</h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8 text-balance">
              Let's discuss how these insights can transform your product strategy.
            </p>
            <a 
              href="/contact"
              className="button-jourlev bg-white text-accent font-semibold text-lg hover:shadow-xl"
            >
              Start the conversation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}