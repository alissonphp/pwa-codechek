import { Box, Flex, Grid, GridItem, Heading, Spacer, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardFrequency } from "../../components/CardFrequency";
import { Header } from "../../components/Header";
import { useSubject, Subject as SubjectProps } from "../../contexts/subject";

export function Subject(){
  const [ subjectSelected, setSubjectSelected ] = useState<SubjectProps>()
  const { subjects } = useSubject()
  const { id } = useParams()

  useEffect(() => {
    setSubjectSelected(subjects.find( subject => subject.id === id))
  })

  return(
    <>
      <Header title={subjectSelected?.name} comeBack/>

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
              >80%</Text>
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
              >8</Text>
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
              >2</Text>
            </GridItem>
          </Grid>
        </Flex>

        <Heading
          size={{ base: "md", md: "md", lg: "lg" }}
          py="4"
        >
          Recibos dos registros
        </Heading>

        <Grid templateColumns="1fr 1fr" gap={4}>
          <GridItem w="100%">
            <CardFrequency
              bg="cardSecondary"
              date="08/10"
              hours="00:00"
              py="0"
              px="3"
            />
          </GridItem>
          <GridItem>
            <CardFrequency
              bg="cardSecondary"
              date="07/10"
              hours="00:00"
              py="0"
              px="3"
            />
          </GridItem>
          <GridItem>
            <CardFrequency
              bg="cardSecondary"
              date="06/10"
              hours="00:00"
              py="0"
              px="3"
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}