import React, { useState } from "react";
import { UserTable, UserForm } from "../components";
import useUsers from "../hooks/useUsers";
import { User } from "../types";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{editingUser ? "Edit User" : "Add User"}</DialogTitle>
        <DialogContent>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            type="submit"
            form="user-form"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Home;
