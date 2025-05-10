import { getAllArticlesDTO, getAllProductsDTO, getGalleryItemsDTO, getTestimonialsDTO } from 'supabase-handler';
type AdminDashboardProps = {
    getAllProducts: getAllProductsDTO;
    getAllArticles: getAllArticlesDTO;
    getGalleryItems: getGalleryItemsDTO;
    getTestimonials: getTestimonialsDTO;
};
declare const AdminDashboard: ({ getAllProducts, getAllArticles, getGalleryItems, getTestimonials, }: AdminDashboardProps) => import("react/jsx-runtime").JSX.Element;
export default AdminDashboard;
