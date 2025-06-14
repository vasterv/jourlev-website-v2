import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPageSchema, insertPostSchema, insertTastemakerArticleSchema, insertContactSubmissionSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Domain redirect middleware - handle custom domain requests
  app.use((req, res, next) => {
    const host = req.get('host') || '';
    
    // If request comes from custom domain (not Replit deployment URL)
    if (host.includes('jourlev.com') && !host.includes('replit')) {
      // Redirect to working Replit deployment URL
      const redirectUrl = `https://jourlev-mvp-vanessa63.replit.app${req.originalUrl}`;
      return res.redirect(301, redirectUrl);
    }
    
    next();
  });

  // Page management routes
  app.get("/api/pages", async (req, res) => {
    try {
      const pages = await storage.getAllPages();
      res.json(pages);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch pages" });
    }
  });

  app.get("/api/pages/:slug", async (req, res) => {
    try {
      const page = await storage.getPage(req.params.slug);
      if (!page) {
        return res.status(404).json({ error: "Page not found" });
      }
      res.json(page);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch page" });
    }
  });

  app.put("/api/pages/:slug", async (req, res) => {
    try {
      const validatedData = insertPageSchema.partial().parse(req.body);
      const updatedPage = await storage.updatePage(req.params.slug, validatedData);
      res.json(updatedPage);
    } catch (error) {
      res.status(400).json({ error: "Failed to update page" });
    }
  });

  // Blog post management routes
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/published", async (req, res) => {
    try {
      const posts = await storage.getPublishedPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch published posts" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const post = await storage.getPost(req.params.slug);
      if (!post) {
        return res.status(404).json({ error: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    try {
      const validatedData = insertPostSchema.parse(req.body);
      const newPost = await storage.createPost(validatedData);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(400).json({ error: "Failed to create post" });
    }
  });

  app.put("/api/posts/:slug", async (req, res) => {
    try {
      const validatedData = insertPostSchema.partial().parse(req.body);
      const updatedPost = await storage.updatePost(req.params.slug, validatedData);
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ error: "Failed to update post" });
    }
  });

  app.delete("/api/posts/:slug", async (req, res) => {
    try {
      await storage.deletePost(req.params.slug);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete post" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      console.log("Contact form submission saved:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We'll get back to you soon." 
      });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(400).json({ 
        success: false, 
        message: "Invalid form data. Please check all required fields." 
      });
    }
  });

  // Get all contact submissions (admin only)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getAllContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ error: "Failed to fetch contact submissions" });
    }
  });

  // Tastemaker articles management routes
  app.get("/api/tastemaker-articles", async (req, res) => {
    try {
      const year = req.query.year ? parseInt(req.query.year as string) : undefined;
      const articles = year 
        ? await storage.getTastemakerArticlesByYear(year)
        : await storage.getAllTastemakerArticles();
      res.json(articles);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch tastemaker articles" });
    }
  });

  app.post("/api/tastemaker-articles", async (req, res) => {
    try {
      const validatedData = insertTastemakerArticleSchema.parse(req.body);
      const article = await storage.createTastemakerArticle(validatedData);
      res.json(article);
    } catch (error) {
      res.status(400).json({ error: "Failed to create tastemaker article" });
    }
  });

  app.put("/api/tastemaker-articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const validatedData = insertTastemakerArticleSchema.partial().parse(req.body);
      const updatedArticle = await storage.updateTastemakerArticle(id, validatedData);
      res.json(updatedArticle);
    } catch (error) {
      res.status(400).json({ error: "Failed to update tastemaker article" });
    }
  });

  app.delete("/api/tastemaker-articles/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteTastemakerArticle(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete tastemaker article" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
