import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Grid } from "@mui/material";
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
  website: Yup.string()
    .matches(
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
      "Invalid URL, for example: ambrose.net"
    )
    .required("Website is required"),
});

const UserForm: React.FC<UserFormProps> = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <Form style={{ paddingTop: "8px" }} id="user-form">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="username"
                label="Username"
                fullWidth
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="email"
                label="Email"
                type="email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Field
                as={TextField}
                name="phone"
                label="Phone"
                type="tel"
                fullWidth
                error={touched.phone && Boolean(errors.phone)}
                helperText={touched.phone && errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                as={TextField}
                name="website"
                label="Website"
                type="string"
                fullWidth
                error={touched.website && Boolean(errors.website)}
                helperText={touched.website && errors.website}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
