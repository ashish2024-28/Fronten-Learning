import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);

  return (
    <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
      <h1 className="text-xl font-bold">Ashish Kumar</h1>
      <button onClick={() => setDark(!dark)} className="text-xl">
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}
