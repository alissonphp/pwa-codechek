import { Box, Card, CardBody, CardProps, Flex, Spacer, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { formatDateTime } from "../utils/formatDateTimeApi"

interface Props extends CardProps {
  entry_date: string
  exit_date: string
}

interface DateTime {
  date: string
  time: string
}

export function CardFrequency({ entry_date, exit_date, ...rest }: Props){
  const [entryDate, setEntryDate] = useState<DateTime>({} as DateTime)
  const [exitDate, setExitDate] = useState<DateTime>({} as DateTime)

  useEffect(() => {
    setEntryDate(formatDateTime(entry_date))
    setExitDate(formatDateTime(exit_date) )
  }, [entry_date, exit_date])

  return(
    <Card {...rest}>
      <CardBody
        py={{base: "1", md: "4", lg: "4"}}
        px={{base: "2", sm: "8", md: "16", lg: "32"}}
      >
        <Flex>
          <Box fontSize={{base: "12px", md: "14px", lg: "16px"}}>
            <Text textAlign={"center"}>Entrou</Text>
            <Text textAlign={"center"} fontWeight={"bold"}>
              {entryDate.date}
            </Text>
            <Text textAlign={"center"} fontWeight={"bold"}>
              {entryDate.time}
            </Text>
          </Box>
          <Spacer />
          <Box  fontSize={{base: "12px", md: "14px", lg: "16px"}}>
            <Text textAlign={"center"}>Saiu</Text>
            <Text textAlign={"center"} fontWeight={"bold"}>
              {exitDate.date}
            </Text>
            <Text textAlign={"center"} fontWeight={"bold"}>
              {exitDate.time}
            </Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}