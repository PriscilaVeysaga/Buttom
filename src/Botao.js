import { Button } from "react-native";
import React from "react";

const Botao = ({ number }) => {

  return (
    <Button
      title={number}
      onPress={() => {
        alert("Você apertou o botão!  :)"); 
      }}
    />
  );
};

export default Botao;
