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

  return (
    <Modal
      isOpen={openModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-background"
      closeTimeoutMS={200}
      // onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <h1>Nuevo evento</h1>
      <hr />
      <form className="container">
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          <input className="form-control" placeholder="Fecha inicio" />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          <input className="form-control" placeholder="Fecha inicio" />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autocomplete="off"
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;
