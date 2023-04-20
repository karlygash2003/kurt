import {
  Flex,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function IdComp() {
  return (
    <Flex w='100%' justify='center' alignItems='center'>
      <Flex
        w='40%'
        justify='center'
        direction='column'
        h='100%'
        gap='5'
        pr='20px'
        alignItems='center'
      >
        <Image
          borderRadius='2xl'
          w='450px'
          h='300px'
          src='https://cdn.discordapp.com/attachments/858613020230025246/1098639166016847892/image.png'
        />
        <Image
          borderRadius='2xl'
          w='450px'
          h='300px'
          src='https://cdn.discordapp.com/attachments/858613020230025246/1098639332409081918/image.png'
        />
      </Flex>
      <Flex
        w='80%'
        justify='center'
        direction='column'
        h='100%'
        gap='5'
        pr='20px'
        alignItems='center'
      >
        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>ФИО</FormLabel>
          <Input color={"blackAlpha"} value={"ИВАНОВ ИВАН ИВАНОВИЧ"} disabled />
        </FormControl>

        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>ИИН</FormLabel>
          <Input color={"blackAlpha"} value={"000415115566"} disabled />
        </FormControl>

        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>Дата рождения</FormLabel>
          <Input color={"blackAlpha"} value={"15.04.2000"} disabled />
        </FormControl>

        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>Место рождения</FormLabel>
          <Input color={"blackAlpha"} value={"Россия"} disabled />
        </FormControl>

        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>Национальность</FormLabel>
          <Input color={"blackAlpha"} value={"Русский"} disabled />
        </FormControl>

        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>Орган выдачи</FormLabel>
          <Input
            color={"blackAlpha"}
            value={"МВД РЕСПУБЛИКИ КАЗАХСТАН"}
            disabled
          />
        </FormControl>

        <FormControl colorScheme={"blackAlpha"}>
          <FormLabel>Срок Действия</FormLabel>
          <Input
            color={"blackAlpha"}
            value={"11.10.2015 - 11.10.2025"}
            disabled
          />
        </FormControl>
      </Flex>
    </Flex>
  );
}
