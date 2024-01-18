import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Container, Flex, useToast } from '@chakra-ui/react'

interface State {
  username: string
  key: string
}

const LoginPage: React.FC = () => {
  const [creds, setCreds] = useState<State>({
    username: '',
    key: ''
  })
  const [isPlaintextKey, setIsPlaintextKey] = useState(true)
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const toast = useToast({
    position: 'bottom-left',
    isClosable: true
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCreds({
      ...creds,
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    if (!creds.username)
      return void toast({
        title: 'Error',
        description: 'HIVE username is required',
        status: 'error'
      })
    if (isPlaintextKey) {
      if (!creds.key)
        return void toast({
          title: 'Error',
          description: 'HIVE posting key is required',
          status: 'error'
        })
      setIsLoggingIn(true)
    }
  }

  return (
    <>
      <Flex width="100%" minH="75vh" alignItems="center" justifyContent="center">
        <Container>
          <Box flexGrow={1} boxShadow="base" p="6" rounded="md">
            <form onSubmit={handleSubmit}>
              <FormControl id="username">
                <FormLabel>HIVE Username</FormLabel>
                <Input type="text" name="username" value={creds.username} onChange={handleChange} disabled={isLoggingIn} />
              </FormControl>

              {isPlaintextKey ? (
                <FormControl id="key" mt="6">
                  <FormLabel>Private Posting Key</FormLabel>
                  <Input type="password" name="key" value={creds.key} onChange={handleChange} disabled={isLoggingIn} />
                </FormControl>
              ) : null}

              <Button mt={6} variant={'alive'} type="submit" disabled={isLoggingIn}>
                Log In{!isPlaintextKey ? ' with HiveAuth' : ''}
              </Button>
              {isPlaintextKey ? null : (
                // <Button mt={6} ml={3} onClick={() => setIsPlaintextKey(false)}>
                //   Use HiveAuth
                // </Button>
                <Button mt={6} ml={3} onClick={() => setIsPlaintextKey(true)}>
                  Use Plaintext Key
                </Button>
              )}
            </form>
          </Box>
        </Container>
      </Flex>
    </>
  )
}

export default LoginPage
