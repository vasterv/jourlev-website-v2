import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

// Page content management
export const pages = pgTable("pages", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(), // 'home', 'about', 'services', etc.
  title: text("title").notNull(),
  content: text("content").notNull(),
  metaDescription: text("meta_description"),
});

// Blog posts for Insights section
export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  metaDescription: text("meta_description"),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Contact form submissions
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  company: text("company"),
  message: text("message").notNull(),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

// Tastemakers articles management
export const tastemakerArticles = pgTable("tastemaker_articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  source: text("source").notNull(),
  published: text("published").notNull(),
  summary: text("summary").notNull(),
  url: text("url").notNull(),
  year: integer("year").notNull(),
  featured: boolean("featured").default(true),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertPageSchema = createInsertSchema(pages);
export const insertPostSchema = createInsertSchema(posts);
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  company: true,
  message: true,
});

export const insertTastemakerArticleSchema = createInsertSchema(tastemakerArticles);

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type Page = typeof pages.$inferSelect;
export type Post = typeof posts.$inferSelect;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type TastemakerArticle = typeof tastemakerArticles.$inferSelect;
export type InsertPage = z.infer<typeof insertPageSchema>;
export type InsertPost = z.infer<typeof insertPostSchema>;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type InsertTastemakerArticle = z.infer<typeof insertTastemakerArticleSchema>;
