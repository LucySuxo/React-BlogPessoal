import axios from 'axios'; //axios irá interceptar todas as nossas requisições http

export const api = axios.create({
  //objeto api que será exportado depois, porém que vai receber todas as funcionalidades que o axio possui
  baseURL: 'https://lucy-suxo-blogpessoal.onrender.com', //propriedade que vai armazenar o endereço da API
});
//variavel url = caminho que vai concatenar com a baseURL ex: /usuarios/logar
//variavel dados = onde vai ser armazenado o usuario e a senha (os objetos json vão ser armazenados no parametro dados)
//variavel setDado = função que vai receber a resposta da API, um obejto json com os
//dados do usuario e o TOKEN
//async = assincrono que vai aguardar AWAIT o retorno da API, para só depois acionar o setDado
export const login = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data.token);
};

//service de cadastro do usuário:
export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados);
  setDado(resposta.data);
};

//service: responsável por toda a regra do negocio
//API é o backend
//quando faz a requisição se espera que retorne um JSON
