//Todo componente deve ter a primeira letra maiúscula
//Todo componente deve ter uma função que retorna um HTML
//Todo componente deve ser exportado
//Todo componente deve rettornar apenas um elemento pai HTML

import { useState } from "react";

//componente precisa de 2 caixas de texto e 2 alguma coias para mostrar...
function Soma(){

    const [num1, setNum1] = useState<any>();
    const [num2, setNum2] = useState<any>();
    const [soma, setSoma] = useState<any>();

    function clicarNoBotao(){   
        setSoma(Number.parseInt(num1) + Number.parseInt(num2));          /* Toda vez que eu quiser usar um componente eu preciso de uma função */
        console.log("Clicamos no botão!");
        console.log(soma);
    }

    function escreverCaixaTexto(event: any){                      /* As Funções têm de ser fora do return (o que está abaixo!) */
        setNum1(event.target.value);
        console.log(num1);
    }

    function escreverCaixaTexto2(event: any){
        setNum2(event.target.value);
        console.log(num2);
    }

    return (
        <div>
            <h1> Componente da soma </h1>
            <div>
                <label>Número 1:</label>
                <input type="text" onChange={escreverCaixaTexto}/>     {/* reapre que o input abriu e fechou NELE MESMO  "<input />" */}
            </div>
            <div>
                <label>Número 2:</label>
                <input type="text" onChange={escreverCaixaTexto2}/>
            </div>
            <div>
                <button onClick={clicarNoBotao}>Somar</button>        {/* Ao digitar "on", você verá todos os eventos que um botão tem! */}
                <br></br>
                <span>Resultado: </span>
            </div>
        </div>
    );
}

// Criar duas caixas de texto
// Criar um botão
// somar os dois valores
// Exibir em alert e depois no HTML

export default Soma;


// criar outros calculos, subtrair, somar, faz do zero, cria um componenete na mao, cria a funçao, faz o html do zero, tenta fazer na mão

// estudar o canal da rocket seat