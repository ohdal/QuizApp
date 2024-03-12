import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import NotePage from "./pages/NotePage";
import ResultPage from "./pages/ResultPage";

const mode = import.meta.env.MODE;

const router_base = [
  { path: "/", element: <HomePage /> },
  { path: "/quiz", element: <QuizPage /> },
  { path: "/result", element: <ResultPage /> },
  { path: "/note", element: <NotePage /> },
];

const router = createBrowserRouter(router_base);
const routerGit = createBrowserRouter(router_base, { basename: "/QuizApp" });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={mode === "github" ? routerGit : router} />
  </React.StrictMode>
);
