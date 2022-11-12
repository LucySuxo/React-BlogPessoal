import React, { useState, ChangeEvent, useEffect } from 'react'; //acrescimo do hook useState=gancho que adiciona um estado a um componente funcional
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/Service';
import UserLogin from '../../models/UserLogin'; //importanto o UserLogin
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/tokens/Actions';
import { toast } from 'react-toastify';

function Login() {
  let navigate = useNavigate(); //hook useNavigate

  //const dispatch vai receber o hook useDispatch
  const dispatch = useDispatch();

  const [token, setToken] = useState('');

  const [userLogin, setUserLogin] = useState<UserLogin>({
    //useState do parametro UserLogin
    //userLogin = acessa informação do State
    //setUserlogin = função para alterar a ifnormaçãoq ue está no useState
    //valores iniciais do state:
    id: 0,
    nome: '',
    foto: '',
    usuario: '',
    senha: '',
    token: '',
  });

  const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
    //FALTA TERMINAR
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  //a função updateModel vai ser utilizada para atualizar a model com o valor que o usuário acrescentar dentro dos textfield(campos usuario e senha)
  //vai capturar as informações que o usuário passou e passar dentro da função updateModel que por sua vez
  // vai jogar os valores dentro da função setUserLogin e assim poder usar o useState para atualizar a model
  //ChangeEvent = olha e aguarda o campo do textfield para ver se tem alguma alteraçao para acionar a função updateModel
  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    //responsável por fazer atualização da model, vai trabalhar junto com o useState
    //ev: = evento do tipo.
    //changeEvent = alteração
    //HTMLInputElement = interface em type script que faz a manipulação de campos HTML  Input
    setUserLogin({
      ...userLogin, //"..." = espalha todos os atributo que tem dentro do userLogin para dentro do setUserLogin
      [e.target.name]: e.target.value,
      //e.target.name = captura a propriedade ex: usuario,senha.
      //e.target.value = captura o valor que foi digitado no campo
    });
  }
  //arrow function, vai ser construido a logica para o redirecionamento
  useEffect(() => {
    if (token != '') {
      dispatch(addToken(token)); //função dispatch que irá passar o addtoken que irá passar como parametro o token
      //verifica se o token está vazio
      navigate('/home'); //redirecionamento para a pagina home
    }
  }, [token]); //passa o token como parametro para o useEffects e vai validar se o token é ou não vazio, se tiver um armazenado vai cair dentro do if e redirecionar dentro do home

  //Função que irá enviar os dados de fato para o backend, interligando com o conteudo da Service.ts
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    //função que olha o formulário como um todo
    e.preventDefault();

    try {
      //try= tentativa de execução
      await login(`/usuarios/logar`, userLogin, setToken); //passar o dados de tentativa de execução, se der certo vai armazenar os dados e vai guardar o token no local storage
      toast.success('Usuário logado com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
    } catch (error) {
      // cat = é onde é relatado o erro
      toast.error('Dados de usuário incorretos!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      }); //
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos1"
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario} //valores que ele digitar vai ser atribuida a model
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} //sempre que acontecer uma modificação dentro do elemento, vai acionar a função "=>" updateModel(e)
              id="usuario"
              label="usuário"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha} //valores que ele digitar vai ser atribuida a model
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} //sempre que acontecer uma modificação dentro do elemento, vai acionar a função "=>" updateModel(e)
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                Logar
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Link to="/cadastrousuario">
              <Typography
                variant="subtitle1"
                gutterBottom
                align="center"
                className="textos1"
              >
                Cadastre-se
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>
      <Grid xs={6} className="imagem"></Grid>
    </Grid>
  );
}

export default Login;

//Linha 1: Hook useState = responsável por fazer o controle dos estados de um componente (adiciona um estado para um componente funcional)
//Linha 8: userLogin = estado do componente
//setUserLogin = pode mudar o estado do componente
// = > indica que está recebendo o:
//useState é do tipo da model <UserLogin>
//linha 9: é um container e é o Grid principal
//linha 12: tem 6 colunas, formulario(campo de texto e botão)
//linha 75: tem 6 colunas, vão ficar lado a lado (campo de imagens)
//Obs: linha 9: o primeiro valor é para acessar a informação do state e o segundo valor é para alterar a informação que está no state
//Linha 10 a 15: são os valores iniciais do state
//Linha 18: criação da função updateModel onde será passado um evento "(e: )" do tipo ChangeEvent (alteração) <HTMLInputElement> = interface
//em typescript que faz a manipulação Input
