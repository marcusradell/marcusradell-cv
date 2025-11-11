import { StrictMode, type ReactNode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Profile } from "./profile";
import { About } from "./about";

type Props = { children: ReactNode };

function Container({ children }: Props) {
  return <div className="container">{children}</div>;
}

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
