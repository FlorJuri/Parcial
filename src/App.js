// El componente app es el padre de:
    //Cabecera
    //Listado
// ESTADO: App maneja dentro del estado el numero de elementos comprados.
// MÉTODOS: App debe tener un método que pueda aumentar el numero de elementos comprados y ser ejecutado por item.
// PROPS: App debe pasar por props lo necesario a sus componenetes internos.
import {useState} from "react";
import Cabecera from "./componentes/Cabecera";
import Listado from "./componentes/Listado";

function App() {
  const [elementosCarrito, setElementosCarrito] = useState(0);

  function comprar() {
      setElementosCarrito(elementosCarrito + 1);
  }

  return (
    <div className="App">
      <Cabecera elementosCarrito={elementosCarrito}/>
      <Listado agregar={agregarAlCarrito}/>
    </div>
  );
}

export default App;