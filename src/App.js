
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner} from './components/Banner';
import { Skills } from './components/Skills';
import {Technology} from './components/Technologys';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <div className='content'>
        <Skills/>
      <Technology/>
      </div>
      
    </div>
  );
}

export default App;
