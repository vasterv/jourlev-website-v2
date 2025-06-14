import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Plus, Edit, Trash2, Calendar, Eye } from "lucide-react";
import type { Page, Post, ContactSubmission, TastemakerArticle } from "@shared/schema";

export default function Admin() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);

  // Force cache invalidation on component mount
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ["/api/pages"] });
  }, [queryClient]);

  // Fetch data
  const { data: pages = [] } = useQuery<Page[]>({
    queryKey: ["/api/pages"],
    refetchOnWindowFocus: true,
    staleTime: 0,
    gcTime: 0,
  });

  const { data: posts = [] } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
    refetchOnWindowFocus: true,
  });

  const { data: contacts = [] } = useQuery<ContactSubmission[]>({
    queryKey: ["/api/contact-submissions"],
    refetchOnWindowFocus: true,
  });

  const { data: tastemakerArticles = [] } = useQuery<TastemakerArticle[]>({
    queryKey: ["/api/tastemaker-articles"],
    refetchOnWindowFocus: true,
  });

  // Update page mutation
  const updatePageMutation = useMutation({
    mutationFn: (data: { slug: string; updates: Partial<Page> }) =>
      apiRequest("PUT", `/api/pages/${data.slug}`, data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/pages"] });
      toast({ title: "Page updated successfully!" });
    },
  });

  const handlePageUpdate = (slug: string, updates: Partial<Page>) => {
    updatePageMutation.mutate({ slug, updates });
  };

  // Update tastemaker article mutation
  const updateTastemakerMutation = useMutation({
    mutationFn: (data: { id: number; updates: Partial<TastemakerArticle> }) =>
      apiRequest("PUT", `/api/tastemaker-articles/${data.id}`, data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/tastemaker-articles"] });
      toast({ title: "Article updated successfully!" });
    },
  });

  const handleTastemakerUpdate = (id: number, updates: Partial<TastemakerArticle>) => {
    updateTastemakerMutation.mutate({ id, updates });
  };

  // Create post mutation
  const createPostMutation = useMutation({
    mutationFn: (postData: Partial<Post>) =>
      apiRequest("POST", "/api/posts", postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({ title: "Post created successfully!" });
    },
  });

  // Update post mutation
  const updatePostMutation = useMutation({
    mutationFn: (data: { slug: string; updates: Partial<Post> }) =>
      apiRequest("PUT", `/api/posts/${data.slug}`, data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({ title: "Post updated successfully!" });
    },
  });

  // Delete post mutation
  const deletePostMutation = useMutation({
    mutationFn: (slug: string) =>
      apiRequest("DELETE", `/api/posts/${slug}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({ title: "Post deleted successfully!" });
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="content-container py-8">
        <div className="mb-8">
          <h1 className="font-display text-3xl text-foreground mb-2">JOURLEV Admin Panel</h1>
          <p className="text-muted-foreground">Manage your website content and settings</p>
        </div>

        <Tabs defaultValue="pages" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pages">Page Content</TabsTrigger>
            <TabsTrigger value="posts">Blog Posts</TabsTrigger>
            <TabsTrigger value="tastemakers">Tastemakers</TabsTrigger>
            <TabsTrigger value="contacts">Contact Messages</TabsTrigger>
          </TabsList>

          <TabsContent value="pages" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Page List */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>Pages</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {pages.map((page) => (
                      <Button
                        key={page.slug}
                        variant={selectedPage?.slug === page.slug ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => setSelectedPage(page)}
                      >
                        {page.slug.charAt(0).toUpperCase() + page.slug.slice(1)}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Page Editor */}
              <div className="lg:col-span-3">
                {selectedPage ? (
                  <PageEditor
                    key={selectedPage.slug}
                    page={selectedPage}
                    onUpdate={(updates) => handlePageUpdate(selectedPage.slug, updates)}
                    isLoading={updatePageMutation.isPending}
                  />
                ) : (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <p className="text-muted-foreground">Select a page to edit</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="posts">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Insights Blog Posts</h2>
                <CreatePostButton />
              </div>
              
              <div className="grid gap-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
                {posts.length === 0 && (
                  <Card>
                    <CardContent className="py-8 text-center">
                      <p className="text-muted-foreground">No blog posts yet. Create your first post!</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="contacts">
            <Card>
              <CardHeader>
                <CardTitle>Contact Messages ({contacts.length})</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div key={contact.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{contact.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          {new Date(contact.submittedAt || '').toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{contact.email}</p>
                      {contact.company && (
                        <p className="text-sm text-muted-foreground mb-2">{contact.company}</p>
                      )}
                      <p className="text-sm">{contact.message}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tastemakers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Tastemakers Articles ({tastemakerArticles.length})</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Manage the featured articles in your Tastemakers section
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tastemakerArticles.map((article) => {
                    const handleSave = () => {
                      const title = (document.getElementById(`title-${article.id}`) as HTMLInputElement)?.value;
                      const source = (document.getElementById(`source-${article.id}`) as HTMLInputElement)?.value;
                      const published = (document.getElementById(`published-${article.id}`) as HTMLInputElement)?.value;
                      const url = (document.getElementById(`url-${article.id}`) as HTMLInputElement)?.value;
                      const summary = (document.getElementById(`summary-${article.id}`) as HTMLTextAreaElement)?.value;
                      const featured = (document.getElementById(`featured-${article.id}`) as HTMLInputElement)?.checked;

                      console.log('Saving article:', { id: article.id, title, source, published, url, summary, featured });
                      
                      handleTastemakerUpdate(article.id, {
                        title,
                        source,
                        published,
                        url,
                        summary,
                        featured
                      });
                    };

                    return (
                      <div key={article.id} className="border rounded-lg p-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor={`title-${article.id}`}>Article Title</Label>
                            <Input
                              id={`title-${article.id}`}
                              defaultValue={article.title}
                              className="mb-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`source-${article.id}`}>Source</Label>
                            <Input
                              id={`source-${article.id}`}
                              defaultValue={article.source}
                              className="mb-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`published-${article.id}`}>Published Date</Label>
                            <Input
                              id={`published-${article.id}`}
                              defaultValue={article.published}
                              className="mb-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`url-${article.id}`}>Article URL</Label>
                            <Input
                              id={`url-${article.id}`}
                              defaultValue={article.url}
                              className="mb-2"
                            />
                          </div>
                        </div>
                        <div className="mt-4">
                          <Label htmlFor={`summary-${article.id}`}>Summary</Label>
                          <Textarea
                            id={`summary-${article.id}`}
                            defaultValue={article.summary}
                            rows={3}
                            className="mb-2"
                          />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center space-x-2">
                            <Switch
                              id={`featured-${article.id}`}
                              defaultChecked={article.featured || false}
                            />
                            <Label htmlFor={`featured-${article.id}`}>Featured</Label>
                          </div>
                          <div className="space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={handleSave}
                              disabled={updateTastemakerMutation.isPending}
                            >
                              {updateTastemakerMutation.isPending ? "Saving..." : "Save Changes"}
                            </Button>
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => {
                                if (confirm("Are you sure you want to delete this article?")) {
                                  // Delete functionality would go here
                                  console.log("Delete article:", article.id);
                                }
                              }}
                            >
                              Delete
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Separator className="my-6" />
                <div>
                  <Button className="w-full">
                    Add New Article
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// CreatePostButton Component
function CreatePostButton() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const createPostMutation = useMutation({
    mutationFn: (postData: Partial<Post>) =>
      apiRequest("/api/posts", "POST", postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({ title: "Post created successfully!" });
      setOpen(false);
      resetForm();
    },
  });

  const resetForm = () => {
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setMetaDescription("");
    setIsPublished(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!slug) {
      setSlug(generateSlug(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createPostMutation.mutate({
      title,
      slug,
      excerpt,
      content,
      metaDescription,
      isPublished,
      publishedAt: isPublished ? new Date() : null,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Post
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Blog Post</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Post title"
                required
              />
            </div>
            <div>
              <Label htmlFor="slug">URL Slug *</Label>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                placeholder="url-slug"
                required
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Brief description of the post"
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="content">Content *</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your blog post content here..."
              rows={10}
              required
            />
          </div>
          
          <div>
            <Label htmlFor="metaDescription">Meta Description</Label>
            <Input
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="SEO meta description"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Switch
              id="published"
              checked={isPublished}
              onCheckedChange={setIsPublished}
            />
            <Label htmlFor="published">Publish immediately</Label>
          </div>
          
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={createPostMutation.isPending}>
              {createPostMutation.isPending ? "Creating..." : "Create Post"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

// PostCard Component
function PostCard({ post }: { post: Post }) {
  const [editOpen, setEditOpen] = useState(false);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const updatePostMutation = useMutation({
    mutationFn: (data: { slug: string; updates: Partial<Post> }) =>
      apiRequest(`/api/posts/${data.slug}`, "PUT", data.updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({ title: "Post updated successfully!" });
      setEditOpen(false);
    },
  });

  const deletePostMutation = useMutation({
    mutationFn: (slug: string) =>
      apiRequest(`/api/posts/${slug}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/posts"] });
      toast({ title: "Post deleted successfully!" });
    },
  });

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deletePostMutation.mutate(post.slug);
    }
  };

  const togglePublish = () => {
    const updates = {
      isPublished: !post.isPublished,
      publishedAt: !post.isPublished ? new Date() : null,
    };
    updatePostMutation.mutate({ slug: post.slug, updates });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <Badge variant={post.isPublished ? "default" : "secondary"}>
                {post.isPublished ? "Published" : "Draft"}
              </Badge>
            </div>
            
            {post.excerpt && (
              <p className="text-muted-foreground mb-3">{post.excerpt}</p>
            )}
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "Not published"}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {post.slug}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={togglePublish}
              disabled={updatePostMutation.isPending}
            >
              {post.isPublished ? "Unpublish" : "Publish"}
            </Button>
            
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <PostEditor
                  post={post}
                  onUpdate={(updates) => updatePostMutation.mutate({ slug: post.slug, updates })}
                  isLoading={updatePostMutation.isPending}
                />
              </DialogContent>
            </Dialog>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleDelete}
              disabled={deletePostMutation.isPending}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// PostEditor Component
function PostEditor({ post, onUpdate, isLoading }: {
  post: Post;
  onUpdate: (updates: Partial<Post>) => void;
  isLoading: boolean;
}) {
  const [title, setTitle] = useState(post.title);
  const [slug, setSlug] = useState(post.slug);
  const [excerpt, setExcerpt] = useState(post.excerpt || "");
  const [content, setContent] = useState(post.content);
  const [metaDescription, setMetaDescription] = useState(post.metaDescription || "");
  const [isPublished, setIsPublished] = useState(post.isPublished);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      title,
      slug,
      excerpt,
      content,
      metaDescription,
      isPublished,
      publishedAt: isPublished && !post.isPublished ? new Date() : (post.publishedAt ? new Date(post.publishedAt) : null),
    });
  };

  return (
    <div>
      <DialogHeader>
        <DialogTitle>Edit Blog Post</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="edit-title">Title</Label>
            <Input
              id="edit-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="edit-slug">URL Slug</Label>
            <Input
              id="edit-slug"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              required
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="edit-excerpt">Excerpt</Label>
          <Textarea
            id="edit-excerpt"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            rows={3}
          />
        </div>
        
        <div>
          <Label htmlFor="edit-content">Content</Label>
          <Textarea
            id="edit-content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10}
            required
          />
        </div>
        
        <div>
          <Label htmlFor="edit-meta">Meta Description</Label>
          <Input
            id="edit-meta"
            value={metaDescription}
            onChange={(e) => setMetaDescription(e.target.value)}
          />
        </div>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="edit-published"
            checked={Boolean(isPublished)}
            onCheckedChange={setIsPublished}
          />
          <Label htmlFor="edit-published">Published</Label>
        </div>
        
        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}

function PageEditor({ page, onUpdate, isLoading }: {
  page: Page;
  onUpdate: (updates: any) => void;
  isLoading: boolean;
}) {
  const [title, setTitle] = useState(page.title);
  const [metaDescription, setMetaDescription] = useState(page.metaDescription || "");
  
  // Parse JSON content or use fallback
  let pageData;
  try {
    pageData = JSON.parse(page.content);
  } catch {
    pageData = { content: page.content };
  }

  const [contentData, setContentData] = useState(pageData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({
      title,
      content: JSON.stringify(contentData),
      metaDescription,
    });
  };

  const updateContentField = (path: string[], value: any) => {
    setContentData((prev: any) => {
      const newData = { ...prev };
      let current = newData;
      for (let i = 0; i < path.length - 1; i++) {
        if (!current[path[i]]) current[path[i]] = {};
        current = current[path[i]];
      }
      current[path[path.length - 1]] = value;
      return newData;
    });
  };

  const renderContentEditor = () => {
    switch (page.slug) {
      case 'home':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hero Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.hero?.headline || ''}
                    onChange={(e) => updateContentField(['hero', 'headline'], e.target.value)}
                    placeholder="Main headline"
                  />
                </div>
                <div>
                  <Label>Subheadline</Label>
                  <Textarea
                    value={contentData.hero?.subheadline || ''}
                    onChange={(e) => updateContentField(['hero', 'subheadline'], e.target.value)}
                    placeholder="Supporting text"
                    rows={3}
                  />
                </div>
                <div>
                  <Label>CTA Button Text</Label>
                  <Input
                    value={contentData.hero?.ctaText || ''}
                    onChange={(e) => updateContentField(['hero', 'ctaText'], e.target.value)}
                    placeholder="Button text"
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Human-AI Collaboration Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.humanAi?.headline || ''}
                    onChange={(e) => updateContentField(['humanAi', 'headline'], e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={contentData.humanAi?.description || ''}
                    onChange={(e) => updateContentField(['humanAi', 'description'], e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Services Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.services?.headline || ''}
                    onChange={(e) => updateContentField(['services', 'headline'], e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Textarea
                    value={contentData.services?.description || ''}
                    onChange={(e) => updateContentField(['services', 'description'], e.target.value)}
                    rows={3}
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 'about':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hero Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.hero?.headline || ''}
                    onChange={(e) => updateContentField(['hero', 'headline'], e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    value={contentData.hero?.description || ''}
                    onChange={(e) => updateContentField(['hero', 'description'], e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Brand Story (400-500 chars)</h3>
              <Textarea
                value={contentData.story?.content || ''}
                onChange={(e) => updateContentField(['story', 'content'], e.target.value)}
                placeholder="Your authentic brand story"
                rows={4}
                maxLength={500}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {(contentData.story?.content || '').length}/500 characters
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Mission Statement (200-300 chars)</h3>
              <Textarea
                value={contentData.mission?.content || ''}
                onChange={(e) => updateContentField(['mission', 'content'], e.target.value)}
                placeholder="Your mission statement"
                rows={3}
                maxLength={300}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {(contentData.mission?.content || '').length}/300 characters
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Core Values</h3>
              {(contentData.values?.items || []).map((value: any, index: number) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg mb-3">
                  <div>
                    <Label>Value {index + 1} Title</Label>
                    <Input
                      value={value.title || ''}
                      onChange={(e) => {
                        const newItems = [...(contentData.values?.items || [])];
                        newItems[index] = { ...newItems[index], title: e.target.value };
                        updateContentField(['values', 'items'], newItems);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={value.description || ''}
                      onChange={(e) => {
                        const newItems = [...(contentData.values?.items || [])];
                        newItems[index] = { ...newItems[index], description: e.target.value };
                        updateContentField(['values', 'items'], newItems);
                      }}
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'services':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hero Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.hero?.headline || ''}
                    onChange={(e) => updateContentField(['hero', 'headline'], e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    value={contentData.hero?.description || ''}
                    onChange={(e) => updateContentField(['hero', 'description'], e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Services</h3>
              {(contentData.services || []).map((service: any, index: number) => (
                <div key={index} className="space-y-3 p-4 border rounded-lg mb-4">
                  <div>
                    <Label>Service {index + 1} Title</Label>
                    <Input
                      value={service.title || ''}
                      onChange={(e) => {
                        const newServices = [...(contentData.services || [])];
                        newServices[index] = { ...newServices[index], title: e.target.value };
                        updateContentField(['services'], newServices);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={service.description || ''}
                      onChange={(e) => {
                        const newServices = [...(contentData.services || [])];
                        newServices[index] = { ...newServices[index], description: e.target.value };
                        updateContentField(['services'], newServices);
                      }}
                      rows={2}
                    />
                  </div>
                  <div>
                    <Label>Features (comma-separated)</Label>
                    <Input
                      value={(service.features || []).join(', ')}
                      onChange={(e) => {
                        const newServices = [...(contentData.services || [])];
                        newServices[index] = { 
                          ...newServices[index], 
                          features: e.target.value.split(',').map(f => f.trim()).filter(f => f)
                        };
                        updateContentField(['services'], newServices);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'team':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hero Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.hero?.headline || ''}
                    onChange={(e) => updateContentField(['hero', 'headline'], e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    value={contentData.hero?.description || ''}
                    onChange={(e) => updateContentField(['hero', 'description'], e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Team Members</h3>
              {(contentData.members || []).map((member: any, index: number) => (
                <div key={index} className="space-y-3 p-4 border rounded-lg mb-4">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={member.name || ''}
                      onChange={(e) => {
                        const newMembers = [...(contentData.members || [])];
                        newMembers[index] = { ...newMembers[index], name: e.target.value };
                        updateContentField(['members'], newMembers);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Role/Title</Label>
                    <Input
                      value={member.role || ''}
                      onChange={(e) => {
                        const newMembers = [...(contentData.members || [])];
                        newMembers[index] = { ...newMembers[index], role: e.target.value };
                        updateContentField(['members'], newMembers);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Bio (150-200 chars)</Label>
                    <Textarea
                      value={member.bio || ''}
                      onChange={(e) => {
                        const newMembers = [...(contentData.members || [])];
                        newMembers[index] = { ...newMembers[index], bio: e.target.value };
                        updateContentField(['members'], newMembers);
                      }}
                      maxLength={200}
                      rows={3}
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      {(member.bio || '').length}/200 characters
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'zane':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hero Section</h3>
              <div className="space-y-3">
                <div>
                  <Label>Headline</Label>
                  <Input
                    value={contentData.hero?.headline || ''}
                    onChange={(e) => updateContentField(['hero', 'headline'], e.target.value)}
                  />
                </div>
                <div>
                  <Label>Description</Label>
                  <Input
                    value={contentData.hero?.description || ''}
                    onChange={(e) => updateContentField(['hero', 'description'], e.target.value)}
                  />
                </div>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Introduction (200-300 chars)</h3>
              <Textarea
                value={contentData.intro?.content || ''}
                onChange={(e) => updateContentField(['intro', 'content'], e.target.value)}
                maxLength={300}
                rows={3}
              />
              <p className="text-sm text-muted-foreground mt-1">
                {(contentData.intro?.content || '').length}/300 characters
              </p>
            </div>
            <Separator />
            <div>
              <h3 className="text-lg font-semibold mb-3">Capabilities</h3>
              {(contentData.capabilities || []).map((capability: any, index: number) => (
                <div key={index} className="space-y-2 p-4 border rounded-lg mb-3">
                  <div>
                    <Label>Capability {index + 1} Title</Label>
                    <Input
                      value={capability.title || ''}
                      onChange={(e) => {
                        const newCapabilities = [...(contentData.capabilities || [])];
                        newCapabilities[index] = { ...newCapabilities[index], title: e.target.value };
                        updateContentField(['capabilities'], newCapabilities);
                      }}
                    />
                  </div>
                  <div>
                    <Label>Description</Label>
                    <Textarea
                      value={capability.description || ''}
                      onChange={(e) => {
                        const newCapabilities = [...(contentData.capabilities || [])];
                        newCapabilities[index] = { ...newCapabilities[index], description: e.target.value };
                        updateContentField(['capabilities'], newCapabilities);
                      }}
                      rows={2}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div>
            <Label htmlFor="content">Raw Content (JSON)</Label>
            <Textarea
              id="content"
              value={JSON.stringify(contentData, null, 2)}
              onChange={(e) => {
                try {
                  setContentData(JSON.parse(e.target.value));
                } catch {
                  // Invalid JSON, keep typing
                }
              }}
              rows={15}
              className="font-mono text-sm"
            />
          </div>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Edit {page.slug.charAt(0).toUpperCase() + page.slug.slice(1)} Page</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="title">Page Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Page title"
            />
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Page Content</h3>
            {renderContentEditor()}
          </div>
          
          <Separator />
          
          <div>
            <Label htmlFor="metaDescription">SEO Meta Description</Label>
            <Input
              id="metaDescription"
              value={metaDescription}
              onChange={(e) => setMetaDescription(e.target.value)}
              placeholder="Description for search engines"
            />
          </div>
          
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}