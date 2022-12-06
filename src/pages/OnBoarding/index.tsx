import {
  Flex,
  Text,
  Button,
  Image,
  Heading,
  Center,
} from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-default.png'
import board2 from '../../assets/images/onBoarding-2.svg'
import '@splidejs/react-splide/css';

export const OnBoarding = () => {
  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <Flex
      height={"100vh"}
      align={"center"}
      justify={"center"}
      color={"blue.800"}
    >
      <Splide aria-label="On Boarding" options={{
        arrows: false,
      }}>
        <SplideSlide>
          <Center maxW={"sm"} flexDirection='column' height={"100vh"}>
            <Image src={logo} mx={"auto"} />
            <Heading fontSize={"lg"} textAlign={'center'} p={"4"} my={"2"}>
              Gere um QR code e escaneie
            </Heading>
            <Text fontSize={"md"} maxW={'80%'} align={"center"} p={"4"} mb={"4"}>
              A leitura do QR code garante sua presença em aula. O leitor fica em sua sala de aula.
            </Text>
          </Center>
        </SplideSlide>
        <SplideSlide>
          <Center maxW={"sm"} flexDirection='column' height={"100vh"}>
            <Image src={board2} mx={"auto"} />
            <Heading fontSize={"lg"} textAlign={'center'} my={"8"} mb={'4'}>
              Consulte sua frequência
            </Heading>
            <Text fontSize={"md"} maxW={'80%'} align={"center"}>
              Presenças, faltas. Tudo atualizado diariamente.
            </Text>
            <Button
              mt={"4"}
              p={"20px 50px"}
              bg={"#ECAB0F"}
              color={"#fff"}
              onClick={handleButtonClick}
            >
              Entendi
            </Button>
          </Center>
        </SplideSlide>
      </Splide>
    </Flex>
  );
}