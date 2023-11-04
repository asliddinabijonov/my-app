import { Box, Button, TextField } from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default () => {
  // useState
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  // useNavigate
  const navigate = useNavigate();
  // useEffect
  useEffect(() => {
    axios.get("http://localhost:8000/admin").then((res) => {
      setData(res.data[0]);
    });
  }, []);
  // formik
  const formik = useFormik({
    initialValues: {
      name: name,
      password: password,
    },
    onSubmit: (values) => {
      if (data.name == values.name && data.password == values.password) {
        navigate("/menu");
      } else {
        alert("salom");
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <br />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </Box>
      {data.title}
    </form>
  );
};
