import { useState, useEffect } from 'react'
//despues de importar react dom router, importarlo
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//recordar quitar(?
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import SignUp from './components/SignUp';
import Products from './components/Products';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
    let lastScroll = 0;

    // Transicion de la barra de navegacion pra que se esconda cuando el usuario scrolea
    const controlNavbar = () => {
        if (window.scrollY > lastScroll) {
            /*compara el valor del scroll con el valor previo, si este cambia y el nuevo valor 
            es mayor, se esconde la barra de navegacion*/
            setShowNavbar(false);
        } else {
            //de lo contrario, si el valor disminuye, osea si el valor disminuye se esconde
            setShowNavbar(true);
        }
        lastScroll = window.scrollY; /* actualiza, para que lastScroll no sea siempre = 0, 
        sino que el previo valor se convierta en lastScroll*/
    };

    useEffect(() => {
        //Evente listener
        window.addEventListener('scroll', controlNavbar);

        //Limpia
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

  return (
    /*Esta es la utilizacion de router que le mencione, igual me gusto mas la que usamos en clase, provare de usarla*/
      <Router>
        <div>
          {/*estava teniendo problemas con esconder y mostrar la barra de navegacion hasta que arregle esto*/}
          <nav className={`navbar ${!showNavbar ? 'navbar-hidden' : ''}`}>
          <ul>
            <li><Link className='link-style' to="/components/Login">Login</Link></li>
            <li><Link className='link-style' to="/components/SignUp">Sign Up</Link></li>
          </ul>
        </nav>
          
        <Routes>
        <Route path="/" element={<Products />} />
          <Route path="/components/Login" element={<Login />} />
          <Route path="/components/SignUp" element={<SignUp />} /> 
        </Routes>
        </div>
      </Router>
    
  );
}

export default App;
