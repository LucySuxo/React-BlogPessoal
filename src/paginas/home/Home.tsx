import React from 'react';
import './Home.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';

function Home() {
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
            <Box marginRight={1}></Box>
            <Button variant="outlined" className="botao">
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
        <Grid xs={12} className="postagens"></Grid>
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
