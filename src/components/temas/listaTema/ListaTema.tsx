import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';
import { Box } from '@mui/material';
import Tema from '../../../models/Tema';
import { toast } from 'react-toastify';
import './ListaTema.css';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([]);

  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  );

  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      navigate('/login');
    }
  }, [token]);

  async function getTema() {
    await busca('/temas', setTemas, {
      headers: {
        //cabeçalho da requisição com uma autorização para o token autenticar
        Authorization: token, //propriedade que vair eceber o token
      },
    });
  }

  useEffect(() => {
    getTema();
  }, [temas.length]); //sempre que o tamanho temas modificar, vai acionar a função getTema

  return (
    <>
      {temas.map(tema => (
        <Box m={2}>
          <Card variant="outlined">
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Tema
              </Typography>
              <Typography variant="h5" component="h2">
                {tema.descricao}
              </Typography>
            </CardContent>
            <CardActions>
              <Box display="flex" justifyContent="center" mb={1.5}>
                <Link
                  to={`/cadastrarTema/${tema.id}`} // ou formularioTema // template string, quando clicar em botão atualizar vai redirecionar à com o ID
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button
                      variant="contained"
                      className="marginLeft"
                      size="small"
                      color="primary"
                    >
                      atualizar
                    </Button>
                  </Box>
                </Link>
                <Link
                  to={`/deletarTema/${tema.id}`} //irá deletar o tema de acordo com o ID
                  className="text-decorator-none"
                >
                  <Box mx={1}>
                    <Button variant="contained" size="small" color="secondary">
                      deletar
                    </Button>
                  </Box>
                </Link>
              </Box>
            </CardActions>
          </Card>
        </Box>
      ))}
    </>
  );
}

export default ListaTema;
