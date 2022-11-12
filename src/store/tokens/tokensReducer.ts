import { Action } from './Actions'; //importando o tipo action que foi exportadas e está no actions.ts

//criando uma modal com o nome TokenState que vai ter apenas uma informação chamada tokens do tipo string
export interface TokenState {
  tokens: string;
  id: string;
}
//criando uma constante de estado inicial
const initialState = {
  //definindo para o State um valor inicial com o valor vazio
  tokens: '',
  id: '',
};

//criando metodo do reducer
export const tokenReducer = (
  state: TokenState = initialState, //parametro 1: state recebe os state da aplicação, do tipo tokenstate (tipo da model) vai ser atribuido a esse state o const de  valor initialState(que é um valor vazio)
  action: Action //parametro 2: action que vai ser do tipo action (criado no arquivo actions.ts)
) => {
  switch (
    action.type //estrutura switch que vai fazer uma verificaçao e ficar observando o tipo da action
  ) {
    case 'ADD_TOKEN': {
      //caso a action seja do tipo add_token
      return { tokens: action.payload, id: state.id }; //objeto da propriedade tokens que vai receber actions.paylod (se o type for do tipo add_tokens vai receber o payload que é o token em si (que sera usado para autenticar))
    }
    case 'ADD_ID': {
      return { id: action.payload, tokens: state.tokens };
    }
    //se não for
    default:
      return state; //vai retornar o state do jeito que está, que é o state vazio
  }
};
