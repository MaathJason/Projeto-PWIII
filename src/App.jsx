import './App.css';
import Contador from './components/Contador/index';
import Maath from './components/Maath/index';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Welcome from './components/Welcome/index';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Contador" Component={Contador} />
        <Route path="/Maath" Component={Maath} />
        <Route path="/Welcome" Component={Welcome} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

