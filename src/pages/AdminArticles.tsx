import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../components/admin/AdminLayout";
import ContentTable from "../components/admin/ContentTable";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ArticlesQueries, Tables } from "supabase-handler";
import { toast } from "../hooks/use-toast";

type Article = Tables["articles"]["Row"];
type ArticleForm = Omit<Tables["articles"]["Insert"], "project_id"> & {
  category: string;
};

type AdminArticlesProps = {
  query: ArticlesQueries;
};

export const AdminArticles = ({ query }: AdminArticlesProps) => {
  const {
    createArticle,
    getAllArticles,
    deleteArticle,
    updateArticle,
    updateArticleStatus,
  } = query;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [form, setForm] = useState<ArticleForm>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    cover_image: "",
    author_name: "",
    status: "draft",
    category: "",
  });

  const queryClient = useQueryClient();

  // Fetch all articles
  const { data: articles, isLoading } = useQuery({
    queryKey: ["admin-articles"],
    queryFn: getAllArticles,
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: createArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      toast({
        title: "Article created successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to create article:", error);
      toast({
        title: "Error",
        description: "Failed to create article. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      updateArticle(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      toast({
        title: "Article updated successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to update article:", error);
      toast({
        title: "Error",
        description: "Failed to update article. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteArticle,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      toast({
        title: "Article deleted successfully",
      });
    },
    onError: (error) => {
      console.error("Failed to delete article:", error);
      toast({
        title: "Error",
        description: "Failed to delete article. Please try again.",
        variant: "destructive",
      });
    },
  });

  const statusMutation = useMutation({
    mutationFn: ({
      id,
      status,
    }: {
      id: string;
      status: "draft" | "published";
    }) => updateArticleStatus(id, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-articles"] });
      toast({
        title: "Article status updated",
      });
    },
    onError: (error) => {
      console.error("Failed to update article status:", error);
      toast({
        title: "Error",
        description: "Failed to update article status. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const generateSlug = () => {
    if (form.title) {
      const slug = form.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, "")
        .replace(/\s+/g, "-");

      setForm({
        ...form,
        slug,
      });
    }
  };

  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(form);
  };

  const handleUpdateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentArticle) {
      updateMutation.mutate({
        id: currentArticle.id,
        updates: form,
      });
    }
  };

  const handleEditArticle = (article: Article) => {
    setCurrentArticle(article);
    setForm({
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      cover_image: article.cover_image,
      author_name: article.author_name,
      status: article.status,
      category: article.category || "",
    });
    setIsFormVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteArticle = (article: Article) => {
    if (confirm("Are you sure you want to delete this article?")) {
      deleteMutation.mutate(article.id);
    }
  };

  const handleChangeStatus = (id: string, newStatus: "draft" | "published") => {
    statusMutation.mutate({ id, status: newStatus });
  };

  const resetForm = () => {
    setCurrentArticle(null);
    setForm({
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      cover_image: "",
      author_name: "",
      status: "draft",
      category: "",
    });
    setIsFormVisible(false);
  };

  // Table columns configuration
  const columns = [
    {
      key: "title",
      header: "Title",
      render: (value: string) => <div className="font-medium">{value}</div>,
    },
    {
      key: "slug",
      header: "Slug",
      render: (value: string) => (
        <div className="max-w-xs truncate font-mono text-xs text-primary/70">
          {value}
        </div>
      ),
    },
    {
      key: "status",
      header: "Status",
      render: (value: string, item: Article) => (
        <div className="flex items-center space-x-2">
          <div
            className={`px-2 py-1 rounded-full text-xs ${
              value === "published"
                ? "bg-primary/20 text-primary"
                : "bg-secondary/20 text-secondary"
            }`}
          >
            {value === "published" ? "Published" : "Draft"}
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="h-6 w-6 p-0 text-primary/70"
            onClick={() =>
              handleChangeStatus(
                item.id,
                value === "published" ? "draft" : "published"
              )
            }
          >
            <svg
              className="h-3 w-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            <span className="sr-only">Toggle Status</span>
          </Button>
        </div>
      ),
    },
    {
      key: "author_name",
      header: "Author",
    },
  ];

  return (
    <AdminLayout title="Manage Articles">
      <div className="space-y-8">
        {/* Form Section */}
        <div className="mb-8">
          {!isFormVisible ? (
            <Button
              onClick={() => setIsFormVisible(true)}
              className="bg-secondary text-black hover:bg-secondary/90"
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              Write New Article
            </Button>
          ) : (
            <div className="bg-primary-light rounded-lg border border-secondary/20 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-xl text-secondary">
                  {currentArticle ? "Edit Article" : "Create New Article"}
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetForm}
                  className="text-white/70 hover:text-white"
                >
                  Cancel
                </Button>
              </div>

              <form
                onSubmit={
                  currentArticle ? handleUpdateArticle : handleCreateArticle
                }
              >
                <div className="space-y-4">
                  {/* Article Title */}
                  <div>
                    <Label htmlFor="title" className="text-white">
                      Article Title
                    </Label>
                    <div className="flex gap-2">
                      <Input
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleInputChange}
                        className="flex-1 bg-primary-secondary/20 border-secondary/30 text-black"
                        required
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="border-secondary/30 text-secondary"
                        onClick={generateSlug}
                      >
                        Generate Slug
                      </Button>
                    </div>
                  </div>

                  {/* Slug */}
                  <div>
                    <Label htmlFor="slug" className="text-white">
                      Slug
                    </Label>
                    <Input
                      id="slug"
                      name="slug"
                      value={form.slug}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black font-mono"
                      required
                    />
                  </div>

                  {/* Author */}
                  <div>
                    <Label htmlFor="author_name" className="text-white">
                      Author
                    </Label>
                    <Input
                      id="author_name"
                      name="author_name"
                      value={form.author_name}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      required
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <Label htmlFor="category" className="text-white">
                      Category
                    </Label>
                    <Input
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                    />
                  </div>

                  {/* Cover Image */}
                  <div>
                    <Label htmlFor="cover_image" className="text-white">
                      Cover Image URL
                    </Label>
                    <Input
                      id="cover_image"
                      name="cover_image"
                      value={form.cover_image}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      placeholder="https://example.com/image.jpg"
                      required
                    />
                  </div>

                  {/* Excerpt */}
                  <div>
                    <Label htmlFor="excerpt" className="text-white">
                      Excerpt
                    </Label>
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={form.excerpt}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-20 px-3 py-2"
                      required
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <Label htmlFor="content" className="text-white">
                      Content
                    </Label>
                    <textarea
                      id="content"
                      name="content"
                      value={form.content}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-72 px-3 py-2 font-mono text-sm"
                      required
                    />
                  </div>

                  {/* Status */}
                  <div>
                    <Label htmlFor="status" className="text-white">
                      Status
                    </Label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="status"
                          value="draft"
                          checked={form.status === "draft"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-white/80">Draft</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="status"
                          value="published"
                          checked={form.status === "published"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-white/80">Published</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button
                      type="submit"
                      className="bg-secondary text-black hover:bg-secondary/90"
                      disabled={
                        createMutation.isPending || updateMutation.isPending
                      }
                    >
                      {createMutation.isPending || updateMutation.isPending ? (
                        <div className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Saving...
                        </div>
                      ) : currentArticle ? (
                        "Update Article"
                      ) : (
                        "Create Article"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Articles Table */}
        <div>
          <h2 className="font-serif text-xl text-secondary mb-4">All Articles</h2>

          <ContentTable
            columns={columns}
            data={articles?.data || []}
            onEdit={handleEditArticle}
            onDelete={handleDeleteArticle}
            isLoading={isLoading}
          />
        </div>
      </div>
    </AdminLayout>
  );
};
