import React, {useState} from 'react';
import Modal from "react-modal";
import moment from 'moment'
import DateTimePicker from "react-datetime-picker";
import { customStyles } from '../../helpers/customStylesModal';


Modal.setAppElement("#root");
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const after = now.clone().add(1, "hours");

const CalendarModal = () => {
  const [openModal, setOpenModal] = useState(true);
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(after.toDate());


  const closeModal = () => {
    console.log('Clousing...')
    setOpenModal(false)
  };

  const handleStartDateChange = e => {
    setDateStart(e)
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
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
          {/* <input className="form-control" placeholder="Fecha inicio" /> */}
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Fecha y hora fin</label>
          {/* <input className="form-control" placeholder="Fecha inicio" /> */}
          <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
            minDate={dateStart}
            className="form-control"
          />
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
