import {
  Flex,
  Image,
  Button,
  useDisclosure,
  Heading,
  Badge,
  HStack,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { useCallback } from "react";
import DrawerComp from "../Drawer";
import { useState } from "react";

export default function HeaderComp(props) {
  const [drawerType, setDrawerType] = useState("");
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();

  const handleClose = useCallback(() => {
    onClose();
  });

  const handleMenuBtn = useCallback((drawer) => {
    setDrawerType(drawer);
  });

  return (
    <Flex
      w={"100%"}
      h='200px'
      justify={"space-between"}
      alignSelf='flex-start'
      alignItems={"center"}
    >
      <Flex w='30%' align='center' justify='space-between'>
        <Image
          src='https://media.tenor.com/o9p9k-ZIoOIAAAAC/basketball-baseketball.gif'
          boxSize='70px'
          borderRadius='full'
          objectFit={"cover"}
        />
        <Flex w='80%' justify={"flex-start"}>
          <Heading as='h3' size='sm'>
            Абенов Улан Адилетович
          </Heading>
        </Flex>
      </Flex>
      <Flex w='60%' justify='flex-end'>
        {isOpen ? (
          <DrawerComp type={drawerType} handleClose={handleClose} />
        ) : (
          <Flex gap={"5px"}>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleMenuBtn("menu");
                onOpen();
              }}
              colorScheme='teal'
            >
              Меню
            </Button>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleMenuBtn("notification");
                onOpen();
              }}
              colorScheme='teal'
            >
              <HStack>
                <BellIcon />
                <Badge variant='subtle' colorScheme='yellow'>1</Badge>
              </HStack>
            </Button>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
