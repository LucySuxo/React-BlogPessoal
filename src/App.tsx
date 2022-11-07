import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// anotações: todos os conteúdos dentro do function são as tags html que serão renderizadas pelo metodo render do arquivo index.tsx
//Por estarmos usando o TypeScript os arquivos estão sendo salvos como tsx
//linha 10: exportando o componente, a função app, e essa função exportada, se importa dentro do arquivo index.tsx, com a tag parecida com a sintaxe html.
//linha 7:a variavel se coloca entro de chaves
//linha 4: criar variavel let = pode instanciar qualquer tipo de objeto, e pode ter seus valores sobrescritos, até mesmo por outro tipo e dado
//linha 7: acontece uma interpolação = quando se colocar o valor de uma variavel entro de uma tag html
//JSX é o possibilita a construção do HTML pelo Javascript
//TSX = arquivo TYPESCRIPT
//APP.TSX é o componente principal
//Linha 3: importando o Home.tsx
//Linha 11 a 13 : renderizando os componentes
