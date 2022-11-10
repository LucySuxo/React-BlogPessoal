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
//requisição para listar as postagens, header = vai passar o token para autenticar essa requisição
//dados retornados vais er listado no front-end
export const busca = async (url: any, setDado: any, header: any) => {
  const resposta = await api.get(url, header); //api.get = requisição buscar - ()= vai passar o url e o header
  //se a API confirmar que o usuario é valido, vai retornar os dados e armazenar na variavel resposta
  setDado(resposta.data); //dados retornados/capturados
  //e assim atribuir os dados atraves do hook
};

export const buscaId = async (url: any, setDado: any, header: any) => {
  const resposta = await api.get(url, header);
  setDado(resposta.data);
};

export const post = async (url: any, dados: any, setDado: any, header: any) => {
  const resposta = await api.post(url, dados, header);
  setDado(resposta.data);
};

export const put = async (url: any, dados: any, setDado: any, header: any) => {
  const resposta = await api.put(url, dados, header);
  setDado(resposta.data);
};

export const deleteId = async (url: any, header: any) => {
  await api.delete(url, header); //não vai ser armazenado nenhum valor, se o token for valido vai excluir o id do tema/postagem
};
//service: responsável por toda a regra do negocio
//API é o backend
//quando faz a requisição se espera que retorne um JSON
