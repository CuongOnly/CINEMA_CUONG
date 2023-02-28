import eFilm from "../../Model/eFilm";
const initialState = {
  lsNextFilm: undefined,
};
const NextFilmReducer = (
  state = initialState,
  action: { type: string; payload: Array<eFilm> }
) => {
  switch (action.type) {
    case "GET_NEXT_FILM":
      return {
        ...state,
        lsNextFilm: action.payload,
      };
    default:
      return state;
  }
};
export default NextFilmReducer;
