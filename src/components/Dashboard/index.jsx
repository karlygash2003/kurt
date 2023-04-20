import { Flex, Text } from "@chakra-ui/react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import HeaderComp from "./Header";

export default function Dashboard() {
  const location = useLocation();
  return (
    <Flex mr='10px' w='100%' direction='column' h='90%' gap='10px'>
      <HeaderComp />
      <Flex border='1px' p='5' borderRadius='3xl' w="100%" h='90%'>
        <Outlet />
      </Flex>
    </Flex>
  );
}
