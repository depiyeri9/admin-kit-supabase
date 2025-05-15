import { DBHelper } from "supabase-handler";

export type AdminConfig = {
    projectId: string;
    supabaseUrl: string;
    supabaseKey: string;
    terminology: {
        title: string;
        products?: string;
        testimonials?: string;
        articles?: string;
        galleries?: string;
    };
    db: DBHelper;
    navigate: {
        useNavigate?: () => any;
        useLocation?: () => any;
    }
    tailwindTheme?: {
        colors?: {
            primary?: string;
            secondary?: string;
            tertiary?: string;
            background?: string;
        },
        fontFamily?: {
            sans?: string;
            serif?: string;
        }
    };
};