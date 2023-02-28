const initialState = {
  navTmp: true,
  payment: true,
};
const NavigateReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case "PHASE_1":
      return {
        ...state,
        navTmp: true,
        payment: true,
      };
    case "PHASE_2":
      return { ...state, navTmp: true, payment: false };
    case "PHASE_3":
      return { ...state, navTmp: false, payment: true };
    case "PHASE_4":
      return { ...state, navTmp: false, payment: false };
    default:
      return state;
  }
};
export default NavigateReducer;
