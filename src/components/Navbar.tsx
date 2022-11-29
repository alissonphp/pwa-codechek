import { useLocation } from "react-router-dom";
import { Center, Flex } from "@chakra-ui/react";

import { ButtonHeader } from "./ButtonHeader";

import imgRegisterSelect from '../assets/images/Vector.svg'
import imgRegister from '../assets/images/register.svg'
import imgSearchSelect from '../assets/images/consultarSelecionado.svg'
import imgSearch from '../assets/images/consultar.svg'

export function Navbar() {
  const location = useLocation()

  return(
    <Center
      bg={"primary"}
      color={"#FFF"}
      fontSize={{ base: '24px', md: '40px', lg: '56px' }}
      w='100%'
    >
      <Flex
        p={'16px'}
        gap={{ base: '152px', md: '192px', lg: '256px' }}
      >
        <ButtonHeader
          to="/"
          icon={location.pathname === '/' ? imgRegisterSelect : imgRegister}
          color={location.pathname === '/' ? '#FFF' : 'secondary' }
        >
          Registrar
        </ButtonHeader>
        <ButtonHeader
          to="/search"
          icon={location.pathname === '/search' ? imgSearchSelect : imgSearch}
          color={location.pathname === '/search' ? '#FFF' : 'secondary' }
        >
          Consultar
        </ButtonHeader>
        
      </Flex>
    </Center>
  )
}