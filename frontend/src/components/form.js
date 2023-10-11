import axios from "axios";
import React, { useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
   align-items: center;
  background-color: #fff;
  padding: 70px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
  width: 160px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  width: 150px;
`;

const Title = styled.h2``;

const Form = ({ getUsers, onLogin }) => {
  const ref = useRef();
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = ref.current;

    if (
      !user.usuario.value ||
      !user.senha.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }


    else {
      await axios
        .post("http://localhost:8800", {

          usuario: user.usuario.value,
          senha: user.senha.value,
        })
        .then(({ data }) => {


          if (data.id >= 1) {
            sessionStorage.setItem('authenticated', 'true');
            sessionStorage.setItem('userName', data.nome);
            sessionStorage.setItem('userFilial', data.filial);
            const userNome = sessionStorage.getItem('userName');
            onLogin();
            toast.success(`Bem vindo ${userNome}!`)
            navigate('/menu');

          } else toast.error("Usuário ou senha incorretos!")

        })
        .catch(({ data }) => toast.error(data));
    }

    user.usuario.value = "";
    user.senha.value = "";

  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <Title>Login</Title>
      <InputArea>
        <Label>User</Label>
        <Input name='usuario' />
      </InputArea>
      <InputArea>
        <Label>Password</Label>
        <Input name='senha' />
      </InputArea>
      <Button type="submit">Login</Button>
    </FormContainer>
  );
};

export default Form;