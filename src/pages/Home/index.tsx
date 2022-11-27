import { useState } from "react";
import { Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import { Select } from "../../components/Select";
import { Link } from "react-router-dom";
import { useSubject } from "../../contexts/subject";

export const Home = () => {
  const [subjectSelected, setSubjectSelected] = useState('')
  const { subjects } = useSubject()

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
        onChange={ e => setSubjectSelected(e.target.value)}
      >
        {subjects.map(subject => (
          <option key={subject.id}>{subject.name}</option>
        ))}
      </Select>

      <Flex
        justifyContent="end"
      >
        <Button
          disabled={subjectSelected === '' ? true : false}
          w="9.75rem"
        >
          <Link to="/scan">
            Registrar presença
          </Link>
        </Button>
      </Flex>

    </Flex>
)}