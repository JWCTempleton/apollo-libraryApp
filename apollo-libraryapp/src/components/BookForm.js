import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOOK, ALL_BOOKS } from "../queries";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [published, setPublished] = useState("");
  const [author, setAuthor] = useState("");

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: ALL_BOOKS }],
  });

  const submit = (event) => {
    event.preventDefault();
    createBook({ variables: { title, published, author } });

    setTitle("");
    setPublished("");
    setAuthor("");
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
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default BookForm;
