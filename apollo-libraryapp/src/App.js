import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./App.css";
import Authors from "./components/Authors";
import Home from "./components/Home";
import { ALL_AUTHORS, ALL_BOOKS } from "./queries";
import Books from "./components/Books";

function App() {
  const authorResult = useQuery(ALL_AUTHORS);
  const bookResult = useQuery(ALL_BOOKS);
  console.log("books", bookResult);

  const padding = {
    padding: 5,
  };
  if (authorResult.loading || bookResult.loading) {
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
        <Link style={padding} to="/books">
          books
        </Link>
      </div>
      <Routes>
        <Route
          path="/authors"
          element={<Authors authors={authorResult.data.allAuthors} />}
        />
        <Route
          path="/books"
          element={<Books books={bookResult.data.allBooks} />}
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
