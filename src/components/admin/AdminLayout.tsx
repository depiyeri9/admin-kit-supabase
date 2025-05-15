import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { toast } from "../../hooks/use-toast";
import { useIsMobile } from "../../hooks/use-mobile";
import { useAdminContext } from "../../context/AdminContext";
import { useConfig } from "../../hooks/use-config";
import { useColor } from "../../hooks/use-color";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children, title }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  const { logout } = useAdminContext(); // Access logout from context
  const color = useColor();
  const config = useConfig();

  // Close sidebar on mobile when route changes
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  }, [location.pathname, isMobile]);

  const handleLogout = async () => {
    try {
      const { error } = await logout();
      if (error) throw error;

      toast({
        title: "Logged out successfully",
      });

      navigate("/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast({
        title: "Error",
        description: "Failed to log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Navigation links
  const navigationLinks = [
    { name: "Dashboard", path: "/admin", icon: "home" },
    { name: config.products, path: "/admin/products", icon: "box" },
    { name: config.articles, path: "/admin/articles", icon: "file-text" },
    { name: config.galleries, path: "/admin/gallery", icon: "image" },
    {
      name: config.testimonials,
      path: "/admin/testimonials",
      icon: "message-square",
    },
  ];

  return (
    <div className={`min-h-screen bg-${color.background} text-white flex flex-col md:flex-row`}>
      {/* Mobile Header */}
      <header className={`bg-${color.primary}-light border-b border-white/10 p-4 flex justify-between items-center md:hidden`}>
        <div className={`font-serif text-${color.secondary} text-xl`}>
          {config.title} Admin
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-white"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isSidebarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </Button>
      </header>

      {/* Sidebar */}
      <aside
        className={`bg-${
          color.primary
        }-light w-full md:w-64 flex-shrink-0 border-r border-white/10 md:flex flex-col 
                    ${
                      isMobile
                        ? isSidebarOpen
                          ? "fixed inset-0 z-50 block"
                          : "hidden"
                        : "flex"
                    }`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-white/10">
          <Link
            to="/admin"
            className={`font-serif text-${color.secondary} text-xl flex items-center`}
          >
            {config.title}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                location.pathname === link.path
                  ? `bg-${color.primary} text-${color.secondary}`
                  : `text-white/70 hover:bg-${color.primary}/50`
              }`}
            >
              <svg
                className="w-5 h-5 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {link.icon === "home" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                )}
                {link.icon === "box" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 7l-8-4-8 4m16 0v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7m16 0l-8 4m-8-4l8 4"
                  />
                )}
                {link.icon === "file-text" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                )}
                {link.icon === "image" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                )}
                {link.icon === "message-square" && (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                )}
              </svg>
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-white/10">
          <Button
            variant="ghost"
            className={`w-full justify-start text-white/70 hover:text-white hover:bg-${color.primary}/50`}
            onClick={handleLogout}
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Sign Out</span>
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-y-auto bg-${color.background}`}>
        <div className="p-6">
          <div className="mb-8">
            <h1 className={`font-serif text-2xl md:text-3xl text-${color.secondary}`}>
              {title}
            </h1>
            <div className={`w-16 h-1 bg-${color.secondary}/30 mt-3`}></div>
          </div>

          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
