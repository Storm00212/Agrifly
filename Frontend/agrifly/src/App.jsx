import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Header with navigation + auth controls */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Left side navigation */}
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Right side auth controls */}
        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </header>

      {/* Main content where pages load */}
      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Protect routes with Clerk */}
          <Route
            path="/about"
            element={
              <SignedIn>
                <About />
              </SignedIn>
            }
          />

          <Route
            path="/contact"
            element={
              <SignedIn>
                <Contact />
              </SignedIn>
            }
          />

          {/* 404 fallback */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
