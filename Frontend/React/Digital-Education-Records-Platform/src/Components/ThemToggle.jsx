import { useTheme } from "../Context/ThemeContex";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
