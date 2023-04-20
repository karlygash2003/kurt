import {
  Flex,
  Image,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function DriverComp() {
  return (
    <Flex w='100%' justify='center'>
      <Flex
        w='40%'
        justify='center'
        direction='column'
        gap='5'
        pl='20px'
        alignItems='flex-start'
      >
        <Image
          borderRadius='2xl'
          w='450px'
          h='300px'
          src='https://cdn.discordapp.com/attachments/1094336172060315790/1098629558762213466/image.png'
        />
        <Image
          borderRadius='2xl'
          w='450px'
          h='300px'
          src='https://cdn.discordapp.com/attachments/1094336172060315790/1098629668703322232/image.png'
        />
      </Flex>
      <Flex
        w='60%'
        justify='flex-start'
        direction='column'
        h="100%"
        gap='5'
        pr="20px"
        alignItems='center'
      >
        <FormControl colorScheme={'blackAlpha'}>
          <FormLabel>ФИО</FormLabel>
          <Input color={'blackAlpha'} value={'Мусатов Алмаз Серикович'} disabled />
        </FormControl>

        <FormControl colorScheme={'blackAlpha'}>
          <FormLabel>ИИН</FormLabel>
          <Input color={'blackAlpha'} value={'821119300412'} disabled />
        </FormControl>

        <FormControl colorScheme={'blackAlpha'}>
          <FormLabel>Дата рождения</FormLabel>
          <Input color={'blackAlpha'} value={'19.11.1982'} disabled />
        </FormControl>
        <FormControl colorScheme={'blackAlpha'}>
          <FormLabel>Номер документа</FormLabel>
          <Input color={'blackAlpha'} value={'000012'} disabled />
        </FormControl>
        <FormControl colorScheme={'blackAlpha'}>
          <FormLabel>Дата выдачи</FormLabel>
          <Input color={'blackAlpha'} value={'16.03.2009'} disabled />
        </FormControl>
        <FormControl colorScheme={'blackAlpha'}>
          <FormLabel>Срок действия</FormLabel>
          <Input color={'blackAlpha'} value={'16.03.2019'} disabled />
        </FormControl>
      </Flex>
    </Flex>
  );
}
