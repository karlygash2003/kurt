import {
  Flex,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";

export default function MarriageComp() {
  return (
    <Flex w='100%' justify='center'>
      <Flex
        w='50%'
        justify='center'
        direction='column'
        gap='5'
        pl='20px'
        alignItems='flex-start'
      >
        <Image
          borderRadius='3xl'
          w='550px'
          h='500px'
          src='https://media.discordapp.net/attachments/858613020230025246/1098634453133307914/28626f7ff77acb8b28b5ffca62ba5c29.png?width=564&height=424'
        />
      </Flex>
      <Flex
        w='80%'
        justify='space-between'
        h='100%'
        gap='5'
        pr='20px'
        alignItems='center'
      >
        <Flex
          w='80%'
          justify='flex-start'
          direction='column'
          h='100%'
          gap='5'
          pr='20px'
          alignItems='center'
        >
          <Heading>Муж</Heading>
          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>ФИО</FormLabel>
            <Input
              color={"blackAlpha"}
              value={"АЛАГУЗОВ ТУРСЕНГАЛИ ТУРУМОВИЧ"}
              disabled
            />
          </FormControl>

          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>Дата рождения</FormLabel>
            <Input color={"blackAlpha"} value={"17.09.1989 года"} disabled />
          </FormControl>
          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>Номер документа</FormLabel>
            <Input color={"blackAlpha"} value={"24381712"} disabled />
          </FormControl>
          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>Дата выдачи</FormLabel>
            <Input color={"blackAlpha"} value={"07.12.2017 года"} disabled />
          </FormControl>
        </Flex>

        <Flex
          w='80%'
          justify='flex-start'
          direction='column'
          h='100%'
          gap='5'
          pr='20px'
          alignItems='center'
        >

          <Heading>Жена</Heading>
          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>ФИО</FormLabel>
            <Input
              color={"blackAlpha"}
              value={"ЕСЕНТАЕВА БАЯН МАКСАТОВНА"}
              disabled
            />
          </FormControl>

          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>Дата рождения</FormLabel>
            <Input color={"blackAlpha"} value={"09.01.1974 года"} disabled />
          </FormControl>
          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>Номер документа</FormLabel>
            <Input color={"blackAlpha"} value={"24381712"} disabled />
          </FormControl>
          <FormControl colorScheme={"blackAlpha"}>
            <FormLabel>Дата выдачи</FormLabel>
            <Input color={"blackAlpha"} value={"07.12.2017 года"} disabled />
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}
