/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import ClimaIcone from "../assets/clima.png";

import "./styles.css";

export default function GridConteudo({ location, temp, temp_max, temp_min }) {
  return (
    <div className="container">
      <div className="cards pt-5 pb-4">
        <div className="grid1">
          <h1 className="textos-components">Clima em {location}</h1>

          <h1 className="py-2 textos-components">{temp}&deg;</h1>
        </div>

        <div className="div-icone-nuvem">
          <img className="icone-nuvem" src={ClimaIcone} />
          <h1>
            <span className="px-4 textos-components">
              Mínima de {temp_min}&deg;
            </span>
            <span className="px-4 textos-components">&</span>
            <span className="px-4 textos-components">
              Máxima de {temp_max}&deg;
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
