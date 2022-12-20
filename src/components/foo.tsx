import React from "react";

const foo = () => {
  const data = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Victor Wayne" },
    { id: 3, name: "Jane Doe" },
  ];

  return;
  <div className="users">
    {data.map((user) => (
      <div className="user">{user.name}</div>
    ))}
  </div>;
};

export default foo;
