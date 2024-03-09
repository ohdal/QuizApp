import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import NotePage from "./pages/NotePage";

const routes = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/quiz", element: <QuizPage /> },
  { path: "/note", element: <NotePage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
