
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return <h1>Welcome to Food Donation System!</h1>;
}

function About() {
  return <h1>About FoodShare.</h1>;
}

function Donate() {
  return <h1>Donate Food Here</h1>;
}

function App() {
  return (
    <div>
      <nav style={{ padding: '20px', background: '#dff0df' }}>
        <Link to="/" style={{ margin: '15px' }}>Home</Link>
        <Link to="/about" style={{ margin: '15px' }}>About</Link>
        <Link to="/donate" style={{ margin: '15px' }}>Donate</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </div>
  );
}

export default App;
