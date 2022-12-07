import { useEffect, useState } from "react";
import { Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import { Select } from "../../components/Select";
import { Link } from "react-router-dom";
import api from "../../services/api.service";
import { useAuth } from "../../contexts/auth";

interface Subject {
  id: number
  name: string
}

export const Search = () => {
  const [subjectSelected, setSubjectSelected] = useState('')
  const [ subjects, setSubject ] = useState<Subject[] | null>(null)
  const { user } = useAuth()

  useEffect(()=>{
    async function loadData(){
      const { data } = await api.get(`subjects/${user?.id}/get`)
      setSubject(data.object_response)
    }
    loadData()
  }, [user])

  return (
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

      {subjects
        ? <Select
          placeholder="Selecione uma disciplina"
          onChange={ e => setSubjectSelected(e.target.value)}
        >
          {subjects?.map(subject => (
            <option key={subject.id} value={subject.id}>{subject.name}</option>
          ))}
        </Select>
        : <Box>Não há disciplinas cadastradas para você!</Box>
      }

      <Flex
        justifyContent="end"
      >
        <Button
          disabled={subjectSelected === '' ? true : false}
          w="9.75rem"
        >
          <Link to={`/report/subject/${subjectSelected}`}>
            Consultar
          </Link>
        </Button>
      </Flex>
    </Flex>
)}