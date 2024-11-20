import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  debugger;
  useEffect(() => {
    const storeUsers = localStorage.getItem("users");
    console.log(storeUsers);
    debugger;
    if (storeUsers) {
      setUsers(JSON.parse(storeUsers));
    } else {
      setUsers([]);
    }
    console.log(users);
  }, []);

  return (
    <>
      <UserList users={users} />
    </>
  );
};

export default ManageUsers;
