import type { ReactNode } from 'react'
import DotGrid from '../DotGrid'
import { Box, type BoxProps, Flex, Container } from '@chakra-ui/react'
import { Footer, Header } from '@components/structure'

interface MainLayoutProps extends BoxProps {
  children: ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  ...props
}) => (
  <>
    <Box
      as='div'
      position='fixed' // KUNCI #1: Membuatnya "melayang" dan tetap di layar
      top='0'
      left='0'
      w='100vw' // Mengisi seluruh lebar layar
      h='100vh' // Mengisi seluruh tinggi layar
      zIndex='-1' // KUNCI #2: Meletakkannya di lapisan paling belakang
    >
      <DotGrid
        dotSize={5}
        gap={25}
        baseColor='#ffffff'
        activeColor='#383434'
        proximity={180}
        shockRadius={270}
        shockStrength={7}
        resistance={700}
        returnDuration={0.7}
      />
    </Box>
    <Container maxW='container.xl'>
      <Flex
        minH='100vh'
        direction='column'
        borderColor='black'
        borderTop={{ base: '1px solid', sm: 'none' }}
        borderBottom={{ base: '1px solid', sm: 'none' }}
        borderLeft='1px solid'
        borderRight='1px solid'
      >
        <Header />
        <Box as='main' flex={1} {...props}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Container>
  </>
)
