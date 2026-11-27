import { Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Donate from './assets/pages/Donate';
import Login from './assets/pages/Login';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
export default App;
