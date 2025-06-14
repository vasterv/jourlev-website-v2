import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import type { Post } from "@shared/schema";

export default function BlogPost() {
  const { slug } = useParams();
  
  const { data: post, isLoading, error } = useQuery<Post>({
    queryKey: ["/api/posts", slug],
    queryFn: async () => {
      const response = await fetch(`/api/posts/${slug}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="content-container py-24">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-muted rounded w-1/2 mb-8"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <div className="content-container py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Link href="/insights" className="inline-flex items-center gap-2 text-accent hover:text-green-300 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Insights
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <article className="content-container py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Link href="/insights" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
              <span>•</span>
              <span>{new Date(post.createdAt || 0).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
            
            <h1 className="font-display text-primary text-4xl lg:text-5xl mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              By JOURLEV Team
            </p>

            {post.excerpt && (
              <div className="mt-8 p-6 bg-muted/50 rounded-lg border-l-4 border-accent">
                <p className="text-lg text-muted-foreground leading-relaxed italic">
                  {post.excerpt}
                </p>
              </div>
            )}
          </header>

          {/* Article content */}
          <div className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-accent prose-a:no-underline hover:prose-a:text-green-300 prose-strong:text-primary prose-blockquote:border-l-accent prose-blockquote:bg-muted/30 prose-blockquote:italic">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />').replace(/## /g, '<h2>').replace(/### /g, '<h3>') }} />
          </div>

          {/* Call to action */}
          <div className="mt-16 pt-8 border-t border-muted">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold text-primary">Ready to Transform Your Product Strategy?</h3>
              <p className="text-muted-foreground">
                Let's explore how empathy-driven insights can reshape your customer experience.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-accent text-black px-6 py-3 rounded-lg hover:bg-green-300 transition-colors font-medium">
                Start the Conversation
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}