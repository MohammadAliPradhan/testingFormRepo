import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Home = () => <h1>Hi, this is Ali</h1>;
const About = () => <h1>This is the About page</h1>;

const App = () => {
  return (
    <Router>
      Some one is behind every report we are hearing
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
