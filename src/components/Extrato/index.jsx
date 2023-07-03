import React from "react";
import { Box, Botao } from "../../components/UI";
import { extratoLista } from "../../info";
import Items from "../Items";

const Extrato = () => {
  return (
    <Box>
      {extratoLista.updates.map((item) => {
        return (
          <Items key={item.id} type={item.type} from={item.from} value={item.value} date={item.date}/>
        );
      })}
      <Botao>Ver Mais</Botao>
    </Box>
  );
};

export default Extrato;
