import { useEffect, useState } from "react";
import { Heading, Flex, Text, Button, Box } from "@chakra-ui/react";
import { Select } from "../../components/Select";
import { Link } from "react-router-dom";
import api from "../../services/api.service";
import { useAuth } from "../../contexts/auth";

interface Event {
  id: number
  name: string
}

export const Home = () => {
  const [ events, setEvents ] = useState<Event[] | null>(null)
  const [ idEventSelected, setIdEventSelected ] = useState('')
  const { user } = useAuth()

  useEffect(()=>{
    api.get(`/events/user/${user?.id}`)
      .then(resp => setEvents(resp.data.object_response))
      .catch( err => {
        if (err.response.data.errors) {
          setEvents(null)
        }
        console.log(err)
      })
  }, [user])

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

      {events
        ? <Select
          placeholder="Selecione uma disciplina"
          onChange={ e => setIdEventSelected(e.target.value)}
        >
          {events?.map(event => (
            <option key={event.id} value={event.id}>{event.name}</option>
          ))}
        </Select>
        : <Box>Não há eventos hoje para você!</Box>
      }

      <Flex
        justifyContent="end"
      >
        <Button
          disabled={idEventSelected === '' ? true : false}
          w="9.75rem"
        >
          <Link to={`/scan/event/${idEventSelected}`}>
            Registrar presença
          </Link>
        </Button>
      </Flex>

    </Flex>
)}