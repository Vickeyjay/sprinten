import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import HomePage from "./components/Homepage/home";
import TemplateChat from "./components/Templatechat/chat";
import Pop from "./components/Popup/popUp";
// import HamburgerMenu from "./components/Hamburger/hamburger";


function App() {
  return (
    <Router>
      <Navbar />
      {/* <Pop /> */}
      {/* <HamburgerMenu /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chat" element={<TemplateChat />} />
      </Routes>
    </Router>
  );
}

export default App;
