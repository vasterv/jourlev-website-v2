import { users, pages, posts, contactSubmissions, tastemakerArticles, type User, type InsertUser, type Page, type InsertPage, type Post, type InsertPost, type ContactSubmission, type InsertContactSubmission, type TastemakerArticle, type InsertTastemakerArticle } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Page management
  getPage(slug: string): Promise<Page | undefined>;
  getAllPages(): Promise<Page[]>;
  createPage(page: InsertPage): Promise<Page>;
  updatePage(slug: string, page: Partial<InsertPage>): Promise<Page>;
  
  // Blog post management  
  getPost(slug: string): Promise<Post | undefined>;
  getAllPosts(): Promise<Post[]>;
  getPublishedPosts(): Promise<Post[]>;
  createPost(post: InsertPost): Promise<Post>;
  updatePost(slug: string, post: Partial<InsertPost>): Promise<Post>;
  deletePost(slug: string): Promise<void>;
  
  // Contact submission management
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Tastemaker articles management
  getAllTastemakerArticles(): Promise<TastemakerArticle[]>;
  getTastemakerArticlesByYear(year: number): Promise<TastemakerArticle[]>;
  createTastemakerArticle(article: InsertTastemakerArticle): Promise<TastemakerArticle>;
  updateTastemakerArticle(id: number, article: Partial<InsertTastemakerArticle>): Promise<TastemakerArticle>;
  deleteTastemakerArticle(id: number): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  // Page management
  async getPage(slug: string): Promise<Page | undefined> {
    const [page] = await db.select().from(pages).where(eq(pages.slug, slug));
    return page || undefined;
  }

  async getAllPages(): Promise<Page[]> {
    return await db.select().from(pages);
  }

  async createPage(page: InsertPage): Promise<Page> {
    const [newPage] = await db
      .insert(pages)
      .values(page)
      .returning();
    return newPage;
  }

  async updatePage(slug: string, pageUpdate: Partial<InsertPage>): Promise<Page> {
    const [updatedPage] = await db
      .update(pages)
      .set(pageUpdate)
      .where(eq(pages.slug, slug))
      .returning();
    return updatedPage;
  }

  // Blog post management
  async getPost(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post || undefined;
  }

  async getAllPosts(): Promise<Post[]> {
    return await db.select().from(posts);
  }

  async getPublishedPosts(): Promise<Post[]> {
    return await db.select().from(posts).where(eq(posts.isPublished, true));
  }

  async createPost(post: InsertPost): Promise<Post> {
    const [newPost] = await db
      .insert(posts)
      .values(post)
      .returning();
    return newPost;
  }

  async updatePost(slug: string, postUpdate: Partial<InsertPost>): Promise<Post> {
    const [updatedPost] = await db
      .update(posts)
      .set(postUpdate)
      .where(eq(posts.slug, slug))
      .returning();
    return updatedPost;
  }

  async deletePost(slug: string): Promise<void> {
    await db.delete(posts).where(eq(posts.slug, slug));
  }

  // Contact submission management
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [newSubmission] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return newSubmission;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions);
  }

  // Tastemaker articles management
  async getAllTastemakerArticles(): Promise<TastemakerArticle[]> {
    return await db.select().from(tastemakerArticles);
  }

  async getTastemakerArticlesByYear(year: number): Promise<TastemakerArticle[]> {
    return await db.select().from(tastemakerArticles).where(eq(tastemakerArticles.year, year));
  }

  async createTastemakerArticle(article: InsertTastemakerArticle): Promise<TastemakerArticle> {
    const [newArticle] = await db
      .insert(tastemakerArticles)
      .values(article)
      .returning();
    return newArticle;
  }

  async updateTastemakerArticle(id: number, articleUpdate: Partial<InsertTastemakerArticle>): Promise<TastemakerArticle> {
    const [updatedArticle] = await db
      .update(tastemakerArticles)
      .set(articleUpdate)
      .where(eq(tastemakerArticles.id, id))
      .returning();
    return updatedArticle;
  }

  async deleteTastemakerArticle(id: number): Promise<void> {
    await db.delete(tastemakerArticles).where(eq(tastemakerArticles.id, id));
  }
}

export const storage = new DatabaseStorage();