import {
  useColorMode,
  useDisclosure,
  IconButton,
  Box,
  Button,
  Select,
  HStack,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ReactNode, useContext, useState } from 'react'
import { AppSettingsContext, nodeList } from './AppSettings'

const Navbar = ({ children }: { children: ReactNode }) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { node, setNode, isCustomRPC, setIsCustomRPC } = useContext(AppSettingsContext)
  const [cstmRPCInput, setCstmRPCInput] = useState('')

  return (
    <>
      <Box pos={'fixed'} top={0} h={'50px'} w={'100%'} style={{ WebkitAppRegion: 'drag' }} />
      {children}
      <Box
        pos={'fixed'}
        zIndex={10}
        bottom={0}
        width={'100%'}
        height={'60px'}
        boxShadow={'0px -2px 10px rgba(0, 0, 0, 0.05)'}
        padding={'10px'}
        _dark={{ bg: '#242526' }}
      >
        <HStack spacing={3} float={'right'}>
          <Select
            w={200}
            float={'right'}
            value={node}
            onChange={(ev) => {
              ev.preventDefault()
              if (ev.target.value === 'Custom RPC...') {
                onOpen()
              } else {
                setIsCustomRPC(false)
                setNode(ev.target.value)
              }
            }}
          >
            {nodeList.map((val, i) => (
              <option key={i} value={val}>
                {val}
              </option>
            ))}
            {isCustomRPC ? <option value={node}>[Custom] {node}</option> : null}
          </Select>
          <IconButton
            float={'right'}
            onClick={toggleColorMode}
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            aria-label="Toggle color mode"
          />
        </HStack>
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Custom RPC</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              placeholder="Enter Hive RPC node URL"
              onChange={(evt) => setCstmRPCInput(evt.target.value)}
            ></Input>
          </ModalBody>
          <ModalFooter>
            <Button
              variant={'alive'}
              mr={3}
              onClick={() => {
                setIsCustomRPC(true)
                setNode(cstmRPCInput)
                onClose()
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Navbar
