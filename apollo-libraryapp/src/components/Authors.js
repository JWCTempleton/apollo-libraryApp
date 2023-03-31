import AuthorBirthForm from "./AuthorBirthForm";
import "./Authors.css";

const Authors = ({ authors }) => {
  return (
    <div>
      <h1>Authors</h1>
      <AuthorBirthForm />
      {/* {authors.map((author) => (
        <div key={author.id} style={{ padding: "12px 0px" }}>
          <p>
            Name: <b>{author.name}</b>
          </p>
          <p>
            Born: <b>{author.born ? author.born : "No known birthyear"}</b>
          </p>
          <p>
            Book Count: <b>{author.bookCount}</b>
          </p>
        </div>
      ))} */}
      <table id="authors">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Born</th>
            <th>Book Count</th>
          </tr>
          {authors.map((author) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.born}</td>
              <td>{author.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Authors;
