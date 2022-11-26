import { Box, Button, Center, Text } from "@chakra-ui/react";
import { Qrcode } from "../../components/Qrcode";

export function Scan(){
  return (
    <Box>
      <Center>
        <Qrcode
          text={'teste.com.br'}
        />
      </Center>
      <Text
        color="#292D32"
        textAlign={'center'}
        px="48px"
      >
        Posicione o QR code de frente para o leitor. Aguarde a vibração e o sinal sonoro.
      </Text>

      <Center mt="5">
        <Button>Mostre-me como</Button>
      </Center>
    </Box>
  )
}