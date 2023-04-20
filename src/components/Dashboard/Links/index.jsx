import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LinksComp(props) {
  // Права, Свид о браке,  Удостак
  const navigate = useNavigate();
  const links = [
    { name: "Водительские права", link: "driver" },
    { name: "Свидетельство о рассторжении брака", link: "marriage" },
    { name: "Удостоверение личности", link: "id" },
  ];

  return (
    <Flex w='100%' direction='column' alignItems='center'>
      {links.map((link, i) => {
        return (
          <Button
            key={i}
            w='100%'
            onClick={(e) => {
              console.log(link.link);
              navigate('/dashboard/' + link.link)
              props.handleClose();
            }}
            variant='ghost'
            color='black'
            colorScheme='teal'
          >
            <Text fontSize={'15px'}>{link.name}</Text>
          </Button>
        );
      })}
    </Flex>
  );
}
