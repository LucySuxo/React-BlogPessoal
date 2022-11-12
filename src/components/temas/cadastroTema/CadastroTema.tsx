import React, { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField, Button } from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Tema from '../../../models/Tema';
import { buscaId, put, post } from '../../../services/Service';

import './CadastroTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState['tokens']>(
    state => state.tokens
  );

  const [tema, setTema] = useState<Tema>({
    //se refere a uma variavel tema e, vai alterar o setTema que já for inserido, <Tema> = import da nodel, inicia o useState vazio
    id: 0, //modifica automaticamente
    descricao: '',
  });

  useEffect(() => {
    //cuida do ciclo de vida do componente
    if (token == '') {
      //se o token estiver vazio:
      toast.error('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      }); //aparece a mensagem
      navigate('/login'); //redireciona
    }
  }, [token]); //

  useEffect(() => {
    //=> arrow function
    //monitora o ID
    if (id !== undefined) {
      //simbolo de diferente
      //se tiver uma ID disponivel vai acionar a função findById (que faz a conexao com a api)
      findById(id); //parametro com id
    }
  }, [id]); //monitora a ID que esta no useParams que o hook capturou da rota

  async function findById(id: string) {
    //findById é uma função assincrona, que recebe como parametro o id que é uma string
    buscaId(`/temas/${id}`, setTema, {
      //a API vai tentar localizar o tema do id e se estiver cadastrado vai pegar os dados que estão cadastrados na API e alterar o state tema, colcoando os valores dentro do state os valores do ID especifico
      //aciona o buscaId (metodo que está nos service) e irá conectar com a API
      headers: {
        Authorization: token, //autorização
      },
    });
  }

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    //responsavel por capturar os valores digitado no formulario e atribuir a setTema que por sua vez vai fazer uma alteração no state tema com os valores que o usuario digitar
    setTema({
      ...tema,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //vai ser usado para atualizar temas já cadastrados e para cadastrar novos temas
    e.preventDefault();
    console.log('tema ' + JSON.stringify(tema)); //imprime no console os dados armazenados nos state tema

    if (id !== undefined) {
      //se o id for diferente de indefinido
      console.log(tema);
      put(`/temas`, tema, setTema, {
        //vai tentar atualizar o tema já existente
        //vai informar a rota da API, passar os dados que vai atualizar, captura o objeto atualizado que a API retornar
        headers: {
          Authorization: token, //token validando que a atualização é verdadeira
        },
      });
      toast.success('Tema atualizado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      }); //mensagem positiva
    } else {
      //senão: indica que não tem um ID
      post(`/temas`, tema, setTema, {
        //vai ir na rota, apssar os dados, e captura o valor que a API retornar
        headers: {
          Authorization: token, //token que irá validar
        },
      });
      toast.success('Tema cadastrado com sucesso', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      }); //mensagem de cadastro
    }
    back(); //aciona a função de voltar
  }

  function back() {
    //irá redirecionar para o componente temas, independente se está atualizando ou cadastrando
    navigate('/temas');
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
          Formulário de cadastro tema
        </Typography>
        <TextField
          value={tema.descricao}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
          id="descricao"
          label="descricao"
          variant="outlined"
          name="descricao"
          margin="normal"
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Finalizar
        </Button>
      </form>
    </Container>
  );
}

export default CadastroTema;

//Hook useParams = serve para capturar parametros enviados por uma url
