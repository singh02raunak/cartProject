export const ModalOpen = (state = false, action) => {
  if (action.type === "OPEN") {
    return true;
  }
  if (action.type === "REMOVE_MODAL") {
    return false;
  }
  return state;
};
