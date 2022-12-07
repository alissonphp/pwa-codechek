import { useEffect, useState } from "react";
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { CardFrequency } from "../../components/CardFrequency";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api.service";

interface SubjectProps {
  id: number
  name: string
  workload: number
  user_name: string
  user_uid: string
  owner_name: string
  owner_uid: string
  user_workload: string
  user_workload_perc: string
  subject_presences: number
  subject_absences: number
}

interface Presences {
  id: number
  user: number
  event: number
  entry_date: string
  exit_date: string
  status: number
  created_at: string
  updated_at: string
}

export function Subject(){
  const [ subject, setSubject ] = useState<SubjectProps | null>(null)
  const [ presences, setPresences ] = useState<Presences[]>([])
  const { id } = useParams()
  const { user } = useAuth()

  useEffect(() => {
    async function loadDataSubjects() {
      const { data } = await api.get(`/subjects/${id}/${user?.id}/get`)

      setPresences(data.object_response.list_presences)
      setSubject(data.object_response.object_subject[0])
    }
    loadDataSubjects()
  },[id, user])

  return(
    <>
      <Header title={subject?.name} comeBack/>

      <Box
        px="4"
      >
        <Heading
          size={{ base: "md", md: "md", lg: "lg" }}
          py="4"
        >
          Resumo
        </Heading>

        <Flex w={"100%"}>
          <Box
            bg="cardPrimary"
            w={"66%"}
            borderRadius={"6px 0px 0px 6px"}
            p="4"
            color="#FFF"
          >
            <Text
              textAlign="center"
              fontSize={{base: "12px", md: "16px", lg: "16px"}}
            >Frequência</Text>
            <Text
              py={{base: "5", md: "6", lg: "7"}}
              textAlign="center"
              fontSize={{base: "6xl", md: "8xl", lg: "10xl"}}
              fontWeight="bold"
              >{
                subject?.user_workload_perc
                  ? `${parseFloat(subject.user_workload_perc).toFixed(2)} %`
                  : '0%'
              }</Text>
          </Box>
          <Grid
            templateColumns="repeat(1, 1fr)"
            templateRows="2fr"
            bg="cardSecondary"
            w={"34%"}
            borderRadius="0px 6px 6px 0px"
            p="4"
            color="textBlack"
          >
            <GridItem rowSpan={1}>
              <Text
                fontSize={{base: "12px", md: "16px", lg: "16px"}}
                textAlign="center"
              >Presenças</Text>
              <Text
                fontWeight="bold"
                textAlign="center"
                fontSize={"3xl"}
              >{ subject?.subject_presences }
              </Text>
            </GridItem>

            <GridItem rowSpan={1}>
              <Text
                textAlign="center"
                fontSize={{base: "12px", md: "16px", lg: "16px"}}
              >Faltas</Text>
              <Text
                fontWeight="bold"
                textAlign="center"
                fontSize={"3xl"}
              >{ subject?.subject_absences }</Text>
            </GridItem>
          </Grid>
        </Flex>

        <Heading
          size={{ base: "md", md: "md", lg: "lg" }}
          py="4"
        >
          Recibos dos registros
        </Heading>

        <Grid templateColumns="1fr 1fr" gap={4}>{
          presences?.length > 0
            ? presences.map(presence => (
              <GridItem key={presence.id}>
                <CardFrequency
                  bg="cardSecondary"
                  entry_date={presence.entry_date}
                  exit_date={presence.exit_date}
                />
              </GridItem>
            ))
            : <Box>Você não possui presença confirmada!</Box>
        }</Grid>
      </Box>
    </>
  )
}