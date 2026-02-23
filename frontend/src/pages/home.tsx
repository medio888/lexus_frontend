function Home({ categories }: { categories: { id: number; name: string }[] }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Категории</h1>

      {categories.map(item => (
        <div key={item.id} style={{ marginBottom: "10px" }}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default Home;