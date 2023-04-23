import {
  Button,
  Flex,
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  useDisclosure,
  Heading,
  Image,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Icon from "/icon.svg";

export default function OTPComp() {
  const otp = 1111;
  const [inputValue, setInputValue] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();

  const handleInputChange = useCallback((value) => {
    if (value) {
      setInputValue(value);
    }
  });

  const handleSubmitForm = useCallback((e) => {
    if (otp === Number(inputValue)) {
      navigate("/dashboard", {
        state: { name: location.state.name || "Алеша" },
      });
    }

    onToggle();
  });

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        onToggle();
      }, 2000);
    }
  }, [isOpen]);

  return (
    <Flex
      direction='column'
      alignItems='center'
      justify='center'
      h='100%'
      w='100%'
    >
      <Flex
        direction='column'
        alignItems='center'
        justify='center'
        w='50%'
        gap='3px'
        color='teal'
      >
        <Image src={Icon} boxSize='300px' />
        <Heading>Двухфакторная аутентификация</Heading>
      </Flex>
      <Flex
        marginTop='15px'
        direction='column'
        alignItems='center'
        justify='center'
        w='50%'
        gap='10px'
        color='teal'
      >
        <Input
          color='teal'
          placeholder='Введите ОТП код'
          onChange={(e) => {
            e.preventDefault();
            handleInputChange(e.target.value);
          }}
        />
        <Button
          w='100%'
          variant='ghost'
          color='teal'
          onClick={(e) => {
            handleSubmitForm();
          }}
        >
          Подтвердить
        </Button>

        {isOpen ? (
          <Alert status='error'>
            <AlertIcon />
            <AlertTitle>Ошибка!</AlertTitle>
            <AlertDescription>Введен неверный ОТП код!</AlertDescription>
          </Alert>
        ) : null}
      </Flex>
    </Flex>
  );
}
