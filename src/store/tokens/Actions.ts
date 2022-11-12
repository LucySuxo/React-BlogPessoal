export type Action = { type: 'ADD_TOKEN' | 'ADD_ID'; payload: string }; //exportando uma ação de tipo com o nome add_token, payload= do tipo string que vai armazenar o token

//função addToken que vai ter um parametro um token do tipo string, essa função é do tipo Action (de cima)
export const addToken = (token: string): Action => ({
  type: 'ADD_TOKEN', //objeto de propriedade type vai ser de valor add_token
  payload: token, // vai armazenar a variavel token, essa variavel token é a responsavel por receber e armazenar na variavel payload
});

//pegar o id do usuario na hora do login
export const addId = (id: string): Action => ({
  type: 'ADD_ID',
  payload: id,
});
