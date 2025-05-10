import { Routes, Route } from "react-router-dom";
import { initDB } from "supabase-handler";
import LoginPage from "./pages/LoginPage";
import AdminGallery from "./pages/AdminGallery";
import AdminProducts from "./pages/AdminProducts";
import AdminArticles from "./pages/AdminArticles";
import AdminDashboard from "./pages/AdminDashboard";
import AdminTestimonials from "./pages/AdminTestimonials";
import { AdminConfig } from "./types/adminConfig";
import { ProtectedRoute } from "./config/ProtectedRoute";
import { AdminProvider } from "./context/AdminContext";

type AdminAppProps = {
  config: AdminConfig;
  children: React.ReactNode;
};

export const AdminKit = ({ config, children }: AdminAppProps) => {
  const db = initDB(config.projectId, config.supabaseUrl, config.supabaseKey);

  return (
    <Routes>
      {children}
      {/* Auth Routes */}
      <Route
        path="/auth/login"
        element={
          <LoginPage loginWithEmailPassword={db.auth.loginWithEmailPassword} />
        }
      />
      {/* Protected Admin Routes */}
      <AdminProvider config={config} logout={db.auth.logout}>
        <ProtectedRoute getCurrentSession={db.auth.getCurrentSession}>
          <Route
            path="/admin"
            element={
              <AdminDashboard
                getAllArticles={db.articles.getAllArticles}
                getAllProducts={db.products.getAllProducts}
                getGalleryItems={db.gallery.getGalleryItems}
                getTestimonials={db.testimonials.getTestimonials}
              />
            }
          />
          <Route
            path="/admin/products"
            element={<AdminProducts query={db.products} />}
          />
          <Route
            path="/admin/articles"
            element={<AdminArticles query={db.articles} />}
          />
          <Route
            path="/admin/gallery"
            element={<AdminGallery query={db.gallery} />}
          />
          <Route
            path="/admin/testimonials"
            element={<AdminTestimonials query={db.testimonials} />}
          />
        </ProtectedRoute>
      </AdminProvider>
    </Routes>
  );
};
