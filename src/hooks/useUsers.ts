import { useState, useEffect } from "react";
import UserService from "../services/userService";
import { User } from "../types";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await UserService.getUsers();
        setUsers(response);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async (user: User) => {
    try {
      const response = await UserService.addUser(user);
      setUsers([...users, response]);
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };

  const updateUser = async (user: User) => {
    try {
      const response = await UserService.updateUser(user.id, user);
      setUsers(users.map((u) => (u.id === user.id ? response : u)));
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const deleteUser = async (id: number) => {
    try {
      await UserService.deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return {
    users,
    loading,
    addUser,
    updateUser,
    deleteUser,
  };
};

export default useUsers;
