import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

export default function AuthComp() {
  const navigate = useNavigate();
  const [logInState, setLoginState] = useState({ login: "", password: "" });

  const handleChangeInput = useCallback((name, value) => {
    setLoginState((state) => {
      return {
        ...state,
        [name]: value,
      };
    });
  });

  const handleSubmitForm = useCallback(() => {
    if (Object.values(logInState).every((k) => k)) {
      navigate("/otp", { state: { name: logInState.login } });
    }
  });

  useEffect(() => {
    console.log(logInState);
  }, [logInState]);

  return (
    <Flex
      w='100%'
      p='10px'
      direction='column'
      alignItems='center'
      h='100%'
      justify='center'
    >
      <Flex w='80%' justify='center' direction='column' alignItems='center'>
        <Heading color='teal'>Авторизация</Heading>
      </Flex>
      <Flex
        marginTop='15px'
        w='50%'
        justify='center'
        direction='column'
        alignItems='center'
        gap='10px'
        color='teal'
      >
        <Input
          placeholder='логин'
          name='login'
          onChange={(e) => {
            e.preventDefault();
            const { name, value } = e.target;
            handleChangeInput(name, value);
          }}
        />
        <Input
          placeholder='Пароль'
          type='password'
          name='password'
          onChange={(e) => {
            e.preventDefault();
            const { name, value } = e.target;
            handleChangeInput(name, value);
          }}
        />
        <Button
          w='100%'
          variant='ghost'
          color='teal'
          onClick={(e) => {
            e.preventDefault();
            handleSubmitForm();
          }}
        >
          Войти
        </Button>
      </Flex>
    </Flex>
  );
}
