import BookForm from "./BookForm";

const Books = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
      <BookForm />
      {books.map((book) => {
        return (
          <div key={book.id} style={{ padding: "12px 0px" }}>
            <p>
              Title: <b>{book.title}</b>
            </p>
            <p>
              Author: <b>{book.author}</b>
            </p>
            <p>
              Published: <b>{book.published}</b>
            </p>
            {book.genres.length !== 0 && (
              <p>
                {/* Genre: <b>{book.genres ? book.genres.join(", ") : ""}</b> */}
                Genre: <b>{book.genres.join(", ")}</b>
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Books;
