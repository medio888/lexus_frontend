import MainLexus from "../MainLexus";

interface Category {
  id: number;
  name: string;
}

interface HomeProps {
  categories: Category[];
  loading: boolean;
  error: string | null;
}

const Home: React.FC<HomeProps> = ({ categories, loading, error }) => {
  return (
    <div style={{ padding: "20px" }}>
      <MainLexus />

      <h1>Категории</h1>

      {loading && <p>Загрузка...</p>}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {!loading && !error && (
        <>
          {categories.length === 0 && <p>Категории не найдены</p>}
          {categories.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              {item.name}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;