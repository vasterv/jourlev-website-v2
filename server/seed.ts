import { db } from "./db";
import { pages, posts, tastemakerArticles } from "@shared/schema";

async function seedDatabase() {
  console.log("Seeding database with initial content...");

  // Seed initial pages
  const initialPages = [
    {
      slug: "home",
      title: "Home - JOURLEV",
      content: JSON.stringify({
        hero: {
          headline: "Empathy-Driven Product Strategy",
          subheadline: "We help companies build products that truly resonate with their customers through human-centered design and strategic thinking.",
          ctaText: "Start Your Journey"
        },
        humanAi: {
          headline: "Human-AI Collaboration",
          description: "Our unique approach combines human empathy with AI insights to create product strategies that work."
        },
        services: {
          headline: "Our Services",
          description: "Comprehensive product strategy consulting from ideation to execution."
        }
      }),
      metaDescription: "JOURLEV - Empathy-driven product strategy consultancy helping companies build human-centered products."
    },
    {
      slug: "about",
      title: "About - JOURLEV",
      content: JSON.stringify({
        hero: {
          headline: "About JOURLEV",
          description: "We believe in the power of empathy-driven strategy."
        },
        story: {
          content: "JOURLEV was founded on the belief that the best products come from understanding people, not just markets. We combine strategic thinking with genuine empathy to help companies create meaningful connections with their customers."
        },
        mission: {
          content: "To transform how companies approach product strategy by putting human understanding at the center of every decision."
        },
        values: {
          items: [
            {
              title: "Empathy First",
              description: "We believe understanding people is the foundation of great products."
            },
            {
              title: "Strategic Thinking",
              description: "We combine emotional intelligence with rigorous strategic analysis."
            },
            {
              title: "Human-AI Collaboration",
              description: "We use AI to amplify human creativity, not replace it."
            }
          ]
        }
      }),
      metaDescription: "Learn about JOURLEV's mission to transform product strategy through empathy-driven consulting."
    }
  ];

  for (const page of initialPages) {
    try {
      await db.insert(pages).values(page).onConflictDoNothing();
      console.log(`Seeded page: ${page.slug}`);
    } catch (error) {
      console.log(`Page ${page.slug} already exists, skipping...`);
    }
  }

  // Seed initial blog posts
  const initialPosts = [
    {
      title: "The Future of Human-AI Collaboration in Product Strategy",
      slug: "future-human-ai-collaboration",
      content: `The landscape of product strategy is evolving rapidly, and the most successful companies are those that understand how to blend human insight with artificial intelligence capabilities.

## Why Empathy Matters More Than Ever

In an age of increasing automation, the human element becomes more valuable, not less. Companies that prioritize understanding their customers' emotional needs alongside their functional requirements are building products that truly resonate.

## The JOURLEV Approach

At JOURLEV, we've developed a methodology that:

- Combines qualitative human insights with quantitative AI analysis
- Prioritizes emotional intelligence in strategic decision-making
- Creates sustainable competitive advantages through authentic customer connection

## Looking Forward

The future belongs to companies that can successfully integrate human creativity with AI efficiency. This isn't about replacing human strategists—it's about amplifying their capabilities.

Ready to explore how this approach can transform your product strategy? Let's start a conversation.`,
      excerpt: "Discover how combining human empathy with AI capabilities is transforming product strategy for forward-thinking companies.",
      metaDescription: "Learn about the future of human-AI collaboration in product strategy and how empathy-driven approaches create competitive advantages.",
      isPublished: true,
      publishedAt: new Date("2024-12-01"),
    },
    {
      title: "Building Products That Actually Matter to People",
      slug: "building-products-that-matter",
      content: `Too many products fail not because of technical limitations, but because they solve problems that don't actually matter to their intended users.

## The Empathy Gap

Most product teams suffer from what we call the "empathy gap"—the disconnect between what companies think customers want and what customers actually need.

## Bridging the Gap

Successful product strategy requires:

1. **Deep customer understanding** beyond demographics and usage data
2. **Emotional intelligence** in feature prioritization
3. **Strategic patience** to build authentic connections

## Case Study: Rethinking User Research

Traditional user research often focuses on what people say they want. Empathy-driven research reveals what people actually need, even when they can't articulate it themselves.

## The Bottom Line

Products that matter to people are built by teams that genuinely understand and care about those people. It's that simple—and that challenging.`,
      excerpt: "Why empathy-driven product development creates stronger market connections and more sustainable business outcomes.",
      metaDescription: "Learn how empathy-driven product development creates products that truly matter to customers and drive business success.",
      isPublished: true,
      publishedAt: new Date("2024-11-15"),
    }
  ];

  for (const post of initialPosts) {
    try {
      await db.insert(posts).values(post).onConflictDoNothing();
      console.log(`Seeded post: ${post.slug}`);
    } catch (error) {
      console.log(`Post ${post.slug} already exists, skipping...`);
    }
  }

  console.log("Database seeding completed!");
}

// Run seeding if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  seedDatabase().then(() => {
    console.log("Seeding finished.");
    process.exit(0);
  }).catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });
}

export { seedDatabase };