import { useState } from "react";

const Hook2 = () => {
  let [bookList, updateBook] = useState(["HTML", "CSS", "Bootstrap"]);
  let [newBook, pickBook] = useState("Test Book");

  const save = () => {
    updateBook([...bookList, newBook]);
    pickBook("");
  };

  const deleteBook = (index) => {
    bookList.splice(index, 1);
    updateBook([...bookList]);
  };

  return (
    <div className="container">
      <h1> Use of useState() function : {newBook} </h1>
      <p>
        Enter Book Name:
        <input
          type="text"
          onChange={(obj) => pickBook(obj.target.value)}
          value={newBook}
        ></input>
        <button onClick={save}>Save</button>
      </p>

      <table>
        <thead>
          <tr>
            <th>Serail No.</th>
            <th>Book Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{book}</td>
                <td>
                  <button onClick={deleteBook.bind(this, index)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};


export default Hook2;