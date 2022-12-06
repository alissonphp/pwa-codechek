import {
  Flex,
  Box,
  Text,
  Button,
  Image,
  Heading,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-default.png'

export const Welcome = () => {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/onboarding");
  };

  return (
    <Flex
      height={"100vh"}
      align={"center"}
      justify={"center"}
      color={"blue.800"}
    >
      <Center maxW={"sm"} flexDirection='column'>
        <Box marginBottom={"4"}>
          <Image src={logo} mx={"auto"} />
        </Box>

        <Heading fontSize={"lg"} textAlign={'center'} p={"4"} mb={"4"}>
          Seja bem-vindo!
        </Heading>

        <Text fontSize={"md"} maxW={'80%'} align={"center"} p={"4"} mb={"4"}>
          Registre sua presença.{'\n'}
          Consulte seu histórico de frequência atualizado.{'\n'}
          Sem surpresas no fim do semestre.
        </Text>

        <Button
          mt={"4"}
          p={"20px 50px"}
          bg={"#ECAB0F"}
          color={"#fff"}
          onClick={handleButtonClick}
        >
          Começar
        </Button>
      </Center>
    </Flex>
  );
}