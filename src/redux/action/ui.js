import { types } from "../types"


const uiOpenModal = () => ({
  type: types.uiOpenModal
});

const uiCloseModal = () => ({
  type: types.uiCloseModal
});

export {
  uiOpenModal,
  uiCloseModal
}