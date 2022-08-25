import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      
      <div className='logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='logo' 
          alt='Logo' />
      </div>

      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
