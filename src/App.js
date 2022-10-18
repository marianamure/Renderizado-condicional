import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Formulario from "./Componentes/Formulario/Formulario";



/* 
Inicializar proyecto: npm start
Detener proyecto: Ctrl +C
*/

class App extends React.Component {
  render(){
    return(
      <div className= "container justify-content-center align-items-center">
        <Formulario/>
      </div>
    );

  }

}

export default App;
