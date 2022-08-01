import NavBar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
