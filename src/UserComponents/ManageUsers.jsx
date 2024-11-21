import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storeUsers = localStorage.getItem("users");
    if (storeUsers) {
      setUsers(JSON.parse(storeUsers));
    } else {
      setUsers([]);
    }
  }, []);

  return (
    <div style={{ width: "700px" }}>
      <UserList users={users} />
    </div>
  );
};

export default ManageUsers;
