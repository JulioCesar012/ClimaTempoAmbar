import React, { useState } from "react";
import { load_previsao } from "../store/actions/previsaoActions";
import { useDispatch } from "react-redux";

const InputPesquisa = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    setLocation("");
    dispatch(load_previsao(location));
  };

  return (
    <form autoComplete="off" onSubmit={submitHandler}>
      <input
        onChange={(e) => setLocation(e.target.value)}
        label="Cidade"
        value={location}
        placeholder="Digita uma cidade"
        fullWidth
        type="search"
        className="inputCidade"
      />
    </form>
  );
};

export default InputPesquisa;
