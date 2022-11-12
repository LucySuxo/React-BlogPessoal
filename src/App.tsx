import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listaPostagem/ListaPostagem';
import CadastroPostagem from './components/postagens/cadastroPostagem/CadastroPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from './store/Store';
import './App.css';

function App() {
  return (
    <Provider store={Store}>
      <ToastContainer />
      <Router>
        <Navbar />
        <div className="distancia">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastrousuario" element={<CadastroUsuario />} />
            <Route path="/temas" element={<ListaTema />} />
            <Route path="/postagens" element={<ListaPostagem />} />
            <Route path="/cadastrarPostagem" element={<CadastroPostagem />} />
            {/* quando usuario acessar a rota, isso indica que ele ira cadastrar uma nova Postagem */}

            <Route
              path="/cadastrarPostagem/:id"
              element={<CadastroPostagem />}
            />
            {/* quando usuario acessar a rota, isso indica que ele ira editar uma Postagem através do ID da postagem*/}

            <Route path="/cadastrarTema" element={<CadastroTema />} />
            {/* quando usuario acessar a rota, isso indica que ele ira cadastrar um novo Tema*/}

            <Route path="/cadastrarTema/:id" element={<CadastroTema />} />
            {/* quando usuario acessar a rota, isso indica que ele ira editar um tema atráves do ID do tema já criado */}

            <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
            {/* quando usuario acessar a rota, isso indica que ele ira deletar uma postagem atráves do ID da postagem que ele quer deletar */}

            <Route path="/deletarTema/:id" element={<DeletarTema />} />
            {/* quando usuario acessar a rota, isso indica que ele ira deletar um tema atráves do ID do tema que ele quer deletar */}
          </Routes>
        </div>

        <Footer />
      </Router>
    </Provider>
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
