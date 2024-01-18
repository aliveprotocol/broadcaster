import React from 'react'
import ReactDOM from 'react-dom/client'
import { inputAnatomy } from '@chakra-ui/anatomy'
import { ChakraProvider, extendTheme, createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import App from './App'
import { AppSettings } from './components/AppSettingsProvider'

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(inputAnatomy.keys)

const inputTheme = defineMultiStyleConfig({
  defaultProps: {
    //@ts-ignore
    focusBorderColor: 'red.400'
  }
})

const theme = extendTheme({
  sizes: {
    ss: '22em'
  },
  colors: {
    red: {
      50: '#ffe5e5',
      100: '#ffcccc',
      200: '#ffbbbb',
      300: '#ff8888',
      400: '#ff7777',
      450: '#ff5555', // our base color
      500: '#ff3333',
      600: '#ff2222',
      700: '#ee0000',
      800: '#b30000',
      900: '#990000'
    }
  },
  config: {
    useSystemColorMode: true,
    initialColorMode: 'dark'
  },
  components: {
    Button: {
      variants: {
        alive: () => ({
          color: '#ffffff',
          bg: 'red.450',
          _hover: {
            bg: 'red.500'
          },
          _active: {
            bg: 'red.700'
          }
        })
      }
    },
    Input: inputTheme
  }
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AppSettings>
          <App />
        </AppSettings>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
)
