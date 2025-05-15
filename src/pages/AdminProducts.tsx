import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../components/admin/AdminLayout";
import ContentTable from "../components/admin/ContentTable";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import { ProductsQueries, Tables } from "supabase-handler";

type Product = Tables["products"]["Row"];
type ProductForm = Omit<Tables["products"]["Insert"], "project_id"> & {
  description: string;
  is_active: boolean;
};

type AdminProductsProps = { query: ProductsQueries };

export const AdminProducts = ({ query }: AdminProductsProps) => {
  const { getAllProducts, createProduct, deleteProduct, updateProduct } = query;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [form, setForm] = useState<ProductForm>({
    name: "",
    description: "",
    price: 0,
    images: [""],
    is_active: true,
  });

  const queryClient = useQueryClient();

  // Fetch all products
  const { data: products, isLoading } = useQuery({
    queryKey: ["admin-products"],
    queryFn: getAllProducts,
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast({
        title: "Product created successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to create product:", error);
      toast({
        title: "Error",
        description: "Failed to create product. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      updateProduct(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast({
        title: "Product updated successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to update product:", error);
      toast({
        title: "Error",
        description: "Failed to update product. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-products"] });
      toast({
        title: "Product deleted successfully",
      });
    },
    onError: (error) => {
      console.error("Failed to delete product:", error);
      toast({
        title: "Error",
        description: "Failed to delete product. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (name === "price") {
      setForm({
        ...form,
        [name]: Number(value),
      });
    } else if (name === "is_active") {
      setForm({
        ...form,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (name === "images[0]") {
      setForm({
        ...form,
        images: [value],
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(form);
  };

  const handleUpdateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentProduct) {
      updateMutation.mutate({
        id: currentProduct.id,
        updates: form,
      });
    }
  };

  const handleEditProduct = (product: Product) => {
    setCurrentProduct(product);
    setForm({
      name: product.name,
      description: product.description || "",
      price: product.price,
      images: product.images || [""],
      is_active: product.is_active !== null ? product.is_active : true,
    });
    setIsFormVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteProduct = (product: Product) => {
    if (confirm("Are you sure you want to delete this product?")) {
      deleteMutation.mutate(product.id);
    }
  };

  const resetForm = () => {
    setCurrentProduct(null);
    setForm({
      name: "",
      description: "",
      price: 0,
      images: [""],
      is_active: true,
    });
    setIsFormVisible(false);
  };

  // Table columns configuration
  const columns = [
    {
      key: "name",
      header: "Name",
    },
    {
      key: "description",
      header: "Description",
      render: (value: string) => (
        <div className="max-w-xs truncate ">{value || "—"}</div>
      ),
    },
    {
      key: "price",
      header: "Price",
      render: (value: number) => (
        <div>
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
          }).format(value)}
        </div>
      ),
    },
    {
      key: "is_active",
      header: "Status",
      render: (value: boolean) => (
        <div
          className={`px-2 py-1 rounded-full text-xs inline-flex items-center ${
            value ? "bg-primary/20 text-primary" : "bg-red-500/20 text-red-500"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full mr-1 ${
              value ? "bg-primary" : "bg-red-500"
            }`}
          ></span>
          {value ? "Active" : "Inactive"}
        </div>
      ),
    },
  ];

  return (
    <AdminLayout title="Manage Products">
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
              Add New Product
            </Button>
          ) : (
            <div className="bg-primary-light rounded-lg border border-secondary/20 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-xl text-secondary">
                  {currentProduct ? "Edit Product" : "Add New Product"}
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
                  currentProduct ? handleUpdateProduct : handleCreateProduct
                }
              >
                <div className="space-y-4">
                  {/* Product Name */}
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Product Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      required
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <Label htmlFor="description" className="text-white">
                      Description
                    </Label>
                    <textarea
                      id="description"
                      name="description"
                      value={form.description}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-24 px-3 py-2"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <Label htmlFor="price" className="text-white">
                      Price (IDR)
                    </Label>
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      min="0"
                      value={form.price}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      required
                    />
                  </div>

                  {/* Image URL */}
                  <div>
                    <Label htmlFor="image" className="text-white">
                      Image URL
                    </Label>
                    <Input
                      id="image"
                      name="images[0]"
                      value={form.images?.[0] || ""}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  {/* Active Status */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is_active"
                      name="is_active"
                      checked={form.is_active}
                      onChange={(e) =>
                        setForm({ ...form, is_active: e.target.checked })
                      }
                      className="w-4 h-4 mr-2"
                    />
                    <Label htmlFor="is_active" className="text-white">
                      Active product
                    </Label>
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
                      ) : currentProduct ? (
                        "Update Product"
                      ) : (
                        "Create Product"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Products Table */}
        <div>
          <h2 className="font-serif text-xl text-secondary mb-4">All Products</h2>

          <ContentTable
            columns={columns}
            data={products?.data || []}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
            isLoading={isLoading}
          />
        </div>
      </div>
    </AdminLayout>
  );
};
