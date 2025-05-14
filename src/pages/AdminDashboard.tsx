import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import AdminLayout from "../components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link } from "react-router-dom";
import {
  getAllArticlesDTO,
  getAllProductsDTO,
  getGalleryItemsDTO,
  getTestimonialsDTO,
} from "supabase-handler";

interface CountData {
  products: number;
  articles: number;
  gallery: number;
  testimonials: number;
}

type AdminDashboardProps = {
  getAllProducts: getAllProductsDTO;
  getAllArticles: getAllArticlesDTO;
  getGalleryItems: getGalleryItemsDTO;
  getTestimonials: getTestimonialsDTO;
};

const AdminDashboard = ({
  getAllProducts,
  getAllArticles,
  getGalleryItems,
  getTestimonials,
}: AdminDashboardProps) => {
  const [counts, setCounts] = useState<CountData>({
    products: 0,
    articles: 0,
    gallery: 0,
    testimonials: 0,
  });

  // Fetch data counts
  const { data: products, isSuccess: productsLoaded } = useQuery({
    queryKey: ["admin-products"],
    queryFn: getAllProducts,
  });

  const { data: articles, isSuccess: articlesLoaded } = useQuery({
    queryKey: ["admin-articles"],
    queryFn: getAllArticles,
  });

  const { data: gallery, isSuccess: galleryLoaded } = useQuery({
    queryKey: ["admin-gallery"],
    queryFn: getGalleryItems,
  });

  const { data: testimonials, isSuccess: testimonialsLoaded } = useQuery({
    queryKey: ["admin-testimonials"],
    queryFn: getTestimonials,
  });

  // Update counts when data is loaded
  useEffect(() => {
    const newCounts = { ...counts };

    if (productsLoaded && products.data) {
      newCounts.products = products.data.length;
    }

    if (articlesLoaded && articles.data) {
      newCounts.articles = articles.data.length;
    }

    if (galleryLoaded && gallery.data) {
      newCounts.gallery = gallery.data.length;
    }

    if (testimonialsLoaded && testimonials.data) {
      newCounts.testimonials = testimonials.data.length;
    }

    setCounts(newCounts);
  }, [
    productsLoaded,
    articlesLoaded,
    galleryLoaded,
    testimonialsLoaded,
    products,
    articles,
    gallery,
    testimonials,
  ]);

  // Dashboard stats
  const dashboardStats = [
    {
      title: "Products",
      value: counts.products,
      icon: "box",
      link: "/admin/products",
      color: "bg-gradient-to-br from-primary to-primary-light",
    },
    {
      title: "Articles",
      value: counts.articles,
      icon: "file-text",
      link: "/admin/articles",
      color: "bg-gradient-to-br from-primary to-primary-light",
    },
    {
      title: "Gallery Items",
      value: counts.gallery,
      icon: "image",
      link: "/admin/gallery",
      color: "bg-gradient-to-br from-primary-light to-primary",
    },
    {
      title: "Testimonials",
      value: counts.testimonials,
      icon: "message-square",
      link: "/admin/testimonials",
      color: "bg-gradient-to-br from-secondary to-secondary-light",
    },
  ];

  // Quick actions
  const quickActions = [
    {
      title: "Add New Product",
      description: "Create a new product in your catalogue",
      icon: "plus-circle",
      link: "/admin/products",
    },
    {
      title: "Write New Article",
      description: "Share your expertise with a new article",
      icon: "edit",
      link: "/admin/articles",
    },
    {
      title: "Add Gallery Item",
      description: "Upload a new image to your gallery",
      icon: "upload",
      link: "/admin/gallery",
    },
    {
      title: "Record Testimonial",
      description: "Add a new customer testimonial",
      icon: "star",
      link: "/admin/testimonials",
    },
  ];

  return (
    <AdminLayout title="Admin Dashboard">
      <div className="space-y-8">
        {/* Welcome Message */}
        <div className="bg-primary p-6 rounded-lg shadow-lg border border-white/10 mb-8">
          <h2 className={"font-serif text-2xl text-secondary mb-2"}>
            Welcome to Velour Essence Admin
          </h2>
          <p className="text-white/80">
            Manage your luxury fragrance brand content from this central
            dashboard. Select a section below to begin editing your site's
            content.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {dashboardStats.map((stat, index) => (
            <Link
              key={index}
              to={stat.link}
              className="transition-transform hover:scale-105"
            >
              <Card className={`border-0 shadow-lg ${stat.color} text-white`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-serif">
                      {stat.title}
                    </CardTitle>
                    <div className="bg-white/20 p-2 rounded-full">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        {stat.icon === "box" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                          />
                        )}
                        {stat.icon === "file-text" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        )}
                        {stat.icon === "image" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        )}
                        {stat.icon === "message-square" && (
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        )}
                      </svg>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <p className="text-sm text-white/70 mt-1">
                    Total {stat.title.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 space-y-4">
          <h2 className="font-serif text-xl text-secondary mb-4">Quick Actions</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="transition-transform hover:scale-105"
              >
                <Card className="bg-primary-light border border-secondary/10 shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-md font-serif text-secondary">
                        {action.title}
                      </CardTitle>
                      <div className="bg-secondary/20 text-secondary p-2 rounded-full">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          {action.icon === "plus-circle" && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          )}
                          {action.icon === "edit" && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          )}
                          {action.icon === "upload" && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                            />
                          )}
                          {action.icon === "star" && (
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                            />
                          )}
                        </svg>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-white/70">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* View Site Link */}
        <div className="py-6 text-center">
          <Link
            to="/"
            className="text-secondary hover:text-secondary-light flex items-center justify-center"
          >
            <span>View your website</span>
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </Link>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
