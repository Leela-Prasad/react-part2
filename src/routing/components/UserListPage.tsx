function UserListPage() {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 1, name: "John" },
    { id: 1, name: "Alice" },
  ];
  return (
    <>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item">
            <a href="#">{user.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UserListPage;
