import { useAdminContext } from "../context/AdminContext";

export function useConfig() {
  const { config } = useAdminContext();

  return {
    title: config.terminology.title,
    products: config.terminology.products ?? "Products",
    testimonials: config.terminology.testimonials ?? "Testimonials",
    articles: config.terminology.articles ?? "Articles",
    galleries: config.terminology.galleries ?? "Galleries",
  };
}
