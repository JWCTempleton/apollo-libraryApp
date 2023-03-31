import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./App.css";
import Authors from "./components/Authors";
import Home from "./components/Home";
import { ALL_AUTHORS } from "./queries";

function App() {
  const result = useQuery(ALL_AUTHORS);

  const padding = {
    padding: 5,
  };
  if (result.loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          home
        </Link>
        <Link style={padding} to="/authors">
          authors
        </Link>
      </div>
      <Routes>
        <Route
          path="/authors"
          element={<Authors authors={result.data.allAuthors} />}
        />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i>Library app, JWCT Designs 2023</i>
      </div>
    </Router>
  );
}

export default App;
