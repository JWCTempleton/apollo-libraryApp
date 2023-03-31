import { gql } from "@apollo/client";

export const ALL_AUTHORS = gql`
  query {
    allAuthors {
      name
      bookCount
      born
      id
    }
  }
`;

export const ALL_BOOKS = gql`
  query {
    allBooks {
      author
      published
      title
      id
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation createBook($title: String!, $published: Int!, $author: String!) {
    addBook(title: $title, published: $published, author: $author) {
      title
      published
      author
      id
    }
  }
`;
