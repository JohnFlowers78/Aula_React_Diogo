import Soma from "./components/Soma";
import Subtracao from "./components/Subtracao";

function App() {

  return (          /* só posso ter um unico elemento pai dentro do meu return (somente um div, por exemplo) */
    <div className="App">    
      <h1>Página de Cálculos</h1>
      
      <hr></hr>

      <Soma/>   {/* tudo que eu precisar tem de estar dentro de um elemento pai (div, no caso) */}
      <Subtracao/>
    </div>
);
}

export default App;
