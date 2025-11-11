import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  About,
  Contact,
  Container,
  Copyright,
  Education,
  Experience,
  Profile,
  Skills,
} from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header>
      <Container>
        <Profile />
      </Container>
    </header>

    <main>
      <Container>
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </Container>
    </main>

    <footer>
      <Container>
        <Copyright />
      </Container>
    </footer>
  </StrictMode>,
);
