import React from "react";

import { useGetUserQuery, useCheckoutBookMutation } from "../store";

export const Account = () => {
  const { data: user, refetch } = useGetUserQuery(
    localStorage.getItem("token"),
    {
      skip: !localStorage.getItem("token"),
    }
  );

  const [returnBookApi] = useCheckoutBookMutation();

  const returnBook = async (book) => {
    await returnBookApi(book);
    await refetch();
  };

  return (
    <>
      {user.books.map((book) => (
        <div key={book.id}>
          {book.title}
          <button onClick={() => returnBook(book)}>Return book</button>
        </div>
      ))}
    </>
  );
};
