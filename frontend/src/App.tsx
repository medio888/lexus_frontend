import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

interface Category {
  id: number;
  name: string;
}

function App() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const res = await fetch(import.meta.env.VITE_API_BASE || "http://127.0.0.1:8000/api/");
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }
        const data: Category[] = await res.json();
        setCategories(Array.isArray(data) ? data : []);
      } catch (err: unknown) {
        console.error("Ошибка загрузки категорий:", err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Неизвестная ошибка");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              categories={categories}
              loading={loading}
              error={error}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;