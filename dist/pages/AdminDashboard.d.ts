import { getAllArticlesDTO, getAllProductsDTO, getGalleryItemsDTO, getTestimonialsDTO } from 'supabase-handler';
type AdminDashboardProps = {
    getAllProducts: getAllProductsDTO;
    getAllArticles: getAllArticlesDTO;
    getGalleryItems: getGalleryItemsDTO;
    getTestimonials: getTestimonialsDTO;
};
export declare const AdminDashboard: ({ getAllProducts, getAllArticles, getGalleryItems, getTestimonials, }: AdminDashboardProps) => import("react/jsx-runtime").JSX.Element;
export {};
