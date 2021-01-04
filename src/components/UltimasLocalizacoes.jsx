import React, { useEffect, useState } from "react";
import { getPreviousUltimasLocalizacoes } from "../utils";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import GpsFixedIcon from "@material-ui/icons/GpsFixed";

import { useDispatch } from "react-redux";
import { load_previsao } from "../store/actions/previsaoActions";

import "./styles.css";

const UltimasLocalizacoes = () => {
  const [locations, setLocations] = useState([]);
  // eslint-disable-next-line no-unused-vars

  useEffect(() => {
    setLocations(getPreviousUltimasLocalizacoes());
  }, []);

  const LocationComponent = ({ locations }) => {
    return (
      <>
        {locations.map((location) => {
          return (
            <div key={location}>
              <List component="nav" aria-label="cidades recentes">
                <Location key={location} location={location} />
              </List>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <h1 className="titulo-inicial">Buscas Recentes</h1>
      <ul className="box-buscas-recentes">
        {locations.length ? (
          <LocationComponent locations={locations} />
        ) : (
          <Location location="Sem buscas recentes" />
        )}
      </ul>
    </>
  );
};

const Location = ({ location }) => {
  const dispatch = useDispatch();

  const clickHandler = (location) => {
    if (location === "Sem buscas recentes") return false;
    dispatch(load_previsao(location));
  };

  return (
    <ListItem button>
      <ListItemIcon>
        <GpsFixedIcon />
      </ListItemIcon>
      <ListItemText onClick={() => clickHandler(location)} primary={location} />
    </ListItem>
  );
};

export default UltimasLocalizacoes;
