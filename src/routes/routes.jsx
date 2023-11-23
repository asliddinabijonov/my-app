import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../containers/Home";
import Contact from "../pages/Contact";
import Auth from "../containers/Auth";
import Quation from "../pages/Quation";
import Kirish from "../pages/Kirish";
import Royhatdan_otish from "../pages/Royxatdan_otish"


export const home = [
  {
    element: <Home />,
    children: [
      { path: "/", element: <Quation /> },
      { path: "/kirish", element: <Kirish /> },
      { path: "/royhatdan_otish", element: <Royhatdan_otish /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export const loginerror = [
  {
    element: <Auth />,
    children: [
      { path: "*", element: <Navigate to="/login" /> },
    ],
  },
];
