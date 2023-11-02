import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../containers/Home";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Auth from "../containers/Auth";

export const home = [
  {
    element: <Home />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
];

export const loginerror = [
	{
		element: <Auth />,
		children: [
			{ path: "/", element: <Login /> },
			{ path: "/login", element: <Login /> },
			{ path: "*", element: <Navigate to="/login" /> },
		],
	},
];