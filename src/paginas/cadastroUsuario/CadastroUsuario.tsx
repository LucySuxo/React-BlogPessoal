import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';

function CadastroUsuario() {
  let navigate = useNavigate(); //é usado no useEffect

  const [confirmarSenha, setConfirmarSenha] = useState<String>(''); //verifica se o valor que o usuario digitou no campo confirmar senha é igual a senha, para depois enviar as informações para cadastro
  const [user, setUser] = useState<User>({
    //informações que serão enviadas para o cadastro
    id: 0,
    nome: '',
    foto: '',
    usuario: '',
    senha: '',
  });

  const [userResult, setUserResult] = useState<User>({
    //armazena os valores do retorno da API (é o valor do JSON que é retornado dos dados cadastrados)
    id: 0,
    nome: '',
    foto: '',
    usuario: '',
    senha: '',
  });

  useEffect(() => {
    //direciona o usuario para a tela de login apos o cadastro
    if (userResult.id !== 0) {
      //verifica se o ID é diferente de 0 se for = não está utilizando os valores padrão e direciona a tela de login
      navigate('/login');
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    //função que será acionada com o useState do inicio, captura o valor do confirmarSenha
    setConfirmarSenha(e.target.value);
  }

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value, //pega o nome do campo + o valor que o usuario digitou
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault(); //não atualiza a tela
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      //compara o valor da senha com o confirmar senha
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult); //envia as informaçõe para a rota
      alert('Usuario cadastrado com sucesso');
    } else {
      alert(
        'Dados inconsistentes. Favor verificar as informações de cadastro.'
      );
    }
  }

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} className="imagem2"></Grid>
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)} //atualiza conforme o usuario digita
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              } //função para confirmar se o usuario digitou os mesmo valores no campo senha e confirmar senha para poder efetivar
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/login" className="text-decorator-none">
                <Button
                  variant="contained"
                  color="secondary"
                  className="btnCancelar"
                >
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" variant="contained" color="primary">
                Cadastrar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CadastroUsuario;
