import { useState } from "react";
import { Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import { Select } from "../../components/Select";
import { Header } from "../../components/Header";

export const Home = () => {
  const [matter, setMatter] = useState('')

  return (
  <>
    <Header />
    <Flex
      p={{ base: '16px', md: '48px', lg: '80px' }}
      flexDirection="column"
      gap={"32px"}
    >
      <Box>
        <Heading size="lg">
          Consulta de Frequência
        </Heading>

        <Text fontFamily={'Arial'}>
          Acompanhe suas presenças e faltas.
        </Text>
      </Box>

      <Select
        placeholder="Selecione uma disciplina"
        onChange={ e => setMatter(e.target.value)}
      >
        <option>Teste 1</option>
        <option>Teste 2</option>
        <option>Teste 3</option>
      </Select>

      <Flex
        justifyContent="end"
      >
        <Button
          color={ matter === '' ? "#8E8E93" : '#FFF'}
          bg={matter === '' ? "#DCDCDC" : 'primary'}
          p={"18px"}
          fontWeight={"400"}
          borderRadius={"4px"}
          h={"auto"}
          w="9.75rem"
        >
          Consultar
        </Button>
      </Flex>
    </Flex>
  </>
)}