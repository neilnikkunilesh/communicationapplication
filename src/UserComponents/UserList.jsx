import React from "react";

const UserList = ({ users }) => {
  console.log(users);
  return (
    <>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((item, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  // onClick={editUser}
                >
                  Edit
                </span>{" "}
                |&nbsp;
                <span style={{ color: "red", cursor: "pointer" }}>Delete</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserList;
