import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Navbar() {
  const dispatch = useDispatch(); //dispara a ação para que seja armazenada no navigate

  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  );

  function goLogout() {
    dispatch(addToken('')); //zera o token
    toast.info('Usuário deslogado', {
      position: 'top-right', //posição da notificação (em cima à direita)
      autoClose: 2000, //em que momento essa notificação deve sumir, em 2000 milisegundos
      hideProgressBar: false, //Precisa ou não ocultar a barra de progresso, neste caso false
      closeOnClick: true, //fechar a notificação por um click no X
      pauseOnHover: false, //se colocar o mouse por cima será pausada? -neste caso falso
      draggable: false, //mover a notificação do lugar
      theme: 'colored', //tema da notificação - colorido
      progress: undefined, //progresso indefinido
    }); //mostra mensagem
    navigate('/login'); //redireciona para a tela de login
  }

  var navbarComponent;

  if (token != '') {
    navbarComponent = (
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box className="cursor">
            <Typography variant="h5" color="inherit">
              Blog Suxzo
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Link to="/home" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  home
                </Typography>
              </Box>
            </Link>
            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  postagens
                </Typography>
              </Box>
            </Link>
            <Link to="/temas" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  temas
                </Typography>
              </Box>
            </Link>
            <Link to="/cadastrarTema" className="text-decorator-none">
              <Box mx={1} className="cursor">
                <Typography variant="h6" color="inherit">
                  cadastrar tema
                </Typography>
              </Box>
            </Link>

            <Box mx={1} className="cursor" onClick={goLogout}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }

  return <>{navbarComponent}</>;
}

export default Navbar;

// linha 8: container AppBar
//linha 9: A própria barra de menu
// linha 10: Box com os nome do menu
// Typography: vai alterar a estilização e o tipo de tag
// Cursor: "pointer" > o mouse vira uma mãozinha, como se fosse um link
