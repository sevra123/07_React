import { useState, useEffect } from "react";
import books from "../data/books.json";
import BookCard from "../components/BookCard";

function BookCatalogPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredBooks = books.filter((book) => {
    const searchText = search.toLowerCase();

    return (
      book.title.toLowerCase().includes(searchText) ||
      book.author.toLowerCase().includes(searchText)
    );
  });

  const sortedBooks = [...filteredBooks];

  if (sortBy == "year-desc") {
    sortedBooks.sort((a, b) => b.year - a.year);
  }
  if (sortBy == "year-asc") {
    sortedBooks.sort((a, b) => a.year - b.year);
  }
  if (sortBy == "rating-desc") {
    sortedBooks.sort((a, b) => b.rating - a.rating);
  }
  if (sortBy == "pages-asc") {
    sortedBooks.sort((a, b) => a.pages - b.pages);
  }
  if (sortBy == "pages-desc") {
    sortedBooks.sort((a, b) => b.pages - a.pages);
  }

  const itemsPerPage = 4;
  const totalPages = Math.ceil(sortedBooks.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentBooks = sortedBooks.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy]);

  return (
    <main className="app">
      <section className="page-header">
        <p className="eyebrow">Book Catalog</p>

        <h1>Browse programming, design and productivity books.</h1>
      </section>
      <section className="book-controls">
        <div className="control-group">
          <label htmlFor="search">Search books</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by title or author"
          />
        </div>

        <div className="control-group">
          <label htmlFor="sort">Sort results</label>
          <select
            id="sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
          >
            <option value="default">Default sorting</option>
            <option value="year-desc">Year: Newest first</option>
            <option value="year-asc">Year: Oldest first</option>
            <option value="rating-desc">Rating: Highest first</option>
            <option value="pages-asc">Pages: Shortest first</option>
            <option value="pages-desc">Pages: Longest first</option>
          </select>
        </div>
      </section>
      <p className="results-count">Results: {sortedBooks.length}</p>
      {currentBooks.length === 0 ? (
        <p className="empty-message">No books found</p>
      ) : (
        <section className="books-grid">
          {currentBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </section>
      )}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

export default BookCatalogPage;
