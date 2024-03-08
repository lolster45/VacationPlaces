// React...
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Pages...
import Home from "./pages/HomeFolder/Home";
import Browse from "./pages/BrowseFolder/Browse";

// Styles...
import "./app.css"

function App() {
  return (
    <section id="app">
      <BrowserRouter basename="/">
        <nav>
          <Link to="/">
            <span>Home</span>
          </Link>
          <Link to="/browse">
            <span>Browse</span>
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/browse" element={<Browse />} />
          </Routes>
        </main>
      </BrowserRouter>
    </section>
  );
}

export default App;
