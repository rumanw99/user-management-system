import React, { useState } from "react";
import { UserTable, UserForm } from "../components";
import useUsers from "../hooks/useUsers";
import { User } from "../types";

const Home: React.FC = () => {
  const { users, loading, addUser, updateUser, deleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleEdit = (user: User) => {
    setEditingUser(user);
  };

  const handleDelete = (id: number) => {
    deleteUser(id);
  };

  const handleFormSubmit = (user: User) => {
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setEditingUser(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Management System</h1>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <UserForm
        initialValues={
          editingUser || {
            id: 0,
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
          }
        }
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default Home;
