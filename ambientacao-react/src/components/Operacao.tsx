import { useState } from "react";

interface Props{
  tipo: string
}

function Operacao(props: Props){          

    const [num1, setnumero1] = useState<any>()
    const [num2, setnumero2] = useState<any>()
    const [sub, setSubtracao] = useState<any>()

    function calcular(){              //esse  cara vai guardar dentro da variável subtração, o parse para fazer a conversão dos valores do que está dentro da variável 1 
      if (props.tipo == "Subtração"){
        setSubtracao(Number.parseInt(num1) - Number.parseInt(num2));
      }else if(props.tipo == "Multiplicação"){
        setSubtracao(Number.parseInt(num1) * Number.parseInt(num2));
      }
                /* Toda vez que eu quiser usar um componente eu preciso de uma função */
    }

  return (
    <div>
        <div>
          <h1> Componente da {props.tipo} </h1>
        </div>
    <div>
        <label>Número 1:
          <input type="text" onChange={(event:any) => setnumero1(event.target.value)}/>
        </label>     
    </div>

        <br></br>

    <div>
          <label>Número 2:
            <input type="text" onChange={(event:any) => setnumero2(event.target.value)}/>
          </label>
    </div>
        
        <br></br>

    <div>
        <button onClick={calcular}>Calcular</button>        {/* Ao digitar "on", você verá todos os eventos que um botão tem! */}
        <span>Resultado: {sub}</span>
          <br></br>
    </div>      
    </div>
  );
}

export default Operacao;
