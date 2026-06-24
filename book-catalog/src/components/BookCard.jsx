function BookCard({ book }) {
  return (
    <article className="book-card">
      <img
        className="cover-book-image"
        src={book.coverImage}
        alt={book.title}
      />

      <div className="book-card-content">
        <div className="book-card-header">
          <div>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <p className="genre-year-pages">
              <span>{book.genre}</span>
              <span>{book.year}</span>
              <span>{book.pages} str.</span>
            </p>
          </div>
          <span className="rating">Rating: {book.rating}</span>
        </div>
        <p className="description">{book.description}</p>
      </div>
    </article>
  );
}

export default BookCard;
