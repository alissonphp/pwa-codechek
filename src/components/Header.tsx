import { Link } from "react-router-dom"
import { Box, Center, Text, Image, Button, Popover, PopoverTrigger, PopoverContent, PopoverBody, PopoverArrow } from "@chakra-ui/react"
import { ArrowBackIcon, ChevronLeftIcon } from "@chakra-ui/icons"

import more_vet from '../assets/images/more_vert.svg'
import { useAuth } from "../contexts/auth"

interface Props {
  comeBack?: boolean
  title?: string
}

export function Header({ comeBack = false, title } : Props) {
  const { Logout } = useAuth()
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
  
        <Popover>
          <PopoverTrigger>
            <Button
              variant="headerButton"
              position="absolute"
              right={{ base: '32px', md: '40px', lg: '56px' }}
            >
              <Image
                src={more_vet}
                />
            </Button>
          </PopoverTrigger>
          <PopoverContent color="textBlack" fontSize="12px" w="auto">
            <PopoverArrow />
            <PopoverBody>
              <Button
                leftIcon={<ArrowBackIcon />}
                variant="headerButton"
                fontWeight="normal"
                onClick={Logout}
              >
                Sair
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Center>

    </Box>
  )
}
