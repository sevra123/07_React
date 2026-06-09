import { useState, useEffect } from "react";

function UserSearch() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section>
      <h2>User Directory</h2>
      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search by name..."
      />
      {filteredUsers.length === 0 ? (
        <p>No users match your search.</p>
      ) : (
        <ul className="user-list">
          {filteredUsers.map((user) => (
            <li key={user.id} className="user-item">
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
export default UserSearch;
