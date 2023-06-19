import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import Sertifikat from "./components/Sertifikat";
import Footer from "./components/Pages/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Sertifikat />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
