import React, {useState} from "react";
import { ThemeProvider } from "styled-components";
import { temaClaro, temaEscuro } from "./components/UI/temas";

import Cabecalho from "./components/Cabecalho";
import Container from "./components/Container";
import { GlobalStyle } from "./components/GlobalStyle";
import { BtnTema } from "./components/UI";
import SwitcherTema from "./components/SwitcherTema";

function App() {
  const [tema, setTema] = useState(true);

const toggleTema = () => {
  setTema((tema) => !tema);
}

  return (
    <ThemeProvider theme={tema ? temaClaro : temaEscuro}>
      <GlobalStyle />
      <BtnTema onClick={toggleTema}>
        <SwitcherTema tema={tema}/>
      </BtnTema>
      <Cabecalho />
      <Container />
    </ThemeProvider>
  );
}

export default App;
