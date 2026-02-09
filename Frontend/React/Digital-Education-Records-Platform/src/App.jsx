import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./HomePage/Login";
import ThemeToggle from "./Components/ThemToggle";
import Signup from "./HomePage/Signup/Signup";

function App() {
  return (
    <BrowserRouter>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
