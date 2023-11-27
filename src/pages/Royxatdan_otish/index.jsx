import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Box, Button, Paper, TextField } from '@mui/material';
import { Flag } from '@mui/icons-material';

export default () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      login: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 3));
    },
  });

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={formik.handleSubmit} style={{ width: 300 }}>
        <TextField
          sx={{ marginBottom: 2 }}
          fullWidth
          id="firstname"
          name="firstname"
          label="Ismingiz"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          sx={{ marginBottom: 2 }}
          fullWidth
          id="lastname"
          name="lastname"
          label="Familyangiz"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          sx={{ marginBottom: 2 }}
          fullWidth
          id="login"
          name="login"
          label="Login"
          value={formik.values.login}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 2 }}
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

