import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.log("Ошибка:", err));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home categories={categories} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;