import { useState } from "react";
import { Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import { Select } from "../../components/Select";
import { Link } from "react-router-dom";

export const Home = () => {
  const [matterSelected, setMatterSelected] = useState('')
  const matter = ['Internet of Things', 'DNA Empreendedor']

  return (
    <Flex
      p={{ base: '16px', md: '48px', lg: '80px' }}
      flexDirection="column"
      gap={"32px"}
    >
      <Box>
        <Heading size="lg">
          Olá. 👋
        </Heading>

        <Text fontFamily={'Arial'}>
          Lembre-se de registrar sua presença.
        </Text>
      </Box>

      <Select
        placeholder="Selecione uma disciplina"
        onChange={ e => setMatterSelected(e.target.value)}
      >
        {matter.map(( item, i ) => (
          <option key={i}>{item}</option>
        ))}
      </Select>

      <Flex
        justifyContent="end"
      >
        <Button
          disabled={matterSelected === '' ? true : false}
          w="9.75rem"
        >
          <Link to="/scan">
            Registrar presença
          </Link>
        </Button>
      </Flex>

    </Flex>
)}