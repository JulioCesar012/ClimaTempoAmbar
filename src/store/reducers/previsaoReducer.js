import * as Types from "../actions/actionTypes";

const initialState = {
  loading: false,
  previsao: {},
  error: "",
};

function previsaoReducer(state = initialState, action) {
  switch (action.type) {
    case Types.SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case Types.DADOS_CARREGADOS: {
      return {
        ...state,
        error: "",
        previsao: action.payload,
        botaoNavbar: 0,
      };
    }
    case Types.SET_ERRORS: {
      return {
        ...state,
        previsao: {},
        error: action.payload,
      };
    }
    case Types.SET_BOTAO_NAVBAR: {
      return {
        ...state,
        botaoNavbar: action.payload,
      };
    }
    default:
      return state;
  }
}

export default previsaoReducer;
