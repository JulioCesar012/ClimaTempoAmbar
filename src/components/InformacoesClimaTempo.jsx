import React from "react";
import { useSelector } from "react-redux";
import GridConteudo from "./GridConteudo";

import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Alert from "@material-ui/lab/Alert";
import EfeitoLoading from "./EfeitoLoading";

import "./styles.css";

const InformacoesClimaTempo = () => {
  const { previsao, error, loading } = useSelector((state) => state.previsao);

  return (
    <div>
      {error ? (
        <Alert variant="filled" severity="error" className="titulo-erro">
          {error}
        </Alert>
      ) : (
        <>
          {loading ? (
            <div className="efeito-loading">
              <EfeitoLoading />
            </div>
          ) : (
            <>
              {Object.keys(previsao).length ? (
                <GridConteudo
                  location={previsao.name}
                  temp={(previsao.main.temp - 273).toFixed(2)}
                  feels_like={(previsao.main.feels_like - 273).toFixed(2)}
                  temp_max={(previsao.main.temp_max - 273).toFixed(2)}
                  temp_min={(previsao.main.temp_min - 273).toFixed(2)}
                />
              ) : (
                <h1 className="titulo-inicial">
                  Nada aqui <SentimentVerySatisfiedIcon />
                </h1>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default InformacoesClimaTempo;
