import { AdminConfig } from './types/adminConfig';
export * from './types/adminConfig';
export type AdminAppProps = {
    config: AdminConfig;
    children?: React.ReactNode;
    queryClient: import('@tanstack/react-query').QueryClient;
};
export { AdminProvider } from './context/AdminContext';
export { ProtectedRoute } from './config/ProtectedRoute';
export { LoginPage, AdminDashboard, AdminArticles, AdminGallery, AdminProducts, AdminTestimonials, } from './pages';
