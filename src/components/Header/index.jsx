import React, { useState } from "react";
import {
  ButtonHeader,
  ContainerHeader,
  FormHeader,
  InputHeader,
} from "./style";
import axios from "axios";

function Header() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [participation, setParticipation] = useState("");
  const number = Number(participation)

  const onChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
  const onChangeLastName = (event) => {
    setLastName(event.target.value);
  };
  const onChangeParticipation = (event) => {
    setParticipation(event.target.value);
  };
  const form = { name: firstName, nickname: lastName, participation };
  const createUser = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3003/users/cadastro", {
        name: firstName,
        nickname: lastName,
        participation: number,
      });
      alert("Cadastro realizado com sucesso!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    console.log(typeof participation)
  };
  console.log(form);
  return (
    <ContainerHeader>
      <FormHeader onSubmit={createUser}>
        <InputHeader
          onChange={onChangeFirstName}
          type="text"
          placeholder="First Name"
        />
        <InputHeader
          onChange={onChangeLastName}
          type="text"
          placeholder="Second Name"
        />
        <InputHeader
          onChange={onChangeParticipation}
          type="number"
          placeholder="Participation"
        />
        <ButtonHeader>SEND</ButtonHeader>
      </FormHeader>
    </ContainerHeader>
  );
}

export default Header;
