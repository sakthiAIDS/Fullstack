
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./assets/pages/Home.jsx";
import About from "./assets/pages/About.jsx";
import Donate from "./assets/pages/Donate.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        {/* Navigation Bar */}
        <nav className="flex flex-wrap items-center justify-between bg-green-700 px-8 py-5 text-white shadow-md">

          <h1 className="text-2xl font-bold">
            Food Donation System
          </h1>

          <div className="flex flex-wrap gap-6 font-semibold">

            <Link to="/" className="hover:text-green-200">
              Home
            </Link>

            <Link to="/About" className="hover:text-green-200">
              About
            </Link>

            <Link to="/Donate" className="hover:text-green-200">
              Donate
            </Link>

          </div>
        </nav>

        {/* Pages */}
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/About" element={<About />} />

          <Route path="/Donate" element={<Donate />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
