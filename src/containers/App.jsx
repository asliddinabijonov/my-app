import React from "react";
import { useRoutes } from "react-router";
import { home, loginerror } from "../routes/routes";

export default () => {
  const token = true;
  const content = useRoutes(token ? home : loginerror);
  return (
    <>
      <div>{content}</div>
    </>
  );
};
