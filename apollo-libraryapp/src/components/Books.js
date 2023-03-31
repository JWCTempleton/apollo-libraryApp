const Books = ({ books }) => {
  return (
    <div>
      <h2>Books</h2>
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
          </div>
        );
      })}
    </div>
  );
};

export default Books;
