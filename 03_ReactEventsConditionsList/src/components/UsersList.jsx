function UsersList() {
  const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "User" },
  ];

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Role: {user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
