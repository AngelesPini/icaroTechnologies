
import './App.css';
import { Route } from 'react-router-dom';



// atomos
import Botones from './components/atomos/botones/botones';
import Titulos from './components/atomos/textos/titulos';
import Subtitulos from './components/atomos/textos/subtitulos'
import Menu from './components/atomos/textos/menu';
import Cuerpo from './components/atomos/textos/cuerpo';
import Input from './components/atomos/input/input';


import Language from'./assetes/iconos/language.png';
// moleculas

import Form from './components/moleculas/form/form';
// organismos

import Header from './components/organismos/header/header';
import SoftwareEscalar from './components/organismos/softwareEscalar/softwareEscalar';
import NavBar from './components/organismos/navBar/navBar';
import PorqueElegirnos from './components/organismos/porqueElegirnos/porqueElegirnos';
import Transformamos from './components/organismos/trasnformamos/transformamos';
import Contacto from './components/organismos/contacto/contacto';
import Capacita from './components/organismos/capacita/capacita';
import Footer from './components/organismos/footer/footer';
import NavBarMobile from './components/organismos/navBarMobile/navBarMobile';
function App() {


  return (
    <div className="App">

      <NavBarMobile/>
        <NavBar/>
 {/* <Contacto/>
       <Capacita/> */}
     <Header/>
      <PorqueElegirnos/>
      <SoftwareEscalar/>
    <Transformamos/> 
    <Footer/>

    </div>
  );
}

export default App;
