import { Link } from "react-router-dom"
import { Box, Center, Text, Image, Button } from "@chakra-ui/react"
import { ChevronLeftIcon } from "@chakra-ui/icons"

import more_vet from '../assets/images/more_vert.svg'

interface Props {
  comeBack?: boolean
  title?: string
}

export function Header({ comeBack = false, title } : Props) {

  return(
    <Box
      bg={"primary"}
      color={"#FFF"}
      fontSize={{ base: '24px', md: '40px', lg: '56px' }}
      paddingTop={'56px'}
    >
      <Center
        w={'100%'}
        position='relative'
      >
        { comeBack &&
        <Button
          variant="headerButton"
          position="absolute"
          left={{ base: '32px', md: '40px', lg: '56px' }}
        >
          <Link to="/">
            <ChevronLeftIcon w="2em" h="2em"/>
          </Link>
        </Button>}

        <Text>
          { !title
          ? 'Code Check'
          :  title}
        </Text>
  
        <Image
          src={more_vet}
          position="absolute"
          right={{ base: '32px', md: '40px', lg: '56px' }}
          />
      </Center>

    </Box>
  )
}
