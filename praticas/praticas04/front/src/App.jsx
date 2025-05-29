import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useContext } from "react";
import { RotaContext } from "./contexts/RotaContext.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Conteudo from "./components/Conteudo.jsx";
import Listar from "./pages/Listar.jsx";
import Editar from "./pages/Editar.jsx";
import Novo from "./pages/novo.jsx";

function App() {
  const { setRota } = useContext(RotaContext);
  return (
    <>
      <Cabecalho />
      <Conteudo>
        {rota === "/listar" && <Listar />}
        {rota === "/novo" && <Novo />}
        {rota.substr(0, 7) === "/editar" && <Editar />}
      </Conteudo>
    </>
  );
}
export default App;
