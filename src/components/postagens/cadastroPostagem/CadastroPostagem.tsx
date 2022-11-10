import React, { ChangeEvent, useEffect, useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from '@material-ui/core';
import './CadastroPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, post, put } from '../../../services/Service';
import Postagem from '../../../models/Postagem';

function CadastroPostagem() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); //para cadastrar ou atualizar um post
  const [temas, setTemas] = useState<Tema[]>([]); //vai ser do tipo array > vai trabalhar com a listagem de temas que estão cadastrador
  const [token, setToken] = useLocalStorage('token'); //token armazenado no local storage

  useEffect(() => {
    //verificação do token, o usuario precisa estar logado para fazer as modificações
    if (token == '') {
      alert('Você precisa estar logado'); //vai redirecionar o usuario
      navigate('/login');
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({
    //armazena UM TEMA em especifico de acordo com o ID
    id: 0,
    descricao: '',
  });
  const [postagem, setPostagem] = useState<Postagem>({
    //efetua o cadastro das postagens
    id: 0,
    titulo: '',
    texto: '',
    data: '',
    tema: null,
  });

  useEffect(() => {
    //vai monitorar o state tema, vai verificar se tem um tema em especifico e preencher o state psotagem se estiver mexendo no select de temas
    setPostagem({
      ...postagem,
      tema: tema,
    });
  }, [tema]); //atrelado com o select, o valor do tema vai mudar de acordo com o que o select estive selecionando o tema e atribuir ao state postagem tema

  useEffect(() => {
    //vai monitorar o ID que está no parametro (useparams) do url, e se ocorrer uma modificação vai acionar a função getTEMAS
    getTemas(); //tras todos os temas cadastrados   //se tiver um ID
    if (id !== undefined) {
      findByIdPostagem(id); //faz uma busca de postagem pelo ID(que é o parametro)
    }
  }, [id]);

  async function getTemas() {
    //função assicrona que faz uma busca na rota tema e as informações retornados da api, vai ser armazenado no state temas

    await busca('/temas', setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    //função que faz uma busca pelo API pelo ID
    await buscaId(`postagens/${id}`, setPostagem, {
      //vai na rota, e as informações das postagens retornadas serão armazenadas no state postagem
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    //preenche o state postagem com os temas se você estiver mexendo com os Inputs (texto ou titulo)
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //para envio das informações que o usuario preencher as informações
    e.preventDefault();

    if (id !== undefined) {
      //se o ID é existente, tem uma psotagem já cadastrada
      put(`/postagens`, postagem, setPostagem, {
        //irá atualizar
        headers: {
          Authorization: token,
        },
      });
      alert('Postagem atualizada com sucesso');
    } else {
      //caso contrario, ira criar uma nova postagem
      post(`/postagens`, postagem, setPostagem, {
        //aciona metodo post e o usuario passa as informações
        headers: {
          Authorization: token,
        },
      });
      alert('Postagem cadastrada com sucesso');
    }
    back(); //chamada dentro da função onSubmit
  }

  function back() {
    //direciona a rota postagens onde são listadas as postagens - criada na função
    navigate('/postagens');
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro postagem
        </Typography>
        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="titulo"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={e =>
              buscaId(`/temas/${e.target.value}`, setTema, {
                //quando o usuario selecionar um tema em especifico vai capturar o ID e levar ao stateTema para armazenar um tema por vez
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map(
              (
                tema //map=caminha por todos os temas
              ) => (
                <MenuItem value={tema.id}>{tema.descricao}</MenuItem> //vai pegar o ID e a Descrição de cada tema e montar varios MenuItens e será exibida apenas a descrição para o usuario
              )
            )}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPostagem;
