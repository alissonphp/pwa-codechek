import { Link } from "react-router-dom";
import { Button, Flex, Image, Text } from "@chakra-ui/react"

interface Props {
  children: any
  icon: string
  color?: string
  to: string
}

export function ButtonHeader({children, icon, color, to}: Props){
  return(
    <Button variant='headerButton'>
      <Link to={to}>
        <Flex
          flexDirection={"column"}
          alignItems='center'
          gap={'6px'}
        >
          <Image src={icon} w={'20px'}/>

          <Text
            fontWeight={'400'}
            fontSize={'12px'}
            color={color ? color : '#FFF'}
          >
            { children }
          </Text>
        </Flex>
      </Link>
    </Button>
  )
}