import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Profile } from "./profile";
import { About } from "./about";
import { Container } from "./container";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <Container>
        <Profile />
      </Container>
    </header>
    <Container>
      <main>
        <About />
      </main>
    </Container>
  </StrictMode>,
);
