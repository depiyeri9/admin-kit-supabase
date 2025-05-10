export type AdminConfig = {
    projectId: string;
    supabaseUrl: string;
    supabaseKey: string;
    terminology?: {
        products?: string;
        testimonials?: string;
        articles?: string;
        galleries?: string;
    };
    tailwindTheme?: {
        extend?: {
            colors?: Record<string, string>;
            fontFamily?: Record<string, string>;
        };
    };
};