import { legacy_createStore as createStore } from 'redux';
import { tokenReducer } from './tokens/tokensReducer';

//iniciar uma const store chamando o metodo createstore e passar como parametro: tokenReducer
const Store = createStore(tokenReducer);

export default Store;
//vai ser o armazenamento dentro do store, conteiner que vai gerenciar todos os estados da aplicação
//o atributo que acessa às informações dos tore é o navigate
