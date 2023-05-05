import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/Navbar/Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Inscription from './Components/Inscription/Inscription';
import Connexion from './Components/Connexion/Connexion';
import Password from './Components/lost/Password';

function App() {
  return (
    <div className="App">
       <NavBar/>
       

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/inscription' element={<Inscription/>}/>
      <Route path='/connexion' element={<Connexion/>}/>
      <Route path='/Password' element={<Password/>}/>

    </Routes>
       
    </div>
  );
}

export default App;
