import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import { Box } from '@mui/material';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

function Home() {
  let navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token');

  useEffect(() => {
    if (token == '') {
      alert('Você precisa estar logado');
      navigate('/login');
    }
  }, [token]);

  function posts() {
    //ao clicar ao botão não irá redirecionar a pagina postagens //ATENÇÃO: NÃO FOI ACRESCENTADO DURANTE O VÍDEO
    navigate('/postagens');
  }

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vindo(a)!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              expresse aqui os seus pensamentos e opiniões!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Button onClick={posts} variant="outlined" className="botao">
              Ver Postagens
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/H88yIo2.png"
            alt=""
            width="500px"
            height="500px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
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
// Linha 6: forma fragmentada/ abreviada que o React usa para definir os elementos/quantos elementos quer que retorne
// Linha 7: inserção do titulo
// Linha 8: Inserção da imagem/gif para o Home
//Linha 18: está exportando o componente: export default NOME;
