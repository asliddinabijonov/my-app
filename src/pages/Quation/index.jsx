import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default () => {
  const naigat = useNavigate();
  const bos = (id) => {
    if(id == 1)
    naigat("/kirish");
  else naigat("/royhatdan_otish")
  };
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "end", padding: 1 }}>
        <Button onClick={() => bos(1)}>Kirish</Button>
        <Button onClick={() => bos(2)}>Ro'yxatdan o'tish</Button>
      </Box>
      <Box
        sx={{
          height: "800px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" sx={{ color: "red" }}>
          Zakovat intelektul o'yini
        </Typography>
        <Button>O'yinni boshlash</Button>
      </Box>
    </>
  );
};
