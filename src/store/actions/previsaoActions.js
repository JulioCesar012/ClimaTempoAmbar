import * as Types from "./actionTypes";
import Axios from "axios";
import { addLocalizacaoRecente } from "../../utils";

const API_KEY = "54df4eab699357bdc47cb15744434105";

export const load_previsao = (location) => (dispatch) => {
  if (!location)
    return dispatch({
      type: Types.SET_ERRORS,
      payload: "Por favor, insira uma cidade",
    });

  dispatch({ type: Types.SET_LOADING, payload: true });
  dispatch({ type: Types.DADOS_CARREGADOS, payload: {} });
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;
  Axios.get(url)
    .then((res) => {
      dispatch({
        type: Types.DADOS_CARREGADOS,
        payload: res.data,
      });

      addLocalizacaoRecente(res.data.name);

      dispatch({ type: Types.SET_LOADING, payload: false });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: Types.SET_ERRORS,
        payload: error.response
          ? "Dados do clima tempo não encontrados"
          : "Verifique sua conexão com a internet!",
      });
      dispatch({ type: Types.SET_LOADING, payload: false });
    });
};
