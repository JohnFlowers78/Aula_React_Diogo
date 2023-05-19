import Soma from "./components/Soma";


function App() {
  return (          /* só posso ter um unico elemento pai dentro do meu return (somente um div, por exemplo) */
    <div className="App">    
      <h1>VAI TOMAR NO CU</h1>
      <Soma></Soma>   {/* tudo que eu precisar tem de estar dentro de um elemento pai (div, no caso) */}
    </div>
);
}

export default App;
