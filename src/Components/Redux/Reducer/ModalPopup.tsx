const initialState = {
  signinmodal: false,
  login: true,
};
const ModalPopup = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "ALREADY_LOGIN":
      return {
        ...state,
        login: true,
      };
    case "UN_LOGIN":
      return {
        ...state,
        login: false,
      };
    case "OPEN_SIGN_IN_MODAL":
      return { ...state, signinmodal: true };
    case "CLOSE_SIGN_IN_MODAL":
      return { ...state, signinmodal: false };
    default:
      return state;
  }
};
export default ModalPopup;
