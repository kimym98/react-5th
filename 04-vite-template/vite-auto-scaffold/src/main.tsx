import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AvatarListPage from "./pages/AvatarList";
import "./styles/main.css";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AvatarListPage />
  </StrictMode>
);
