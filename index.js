function App() {
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    async function getData() {
      const response = await fetch("https://api.itbook.store/1.0/search/react");
      const json = await response.json();
      setData(json);
      setLoaded(true);
    }
    getData();
  }, []);
  console.log("loaded:", loaded, "data:", data);

  return (
    <>
      <div className="containerBackground">
      <div id="header" className="centered">
            <h1>React Components - IT Books</h1>
          </div>
        <div className="container">
          
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {loaded &&
              data.books.map((book, i) => <Book data={book} key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
