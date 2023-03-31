import { useMutation } from "@apollo/client";
import { useState } from "react";
import { EDIT_AUTHOR, ALL_AUTHORS } from "../queries";

const AuthorBirthForm = () => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }],
  });

  const submit = (event) => {
    event.preventDefault();

    editAuthor({ variables: { name, born } });

    setName("");
    setBorn("");
  };

  return (
    <div>
      <h2>Edit Birth Year</h2>
      <form onSubmit={submit}>
        <div>
          Name{" "}
          <input
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
        <div>
          Year{" "}
          <input
            value={born}
            onChange={({ target }) => setBorn(parseInt(target.value))}
          />
        </div>
        <button type="submit">add</button>
      </form>
    </div>
  );
};

export default AuthorBirthForm;
