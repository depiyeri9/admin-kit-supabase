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

export * from "./types/adminConfig";

export type AdminAppProps = {
  config: AdminConfig;
  children: React.ReactNode;
};

export const AdminKit = ({ config, children }: AdminAppProps) => {
  const db = initDB(config.projectId, config.supabaseUrl, config.supabaseKey);

  return (
    <AdminProvider config={config} logout={db.auth.logout}>
      <Routes>
        {children}
        {/* Auth Routes */}
        <Route
          path="/auth/login"
          element={
            <LoginPage
              loginWithEmailPassword={db.auth.loginWithEmailPassword}
            />
          }
        />

        {/* Protected Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute getCurrentSession={db.auth.getCurrentSession}>
              <AdminDashboard
                getAllArticles={db.articles.getAllArticles}
                getAllProducts={db.products.getAllProducts}
                getGalleryItems={db.gallery.getGalleryItems}
                getTestimonials={db.testimonials.getTestimonials}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <ProtectedRoute getCurrentSession={db.auth.getCurrentSession}>
              <AdminProducts query={db.products} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/articles"
          element={
            <ProtectedRoute getCurrentSession={db.auth.getCurrentSession}>
              <AdminArticles query={db.articles} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute getCurrentSession={db.auth.getCurrentSession}>
              <AdminGallery query={db.gallery} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/testimonials"
          element={
            <ProtectedRoute getCurrentSession={db.auth.getCurrentSession}>
              <AdminTestimonials query={db.testimonials} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </AdminProvider>
  );
};
