import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { User } from "../types";
import UserForm from "./UserForm";

interface UserDialogProps {
  open: boolean;
  editingUser: User | null;
  onClose: () => void;
  onSubmit: (user: User) => void;
}

const UserDialog: React.FC<UserDialogProps> = ({
  open,
  editingUser,
  onClose,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
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
          onSubmit={onSubmit}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
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
  );
};

export default UserDialog;
