import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'; 
import Resume from './components/Resume'
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Projects />
       <Resume/>
      <Contact />
     
    </div>
  );
}
export default App;
