import { useAdminContext } from "../context/AdminContext";

export function useColor() {
  const { config } = useAdminContext();

  return {
    primary: config.tailwindTheme?.colors?.primary ?? "primary",
    secondary: config.tailwindTheme?.colors?.secondary ?? "secondary",
    tertiary: config.tailwindTheme?.colors?.tertiary ?? "tertiary",
    background: config.tailwindTheme?.colors?.background ?? "background",
  };
}
