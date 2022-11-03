import React from 'react';
import './Home.css';

function Home() {
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

export default Home;

// Linha 1: importa a bibliteca React
// Linha 2: sempre que se usa o "./" significa que está se referindo ao arquivo Home
//quando estiver nesse arquivo ou seja(home.tsx)
// Linha 4: O componente não é nada mais que uma função
// Linha 5: vai retornar o metodo httml que precisa ser renderizado na tela
//dentro do return() pode colocar qualquer conteúdo que queira, mas tenha em mente que um componente só pode retornar um elemento
//se quiser ter mais de um conteúdo na tela, é preciso criar um container
// Linha 6: forma fragmentada/ abreviada <> que o React usa para definir os elementos/quantos elementos quer que retorne
// Linha 7: inserção do titulo
// Linha 8: Inserção da imagem/gif para o Home
//Linha 18: está exportando o componente: export default NOME;
