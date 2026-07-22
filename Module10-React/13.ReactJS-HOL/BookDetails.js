function BookDetails() {
  const books = [
    {
      id: 1,
      name: "React Guide",
      price: 500
    },
    {
      id: 2,
      name: "Java Programming",
      price: 650
    }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h4>{book.name}</h4>
          <p>Price: ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;