import eFilm from "../../Model/eFilm";
const initialState = {
  lsCurFilm: [],
  isReadyCurFilm: false,
  isSuccessCurFilm: false,
  isFailCurFilm: false,
};
const CurrentFilmReducer = (
  state = initialState,
  action: { type: string; payload: Array<eFilm> }
) => {
  switch (action.type) {
    case "IS_READY_CUR_FILM":
      return {
        ...state,
        isReadyCurFilm: true,
        isSuccessCurFilm: false,
        isFailCurFilm: false,
      };
    case "IS_SUCCESS_CUR_FILM":
      return {
        ...state,
        isReadyCurFilm: false,
        isSuccessCurFilm: true,
        isFailCurFilm: false,
      };
    case "IS_FAILED_CUR_FILM":
      return {
        ...state,
        isReadyCurFilm: false,
        isSuccessCurFilm: false,
        isFailCurFilm: true,
      };
    case "GET_CURRENT_FILM":
      return {
        ...state,
        lsCurFilm: action.payload,
      };
    default:
      return state;
  }
};
export default CurrentFilmReducer;
