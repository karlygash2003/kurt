import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";
import { useCallback } from "react";
import LinksComp from "../Links";

export default function DrawerComp(props) {
  const [open, setOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  });
  const handleClose = useCallback(() => {
    props.handleClose();
  });

  return (
    <>
      {props.type === "menu" ? (
        <Drawer isOpen={true} onClose={handleClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Разделы</DrawerHeader>

            <DrawerBody>
              <LinksComp handleClose={handleClose} />
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={handleClose}>
                Закрыть
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <AlertDialog isOpen={open}>
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Внимание!
              </AlertDialogHeader>

              <AlertDialogBody>
                Срок Ваших водительских прав истекает 16.03.2019! 
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  onClick={(e) => {
                    toggleOpen();
                    handleClose();
                  }}
                >
                  Окей
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </>
  );
}
