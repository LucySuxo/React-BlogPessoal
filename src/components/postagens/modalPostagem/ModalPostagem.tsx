import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { Box, Modal } from '@mui/material';
import './ModalPostagem.css';
import CadastroPostagem from '../cadastroPostagem/CadastroPostagem';

function getModalStyle() {
  //responsavel por centralizar a modal
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`, //movimenta o elemento em eixo x e y
  };
}

const useStyles = makeStyles(
  (
    theme: Theme //cria o metodo makeStyle que tem como parametro um tema
  ) =>
    createStyles({
      //define algumas configurações, posição, espaçamento interno...etc
      paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    })
);

function ModalPostagem() {
  //função que determina o componente
  const classes = useStyles(); //inicializa com o useStyle contendo toda as estilizaçao
  const [modalStyle] = React.useState(getModalStyle); //guarda as informações que devem centralizar que é inserida dentro da div
  const [open, setOpen] = React.useState(false); //inicia com falso, quando o valor do State for alterado vai abrir

  const handleOpen = () => {
    //irá abrir a modal
    setOpen(true);
  };

  const handleClose = () => {
    //para fechar a modal
    setOpen(false);
  };

  const body = //contem além do botão para fechar a modal, tela de cadastro, (vai ser renderizada dentro do modal) contem a importação da tag CadastroPostagem que foi importada dentro da const body
    (
      <div style={modalStyle} className={classes.paper}>
        <Box display="flex" justifyContent="flex-end" className="cursor">
          {/* transforma o mouse em uma maozinha */}
          <CloseIcon onClick={handleClose} />
        </Box>

        <CadastroPostagem />
      </div>
    );

  return (
    <div>
      <Button variant="outlined" className="btnModal" onClick={handleOpen}>
        Nova Postagem
      </Button>
      <Modal
        open={open} //se clicar no botão nova postagem vai acionar o handOpen
        onClose={handleClose} //fecha o modal se clicar fora do modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPostagem;
