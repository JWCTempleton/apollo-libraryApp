import { useQuery } from "@apollo/client";
import "./App.css";
import Authors from "./components/Authors";
import { ALL_AUTHORS } from "./queries";

function App() {
  const result = useQuery(ALL_AUTHORS);

  if (result.loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Authors authors={result.data.allAuthors} />
    </div>
  );
}

export default App;
