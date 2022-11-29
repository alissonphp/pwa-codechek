import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { ReactJSXElementChildrenAttribute } from '@emotion/react/types/jsx-namespace'

interface Props {
  title: string
  onClose: () => void
  isOpen: boolean
  children: string
}

export const ModalAlert: React.FC<Props> = ({
  title,
  onClose,
  isOpen,
  children
}) => {

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        borderRadius={"4px"}
      >
        <ModalHeader>{ title }</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          { children }
        </ModalBody>
        <ModalFooter>
          <Button
            p={"16px 36px"}
            onClick={onClose}
          >Ok</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}