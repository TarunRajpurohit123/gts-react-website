import BackgroundLine from "./components/shared/BackgroundLine/BackgroundLine";
import Home from './pages/HomePage/Home';
import ContactPage from './pages/ContactPage/ContactPage'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Nav from "./components/layouts/Navbar/Nav";
import About from "./pages/About/About";
import ServicePage from "./pages/ServicesPage/ServicePage";
import OurProjects from "./pages/OurProjects/OurProjects";


function App() {
  return (
    <>
      <BackgroundLine />
      
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<ServicePage />} />
          <Route path="/about" element={<OurProjects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;


