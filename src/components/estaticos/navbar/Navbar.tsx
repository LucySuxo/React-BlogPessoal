import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';

function Navbar() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box style={{ cursor: 'pointer' }}>
            <Typography variant="h5" color="inherit">
              BlogPessoal
            </Typography>
          </Box>

          <Box display="flex" justifyContent="start">
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                home
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                postagens
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                temas
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                cadastrar tema
              </Typography>
            </Box>
            <Box mx={1} style={{ cursor: 'pointer' }}>
              <Typography variant="h6" color="inherit">
                logout
              </Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;

// linha 8: container AppBar
//linha 9: A própria barra de menu
// linha 10: Box com os nome do menu
// Typography: vai alterar a estilização e o tipo de tag
// Cursor: "pointer" > o mouse vira uma mãozinha, como se fosse um link
