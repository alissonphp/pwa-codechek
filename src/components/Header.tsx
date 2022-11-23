import { Box, Flex, Center, Text, Image } from "@chakra-ui/react"

import imgRegister from '../assets/images/Vector.svg'
import imgSearch from '../assets/images/consultar.svg'
import more_vet from '../assets/images/more_vert.svg'
import { ButtonHeader } from "./ButtonHeader"

export const Header: React.FC = () => {
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
        <Text>
          Code Check
        </Text>
  
        <Image
          src={more_vet}
          position="absolute"
          right={{ base: '32px', md: '40px', lg: '56px' }}
          />
      </Center>

      <Center w='100%'>
        <Flex
          p={'24px'}
          gap={{ base: '152px', md: '192px', lg: '256px' }}
        >
          <ButtonHeader icon={imgRegister}>
            Registrar
          </ButtonHeader>
          <ButtonHeader icon={imgSearch} color='secondary'>
            Consultar
          </ButtonHeader>
          
        </Flex>
      </Center>

    </Box>
  )
}
