import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Profile } from "./profile";
import { About } from "./about";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Profile />

    <main className="container">
      <About />
    </main>
  </StrictMode>,
);
