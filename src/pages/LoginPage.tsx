import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";

type LoginPageProps = {
  loginWithEmailPassword: (
    email: string,
    password: string
  ) => Promise<
    | {
        data: {
          user: import("@supabase/supabase-js").AuthUser;
          session: import("@supabase/supabase-js").AuthSession;
          weakPassword?: import("@supabase/supabase-js").WeakPassword;
        };
        error: null;
      }
    | {
        data: null;
        error: unknown;
      }
  >;
};

const LoginPage = ({ loginWithEmailPassword }: LoginPageProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await loginWithEmailPassword(email, password);

      if (error) {
        console.error("Login error:", error);
        toast({
          title: "Login Failed",
          description:
            typeof error === "string"
              ? error
              : "Invalid credentials or you don't have access to this project.",
          variant: "destructive",
        });
        return;
      }

      if (data) {
        toast({
          title: "Login Successful",
          description: "Welcome back!",
        });
        navigate("/admin");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-6xl text-secondary">Velour Essence</h1>
          <p className="text-black/60 mt-2">Admin Dashboard</p>
        </div>

        <div className="bg-primary-light border border-secondary/20 rounded-lg shadow-lg p-8">
          <h2 className="font-serif text-2xl text-secondary mb-6 text-center">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-primary-light/20 border-secondary/30 text-white placeholder-white/50"
                placeholder="admin@example.com"
                required
                disabled={isLoading}
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-white">
                  Password
                </Label>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-primary-light/20 border-secondary/30 text-white placeholder-white/50"
                required
                disabled={isLoading}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-secondary text-black hover:bg-secondary/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </span>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center text-white/50 text-sm">
            <p>
              For testing purposes, please contact the administrator for login
              credentials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
