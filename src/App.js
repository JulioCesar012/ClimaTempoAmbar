import React from "react";
import InputPesquisa from "./components/InputPesquisa";
import InformacoesClimaTempo from "./components/InformacoesClimaTempo";
import { Container } from "@material-ui/core";
import BotaoNav from "./components/BotaoNav";
import TopNavBar from "./components/TopNavBar";
import UltimasLocalizacoes from "./components/UltimasLocalizacoes";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const botaoNavbar = useSelector((state) => state.previsao.botaoNavbar);

  return (
    <Container maxWidth="md">
      <TopNavBar />
      <br />
      <InputPesquisa />
      <br />
      {botaoNavbar === 0 ? (
        <div className="previsao-info">
          <InformacoesClimaTempo />
        </div>
      ) : (
        <div className="previsao-info">
          <UltimasLocalizacoes />
        </div>
      )}
      <BotaoNav />
    </Container>
  );
};

export default App;
