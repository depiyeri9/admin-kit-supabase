import { useAdminContext } from "../context/AdminContext";

export const useRouter = () => {
    const { config } = useAdminContext()
    if (config.navigate?.useNavigate === undefined || config.navigate?.useLocation === undefined) {
        throw new Error("useNavigate is not defined in the config");
    }
    const navigate = config.navigate?.useNavigate();
    const location = config.navigate?.useLocation();
    const { pathname } = location;

    const goTo = (path: string) => {
        navigate(path);
    };

    const goBack = () => {
        navigate(-1);
    };

    return {
        pathname,
        goTo,
        goBack,
        logout: config.db.auth.logout,
    };
}