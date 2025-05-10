import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../components/admin/AdminLayout";
import ContentTable from "../components/admin/ContentTable";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import { Tables, GalleryQueries } from "supabase-handler";

type GalleryItem = Tables["gallery_items"]["Row"];
type GalleryItemForm = Omit<Tables["gallery_items"]["Insert"], "project_id"> & {
  is_featured: boolean;
};

type AdminGalleryProps = {
  query: GalleryQueries;
};

const AdminGallery = ({ query }: AdminGalleryProps) => {
  const {
    getGalleryItems,
    createGalleryItem,
    deleteGalleryItem,
    updateGalleryItem,
  } = query;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);
  const [form, setForm] = useState<GalleryItemForm>({
    title: "",
    image_url: "",
    category: "",
    is_featured: false,
  });

  const queryClient = useQueryClient();

  // Fetch all gallery items
  const { data: galleryItems, isLoading } = useQuery({
    queryKey: ["admin-gallery"],
    queryFn: getGalleryItems,
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: createGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({
        title: "Gallery item created successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to create gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to create gallery item. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      updateGalleryItem(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({
        title: "Gallery item updated successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to update gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to update gallery item. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteGalleryItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-gallery"] });
      toast({
        title: "Gallery item deleted successfully",
      });
    },
    onError: (error) => {
      console.error("Failed to delete gallery item:", error);
      toast({
        title: "Error",
        description: "Failed to delete gallery item. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked,
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleCreateItem = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(form);
  };

  const handleUpdateItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentItem) {
      updateMutation.mutate({
        id: currentItem.id,
        updates: form,
      });
    }
  };

  const handleEditItem = (item: GalleryItem) => {
    setCurrentItem(item);
    setForm({
      title: item.title,
      image_url: item.image_url,
      category: item.category,
      is_featured: item.is_featured || false,
    });
    setIsFormVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteItem = (item: GalleryItem) => {
    if (confirm("Are you sure you want to delete this gallery item?")) {
      deleteMutation.mutate(item.id);
    }
  };

  const resetForm = () => {
    setCurrentItem(null);
    setForm({
      title: "",
      image_url: "",
      category: "",
      is_featured: false,
    });
    setIsFormVisible(false);
  };

  // Table columns configuration
  const columns = [
    {
      key: "image_url",
      header: "Image",
      width: "80px",
      render: (value: string) => (
        <div className="w-12 h-12 rounded overflow-hidden">
          <img
            src={value}
            alt="Preview"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/48?text=Error";
            }}
          />
        </div>
      ),
    },
    {
      key: "title",
      header: "Title",
    },
    {
      key: "category",
      header: "Category",
      render: (value: string) => (
        <div className="px-2 py-1 rounded-full bg-emerald/20 text-xs inline-block">
          {value}
        </div>
      ),
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (value: boolean) => (
        <div className={value ? "text-gold" : "text-emerald/40"}>
          {value ? (
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : (
            "—"
          )}
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Manage Gallery">
      <div className="space-y-8">
        {/* Form Section */}
        <div className="mb-8">
          {!isFormVisible ? (
            <Button
              onClick={() => setIsFormVisible(true)}
              className="bg-gold text-black hover:bg-gold/90"
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
              Add Gallery Item
            </Button>
          ) : (
            <div className="bg-emerald-light rounded-lg border border-gold/20 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-xl text-gold">
                  {currentItem ? "Edit Gallery Item" : "Add New Gallery Item"}
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
                onSubmit={currentItem ? handleUpdateItem : handleCreateItem}
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    {/* Title */}
                    <div>
                      <Label htmlFor="title" className="text-white">
                        Title
                      </Label>
                      <Input
                        id="title"
                        name="title"
                        value={form.title}
                        onChange={handleInputChange}
                        className="bg-emerald-gold/20 border-gold/30 text-black"
                        required
                      />
                    </div>

                    {/* Image URL */}
                    <div>
                      <Label htmlFor="image_url" className="text-white">
                        Image URL
                      </Label>
                      <Input
                        id="image_url"
                        name="image_url"
                        value={form.image_url}
                        onChange={handleInputChange}
                        className="bg-emerald-gold/20 border-gold/30 text-black"
                        placeholder="https://example.com/image.jpg"
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
                        className="bg-emerald-gold/20 border-gold/30 text-black"
                        required
                      />
                    </div>

                    {/* Featured */}
                    <div className="flex items-center mt-4">
                      <input
                        type="checkbox"
                        id="is_featured"
                        name="is_featured"
                        checked={form.is_featured}
                        onChange={handleInputChange}
                        className="w-4 h-4 mr-2"
                      />
                      <Label htmlFor="is_featured" className="text-white">
                        Featured item
                      </Label>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button
                        type="submit"
                        className="bg-gold text-black hover:bg-gold/90"
                        disabled={
                          createMutation.isPending || updateMutation.isPending
                        }
                      >
                        {createMutation.isPending ||
                        updateMutation.isPending ? (
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
                        ) : currentItem ? (
                          "Update Item"
                        ) : (
                          "Create Item"
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center bg-emerald-light/5 rounded-lg p-4">
                    {form.image_url ? (
                      <div className="max-w-full">
                        <img
                          src={form.image_url}
                          alt="Image Preview"
                          className="max-h-64 rounded-lg object-contain mx-auto"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "https://via.placeholder.com/400x300?text=Image+Error";
                          }}
                        />
                        <p className="text-sm text-white/50 text-center mt-2">
                          Image Preview
                        </p>
                      </div>
                    ) : (
                      <div className="text-center text-white/50">
                        <svg
                          className="w-12 h-12 mx-auto opacity-50"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="mt-2">
                          Enter an image URL to see preview
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Gallery Items Table */}
        <div>
          <h2 className="font-serif text-xl text-gold mb-4">
            All Gallery Items
          </h2>

          <ContentTable
            columns={columns}
            data={galleryItems?.data || []}
            onEdit={handleEditItem}
            onDelete={handleDeleteItem}
            isLoading={isLoading}
          />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminGallery;
