import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement   //aqui ele pega o elemento do HTML la pela id (igual o quadro!) *foto na galeria
);
root.render(
  <React.StrictMode>
    <App />
    {/* Componente principal da aplicação */}
    {/* Todo arquivo que *.tsx é um componente */}
  </React.StrictMode>
);
