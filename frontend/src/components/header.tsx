import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <header>
      <div>
        <Link to="/">
          <img
            src="https://logosmarcas.net/wp-content/uploads/2021/09/Lexus-Simbolo-650x366.png"
            alt="Lexus Logo"
            width={120}
          />
        </Link>

        <nav>
          <Link to="/models">Модели</Link>
          <Link to="/used">Авто с пробегом</Link>
          <Link to="/offers">Спецпредложения</Link>
          <Link to="/finance">Финансы</Link>
          <Link to="/service">Сервис</Link>
          <Link to="/world">Мир Lexus</Link>
          <Link to="/test-drive">Тест-драйв</Link>
        </nav>

        <p>0 (555) 02 43 89</p>

        <div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Поиск..."
          />
          {search && (
            <button onClick={() => setSearch("")}>
              Отмена
            </button>
          )}
        </div>
      </div>

      {isOpen && (
        <div>
          <Link to="/models" onClick={() => setIsOpen(false)}>Модели</Link>
          <Link to="/used" onClick={() => setIsOpen(false)}>Авто с пробегом</Link>
          <Link to="/offers" onClick={() => setIsOpen(false)}>Спецпредложения</Link>
          <Link to="/finance" onClick={() => setIsOpen(false)}>Финансы</Link>
          <Link to="/service" onClick={() => setIsOpen(false)}>Сервис</Link>
          <Link to="/world" onClick={() => setIsOpen(false)}>Мир Lexus</Link>
          <Link to="/test-drive" onClick={() => setIsOpen(false)}>Тест-драйв</Link>
        </div>
      )}
    </header>
  );
};

export default Header;