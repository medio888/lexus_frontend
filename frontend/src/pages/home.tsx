import MainLexus from "../MainLexus";

interface Category {
  id: number;
  name: string;
}

interface HomeProps {
  categories: Category[];
}

const Home: React.FC<HomeProps> = ({ categories }) => {
  return (
    <div style={{ padding: "20px" }}>
      <MainLexus />

      <h1>Категории</h1>

      {categories.map((item) => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Home;