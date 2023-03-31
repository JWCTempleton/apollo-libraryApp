const Authors = ({ authors }) => {
  return (
    <div>
      <h1>Authors</h1>
      {authors.map((author) => (
        <div style={{ padding: "12px 0px" }}>
          <p>
            Name: <b>{author.name}</b>
          </p>
          <p>
            Born: <b>{author.born}</b>
          </p>
          <p>
            Book Count: <b>{author.bookCount}</b>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Authors;
