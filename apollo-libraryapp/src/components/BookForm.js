import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOOK, ALL_BOOKS, ALL_AUTHORS } from "../queries";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState("");
  const [author, setAuthor] = useState("");
  const [genres, setGenres] = useState([]);
  const [newGenres, setNewGenres] = useState("");

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }, { query: ALL_AUTHORS }],
    onError: (error) => console.log(error),
  });

  const submit = (event) => {
    event.preventDefault();
    createBook({ variables: { title, published, author, genres } });

    setTitle("");
    setPublished("");
    setAuthor("");
    setGenres([]);
    setNewGenres("");
  };

  const handleGenre = (event) => {
    event.preventDefault();
    setGenres(genres.concat(newGenres));
    setNewGenres("");
  };

  return (
    <div>
      <h2>Create New Book</h2>
      <form onSubmit={submit}>
        <div>
          Title{" "}
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          Author{" "}
          <input
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          Published{" "}
          <input
            value={published}
            onChange={({ target }) => setPublished(parseInt(target.value))}
          />
        </div>
        <div>
          Genres{" "}
          <input
            value={newGenres}
            onChange={({ target }) => setNewGenres(target.value)}
          />
          <button onClick={handleGenre}>Add genre</button>
          {genres && (
            <div>
              <p>{genres.join()}</p>
            </div>
          )}
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default BookForm;
