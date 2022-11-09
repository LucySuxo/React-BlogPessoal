import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listaPostagem/ListaPostagem';
import './TabPostagem.css';

function TabPostagem() {
  const [value, setValue] = useState('1'); //inicia com o state valor 1 (lista de postagens)
  //value = vai armazenar o valor da tab1 ou da tab2
  //setValue = responsável por alterar o valor (altera tab1 para tab2 e vice versa)
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    //evento do tipo react.changeevent,(newvalue= parametro responsavel por armazenar o valor do clique (se clica na tab1 vai armazenar 1)
    setValue(newValue); //captura o valor obtido atraves do clique e atribuir a variavel value
  }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1" />
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography
            variant="h5"
            gutterBottom
            color="textPrimary"
            component="h5"
            align="center"
            className="titulo"
          >
            Sobre-nós
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="textPrimary"
            align="justify"
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos ut eveniet natus totam et, voluptate dicta tempore
            alias, odio nobis non eius cupiditate minima inventore pariatur!
            Ipsum itaque consectetur voluptatibus. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quo velit consequuntur suscipit
            fugiat, nam quis quod quaerat veritatis et, vel ratione beatae,
            facere neque! Quo animi porro voluptate saepe deleniti? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Inventore adipisci,
            officia aut quidem dolorum deserunt iure dolorem doloribus velit
            nobis quas consequatur at ullam odit, nesciunt est nulla nihil
            excepturi!
          </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;
