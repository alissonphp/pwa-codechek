import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Center, Text, useDisclosure } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { ModalAlert } from "../../components/ModalAlert";
import api from "../../services/api.service";
import { useAuth } from "../../contexts/auth";

export function Scan(){
  const [ qrCode, setQrCode ] = useState('')
  const [ messageAlert, setMessageAlert ] = useState('')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ err, setErr ] = useState('')
  const { id } = useParams()
  const { user } = useAuth()

  useEffect(()=>{
    const loadData = async () => {
      try {
        const { data: dataToken } = await api.get(`events/${id}/user/${user?.id}/get/token`)
        setQrCode(dataToken.object_response.qr_code)

        const { data: dataPresenceInitial } = await api.get(`events/${id}/user/${user?.id}/presence`)

        const interval = setInterval(async () => {
          const { data: dataPresenceFinal } = await api.get(`events/${id}/user/${user?.id}/presence`)

          if (dataPresenceInitial.object_response.entry_date !== dataPresenceFinal.object_response.entry_date) {
            setMessageAlert('Entrada registrada com sucesso!')
            onOpen()
            clearInterval(interval)
          }

          if (dataPresenceInitial.object_response.exit_date !== dataPresenceFinal.object_response.exit_date) {
            setMessageAlert('Saída registrada com sucesso!')
            onOpen()
            clearInterval(interval)
          }
        }, 3000)
      } catch (error) {
        console.log(error)
        setErr('Erro')
      }
    }

    loadData()
  },[id, user, onOpen])

  return (
    <>
      <Header title="Escanear" comeBack/>
      <Box>
        <Center>
          {err === ''
            ? <img
              src={qrCode}
              alt="Imagem QrCode para registrar presença"
            />
            : <Box>{err}</Box>
          }
        </Center>
        <Text
          color="#292D32"
          textAlign={'center'}
          px="48px"
        >
          Posicione o QR code de frente para o leitor. Aguarde a vibração e o sinal sonoro.
        </Text>

        <Center mt="5">
          <Button>Mostre-me como</Button>
        </Center>
      </Box>

      <ModalAlert title="Confirmado" isOpen={isOpen} onClose={onClose} children={messageAlert}/>
    </>
  )
}