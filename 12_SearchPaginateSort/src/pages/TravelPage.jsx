import { useState, useEffect } from "react";
import destinations from "../data/destinations.json";
import TravelCard from "../components/TravelCard";

function TravelPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDestinations = destinations.filter((destination) => {
    const searchText = search.toLowerCase();

    return (
      destination.name.toLowerCase().includes(searchText) ||
      destination.country.toLowerCase().includes(searchText)
    );
  });

  const sortedDestinations = [...filteredDestinations];

  if (sortBy == "price-asc") {
    sortedDestinations.sort((a, b) => a.price - b.price);
  }
  if (sortBy == "price-desc") {
    sortedDestinations.sort((a, b) => b.price - b.price);
  }
  if (sortBy == "rating-desc") {
    sortedDestinations.sort((a, b) => b.rating - a.rating);
  }
  if (sortBy == "duration-asc") {
    sortedDestinations.sort((a, b) => a.duration - b.duration);
  }

  const itemsPerPage = 6;
  const totalPages = Math.ceil(sortedDestinations.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentDestinations = sortedDestinations.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, sortBy]);

  return (
    <main className="app">
      <section className="page-header">
        <p className="eyebrow">Explore the World</p>

        <h1>Travel Destinations</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi
          voluptatem dignissimos rem voluptate nobis facilis eveniet minus
          provident est alias, voluptas culpa ratione consectetur labore vitae
          tenetur? Delectus, nostrum nemo!
        </p>
      </section>
      <section className="travel-controls">
        <div className="control-group">
          <label htmlFor="search">Search destinations</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by destination or country"
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
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
            <option value="duration-asc">Duration: Shortest First</option>
          </select>
        </div>
      </section>
      {currentDestinations.length === 0 ? (
        <p className="empty-message">No destinations found</p>
      ) : (
        <section className="travel-grid">
          {currentDestinations.map((destination) => (
            <TravelCard key={destination.id} destination={destination} />
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

export default TravelPage;
