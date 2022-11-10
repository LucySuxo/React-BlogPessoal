import Tema from './Tema';

interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  tema?: Tema | null; //para conseguir cadastrar uma postagem vai ser preciso já ter um Tema cadastrado
}

export default Postagem;
