import moment from 'moment'
import Swal from 'sweetalert2';
import {useState} from 'react';
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import { customStyles } from '../../helpers/customStylesModal';


Modal.setAppElement("#root");
const now = moment().minutes(0).seconds(0).add(1, 'hours');
const after = now.clone().add(1, "hours");

const CalendarModal = () => {
  const [openModal, setOpenModal] = useState(true);
  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(after.toDate());
  const [titleValid, setTitleValid] = useState(true)
  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
    start: now.toDate(),
    end: after.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const closeModal = _ => {
    setOpenModal(false);
  };

  const handleStartDateChange = e => {
    setDateStart(e)
    setFormValues({
      ...formValues,
      start: e
    });
  };

  const handleEndDateChange = e => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleInputChange = ({target}) => {
    setFormValues({
      ...formValues,
      [target.name] : target.value
    })
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    const momentStart = moment(start);
    const moemntEnd = moment(end);

    if (momentStart.isSameOrAfter(moemntEnd)) {
      return Swal.fire('Error', 'La fecha fin debe ser mayor a la fecha de inicio', 'error');
    };

    if (title.trim() < 2) {
      // return Swal.fire('Error', 'Agregue un titulo', 'error');
      return setTitleValid(false)
    };

    setTitleValid(true)
    closeModal();

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
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="form-group">
          <label>Fecha y hora inicio</label>
          {/* <input className="form-control" placeholder="Fecha inicio" /> */}
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            amPmAriaLabel
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
            amPmAriaLabel
            className="form-control"
          />
        </div>

        <hr />
        <div className="form-group">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            autocomplete="off"
            value={title}
            onChange={handleInputChange}
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
            value={notes}
            onChange={handleInputChange}
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
