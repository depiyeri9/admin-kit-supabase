import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import AdminLayout from "../components/admin/AdminLayout";
import ContentTable from "../components/admin/ContentTable";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import { Star } from "lucide-react";
import { Tables, TestimonialsQueries } from "supabase-handler";

type Testimonial = Tables["testimonials"]["Row"];
type TestimonialForm = Omit<Testimonial, "id" | "project_id" | "created_at">;

type AdminTestimonialsProps = {
  query: TestimonialsQueries;
};

export const AdminTestimonials = ({ query }: AdminTestimonialsProps) => {
  const {
    getTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial,
  } = query;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] =
    useState<Testimonial | null>(null);
  const [form, setForm] = useState<TestimonialForm>({
    parent_name: "",
    testimonial: "",
    rating: 5,
    avatar_url: "",
    is_featured: false,
    child_name: null,
    child_age: null,
  });

  const queryClient = useQueryClient();

  // Fetch all testimonials
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: getTestimonials,
  });

  // Mutations
  const createMutation = useMutation({
    mutationFn: createTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      toast({
        title: "Testimonial created successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to create testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to create testimonial. Please try again.",
        variant: "destructive",
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: any }) =>
      updateTestimonial(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      toast({
        title: "Testimonial updated successfully",
      });
      resetForm();
    },
    onError: (error) => {
      console.error("Failed to update testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteTestimonial,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-testimonials"] });
      toast({
        title: "Testimonial deleted successfully",
      });
    },
    onError: (error) => {
      console.error("Failed to delete testimonial:", error);
      toast({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Handlers
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else if (type === "number") {
      setForm({
        ...form,
        [name]: value === "" ? null : Number(value),
      });
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleRatingChange = (rating: number) => {
    setForm({
      ...form,
      rating,
    });
  };

  const handleCreateTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    createMutation.mutate(form);
  };

  const handleUpdateTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentTestimonial) {
      updateMutation.mutate({
        id: currentTestimonial.id,
        updates: form,
      });
    }
  };

  const handleEditTestimonial = (testimonial: Testimonial) => {
    setCurrentTestimonial(testimonial);
    setForm({
      parent_name: testimonial.parent_name,
      testimonial: testimonial.testimonial,
      rating: testimonial.rating,
      avatar_url: testimonial.avatar_url || "",
      is_featured: testimonial.is_featured || false,
      child_name: testimonial.child_name,
      child_age: testimonial.child_age,
    });
    setIsFormVisible(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDeleteTestimonial = (testimonial: Testimonial) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      deleteMutation.mutate(testimonial.id);
    }
  };

  const resetForm = () => {
    setCurrentTestimonial(null);
    setForm({
      parent_name: "",
      testimonial: "",
      rating: 5,
      avatar_url: "",
      is_featured: false,
      child_name: null,
      child_age: null,
    });
    setIsFormVisible(false);
  };

  // Table columns configuration
  const columns = [
    {
      key: "parent_name",
      header: "Name",
      render: (value: string, item: Testimonial) => (
        <div>
          <div className="font-medium">{value}</div>
          {item.child_name && (
            <div className="text-xs text-white/60">
              Child: {item.child_name}, {item.child_age} y.o.
            </div>
          )}
        </div>
      ),
    },
    {
      key: "testimonial",
      header: "Testimonial",
      render: (value: string) => (
        <div className="max-w-xs truncate">{value}</div>
      ),
    },
    {
      key: "rating",
      header: "Rating",
      render: (value: number) => (
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < value ? "text-secondary fill-secondary" : "text-gray-300"
              }`}
            />
          ))}
        </div>
      ),
    },
    {
      key: "is_featured",
      header: "Featured",
      render: (value: boolean) => (
        <div className={value ? "text-secondary" : "text-white/40"}>
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
    <AdminLayout title="Manage Testimonials">
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
              Add New Testimonial
            </Button>
          ) : (
            <div className="bg-primary-light rounded-lg border border-secondary/20 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-serif text-xl text-secondary">
                  {currentTestimonial
                    ? "Edit Testimonial"
                    : "Add New Testimonial"}
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
                  currentTestimonial
                    ? handleUpdateTestimonial
                    : handleCreateTestimonial
                }
              >
                <div className="space-y-4">
                  {/* Parent Name */}
                  <div>
                    <Label htmlFor="parent_name" className="text-white">
                      Name
                    </Label>
                    <Input
                      id="parent_name"
                      name="parent_name"
                      value={form.parent_name}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Child Name (Optional) */}
                    <div>
                      <Label htmlFor="child_name" className="text-white">
                        Child's Name (Optional)
                      </Label>
                      <Input
                        id="child_name"
                        name="child_name"
                        value={form.child_name || ""}
                        onChange={handleInputChange}
                        className="bg-primary-secondary/20 border-secondary/30 text-black"
                      />
                    </div>

                    {/* Child Age (Optional) */}
                    <div>
                      <Label htmlFor="child_age" className="text-white">
                        Child's Age (Optional)
                      </Label>
                      <Input
                        id="child_age"
                        name="child_age"
                        type="number"
                        value={form.child_age !== null ? form.child_age : ""}
                        onChange={handleInputChange}
                        className="bg-primary-secondary/20 border-secondary/30 text-black"
                        min="0"
                        max="100"
                      />
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div>
                    <Label htmlFor="testimonial" className="text-white">
                      Testimonial
                    </Label>
                    <textarea
                      id="testimonial"
                      name="testimonial"
                      value={form.testimonial}
                      onChange={handleInputChange}
                      className="w-full rounded-md bg-primary-secondary/20 border-secondary/30 text-black h-24 px-3 py-2"
                      required
                    />
                  </div>

                  {/* Rating */}
                  <div>
                    <Label htmlFor="rating" className="text-white">
                      Rating
                    </Label>
                    <div className="flex mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 cursor-pointer ${
                            i < form.rating
                              ? "text-secondary fill-secondary"
                              : "text-white-500"
                          }`}
                          onClick={() => handleRatingChange(i + 1)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Avatar URL */}
                  <div>
                    <Label htmlFor="avatar_url" className="text-white">
                      Avatar URL (Optional)
                    </Label>
                    <Input
                      id="avatar_url"
                      name="avatar_url"
                      value={form.avatar_url || ""}
                      onChange={handleInputChange}
                      className="bg-primary-secondary/20 border-secondary/30 text-black"
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </div>

                  {/* Featured */}
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="is_featured"
                      name="is_featured"
                      checked={form.is_featured || false}
                      onChange={handleInputChange}
                      className="w-4 h-4 mr-2"
                    />
                    <Label htmlFor="is_featured" className="text-white">
                      Featured testimonial
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
                      ) : currentTestimonial ? (
                        "Update Testimonial"
                      ) : (
                        "Create Testimonial"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Testimonials Table */}
        <div>
          <h2 className="font-serif text-xl text-secondary mb-4">
            All Testimonials
          </h2>

          <ContentTable
            columns={columns}
            data={testimonials?.data || []}
            onEdit={handleEditTestimonial}
            onDelete={handleDeleteTestimonial}
            isLoading={isLoading}
          />
        </div>
      </div>
    </AdminLayout>
  );
};
