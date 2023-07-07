
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import { Skills } from './components/Skills';
import {Technology} from './components/Technologys';
import { Project } from './components/Project';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'video-react/dist/video-react.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <div className='content'>
        <Skills/>
      <Technology/>
      <Project/>
      <Contact/>
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
