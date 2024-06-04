import React, { useState } from "react";
import { UserTable } from "../components";
import useUsers from "../hooks/useUsers";
import { User } from "../types";
import { Box, Button, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UserDialog from "../components/UserDialog";

const Home: React.FC = () => {
  const { users, loading, addUser, updateUser, deleteUser } = useUsers();
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [open, setOpen] = useState(false);

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setOpen(true);
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
    setOpen(false);
  };

  const handleClickOpen = () => {
    setEditingUser(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ padding: "2rem" }}>
      <Stack direction={"row"} justifyContent={"space-between"} mb={4}>
        <Typography variant="h6">User Management System</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add User
        </Button>
      </Stack>

      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />
      <UserDialog
        open={open}
        editingUser={editingUser}
        onClose={handleClose}
        onSubmit={handleFormSubmit}
      />
    </Box>
  );
};

export default Home;
