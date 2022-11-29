import { Box, Card, CardBody, CardProps, Flex, Spacer, Text } from "@chakra-ui/react"


interface Props extends CardProps {
  date: string
  hours: string
}

export function CardFrequency({ date, hours, ...rest }: Props){
  return(
    <Card {...rest}>
      <CardBody>
        <Flex>
          <Box>
            <Text textAlign={"center"}>Data</Text>
            <Text textAlign={"center"} fontWeight={"bold"}>{date}</Text>
          </Box>
          <Spacer />
          <Box>
            <Text textAlign={"center"}>Hora</Text>
            <Text textAlign={"center"} fontWeight={"bold"}>{hours}</Text>
          </Box>
        </Flex>
      </CardBody>
    </Card>
  )
}