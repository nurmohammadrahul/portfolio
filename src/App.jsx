
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css'; 

const App = () => {
  return (
    <div>
      <Navbar />
      
      <Home />
      <About/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
       

        
      
    </div>
  );
};

export default App;
