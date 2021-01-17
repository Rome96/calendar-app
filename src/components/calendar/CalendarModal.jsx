import React, {useState} from 'react';
import Modal from "react-modal";
import { customStyles } from '../../helpers/customStylesModal';

Modal.setAppElement("#root");

const CalendarModal = () => {
  const [openModal, setOpenModal] = useState(true)

  const closeModal = () => {
    console.log('Clousing...')
    setOpenModal(false)
  };

  return <Modal
    isOpen={openModal}
    style={customStyles}
    className="modal"
    overlayClassName="modal-background"
    closeTimeoutMS={200}
    // onAfterOpen={afterOpenModal}
    onRequestClose={closeModal}
    contentLabel="Example Modal"
  >
    <h1>Hola universo</h1> <hr/>
    <span>Como anda todo ?</span>
  </Modal>
};

export default CalendarModal;
