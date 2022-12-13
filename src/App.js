import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './componentes/Header.js';
import Nav from './componentes/Nav.js'
import Footer from './componentes/Footer.js';

import Home from './paginas/Home.js';
import Nosotros from './paginas/Nosotros.js';
import Novedades from './paginas/Novedades.js';
import Contacto from './paginas/Contacto.js';

function App() {
  return (
    <div className="App">
      <Header /> 

      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/nosotros" element={Nosotros} />
        <Route path="/novedades" element={Novedades} />
        <Route path="/contacto" element={Contacto} />
      </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}      

export default App;
