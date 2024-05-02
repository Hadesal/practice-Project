import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import UserDashboardPage from "./pages/UserDashBoard/UserDashboardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import MenuPage from "./pages/MenuPage/MenuPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
