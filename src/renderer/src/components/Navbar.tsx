import { useColorMode, IconButton, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { ReactNode } from 'react'

const Navbar = ({ children }: { children: ReactNode }) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box pos={'fixed'} top={0} h={'30px'} w={'100%'} style={{ WebkitAppRegion: 'drag' }} />
      {children}
      <Box
        pos={'fixed'}
        zIndex={10}
        bottom={0}
        width={'100%'}
        height={'60px'}
        boxShadow={'0px -2px 10px rgba(0, 0, 0, 0.05)'}
        padding={'10px'}
        _dark={{ bg: '' }}
      >
        <IconButton
          float={'right'}
          onClick={toggleColorMode}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          aria-label="Toggle color mode"
        />
      </Box>
    </>
  )
}

export default Navbar
