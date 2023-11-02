import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPost] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    axios.get("http://localhost:8000/admin").then((res) => {
      setPost(res.data[0]);
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      name: name,
      password: password,
    },
    onSubmit: (values) => {
      // console.log(values);
      if (post.name == values.name && post.password == values.password) {
        navigate("/contact");
      } else {
        alert("salom");
      }
      // navigate("/contact");
    },
  });
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <br />
      <form onSubmit={formik.handleSubmit}>
        <Paper
          elevation={24}
          sx={{
            width: { md: 500, sm: 500, xs: 300 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            borderRadius: 2,
          }}
        >
          <Typography variant="h5" sx={{ padding: 3 }}>
            Login
          </Typography>
          <br />
          <TextField
            id="name"
            name="name"
            placeholder="Name"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          <br />
          <TextField
            id="password"
            name="password"
            type="password"
            placeholder="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          <br />
          <Button color="primary" variant="contained" type="submit">
            Submit
          </Button>
          <br />
        </Paper>
      </form>
    </Box>
  );
};
