import React, { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Input, Container, Flex } from '@chakra-ui/react'

interface State {
  username: string
  key: string
}

const LoginPage: React.FC = () => {
  const [creds, setCreds] = useState<State>({
    username: '',
    key: ''
  })
  const [isPlaintextKey, setIsPlaintextKey] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCreds({
      ...creds,
      [name]: value
    })
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Your authentication logic goes here
    console.log(creds)
  }

  return (
    <>
      <Flex width="100%" minH="75vh" alignItems="center" justifyContent="center">
        <Container>
          <Box flexGrow={1} boxShadow="base" p="6" rounded="md">
            <form onSubmit={handleSubmit}>
              <FormControl id="username">
                <FormLabel>HIVE Username</FormLabel>
                <Input type="text" name="username" value={creds.username} onChange={handleChange} />
              </FormControl>

              {isPlaintextKey ? (
                <FormControl id="key" mt="6">
                  <FormLabel>Private Posting Key</FormLabel>
                  <Input type="password" name="key" value={creds.key} onChange={handleChange} />
                </FormControl>
              ) : null}

              <Button mt={6} variant={'alive'} type="submit">
                Log In{!isPlaintextKey ? ' with HiveAuth' : ''}
              </Button>
              {isPlaintextKey ? (
                <Button mt={6} ml={3} onClick={() => setIsPlaintextKey(false)}>
                  Use HiveAuth
                </Button>
              ) : (
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
