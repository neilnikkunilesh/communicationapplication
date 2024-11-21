import React, { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import styles from "./UserListModule.module.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({ fullName: "", email: "" });
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState();

  const handleEditClose = () => setShowEditModal(false);
  const handleDeleteClose = () => setShowDeleteModal(false);

  const handleEditShow = (user) => {
    setShowEditModal(true);
    setSelectedUser(user);
  };

  // handle delete button
  const handleDeleteShow = (user) => {
    setShowDeleteModal(true);
    setSelectedUser(user);
  };

  // handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevState) => {
      const updateState = { ...prevState, [name]: value };
      return updateState;
    });
  };

  // Handle Save button
  const handleSave = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const updatedUsers = storedUsers.map((user) =>
      user.userId === selectedUser.userId
        ? { ...user, ...selectedUser } // Update the user if the userId matches
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setShowEditModal(false);
  };

  // delete selected user from localStoreage
  const handleDeleteUser = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const afterDeletedUsers = storedUsers.filter(
      (user) => user.userId !== selectedUser.userId
    );
    localStorage.setItem("users", JSON.stringify(afterDeletedUsers));
    setUsers(afterDeletedUsers);
    setShowDeleteModal(false);
  };
  // load users form local storage when component is mounted
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

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
            <tr key={item.userId}>
              <th>{index + 1}</th>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>
                <span
                  style={{ color: "blue", cursor: "pointer" }}
                  onClick={() => handleEditShow(item)}
                >
                  Edit
                </span>{" "}
                |&nbsp;
                <span
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={() => handleDeleteShow(item)}
                >
                  Delete
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.modelBody}>
            <form>
              <div className={styles.formGroup}>
                Full Name:{" "}
                <input
                  type="text"
                  name="fullName"
                  onChange={handleInputChange}
                  value={selectedUser?.fullName}
                />
              </div>
              <div className={styles.formGroup}>
                Email:{" "}
                <input
                  type="text"
                  name="email"
                  onChange={handleInputChange}
                  value={selectedUser?.email}
                />
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete User Modal */}
      <Modal show={showDeleteModal} onHide={handleDeleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleDeleteUser}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
