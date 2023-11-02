import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default () => {
  const navigate = useNavigate();
  const bos = () => {
    navigate("/");
  };
  return (
    <div>
      <Button onClick={() => bos()}>salom</Button>
    </div>
  );
};
