import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import { User } from "../types";

interface UserFormProps {
  initialValues: User;
  onSubmit: (values: User) => void;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  website: Yup.string().required("Website is required"),
});

const UserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Field
            as={TextField}
            name="name"
            label="Name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <Field
            as={TextField}
            name="username"
            label="Username"
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
          />
          <Field
            as={TextField}
            name="email"
            label="Email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field
            as={TextField}
            name="phone"
            label="Phone"
            error={touched.phone && Boolean(errors.phone)}
            helperText={touched.phone && errors.phone}
          />
          <Field
            as={TextField}
            name="website"
            label="Website"
            error={touched.website && Boolean(errors.website)}
            helperText={touched.website && errors.website}
          />
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
