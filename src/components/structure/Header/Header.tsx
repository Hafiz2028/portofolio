import NextLink from 'next/link'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { VscChromeClose } from 'react-icons/vsc'
import { NAME } from '@config/config'
import { Menu } from './Menu'

export const Header: React.FC = () => {
  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <Box as='header' pos='sticky' zIndex='banner' top='0' left='0' right='0'>
      <Flex
        pos='relative'
        zIndex='banner'
        align='center'
        justify='space-between'
        bg='white'
        pt='12'
        pb='4'
        px={{ base: '4', md: '8' }}
        borderColor='black'
        borderBottom='1px solid'
      >
        <NextLink href='/' passHref legacyBehavior>
          <Text
            as='a'
            fontWeight='bold'
            fontSize={{ base: 'lg', md: '2xl' }}
            casing='uppercase'
          >
            {NAME}
          </Text>
        </NextLink>
        <HStack spacing='2'>
          <IconButton
            aria-label={isOpen ? 'Tutup Menu' : 'Buka Menu'}
            icon={isOpen ? <VscChromeClose /> : <HiOutlineMenuAlt4 />}
            variant='icon'
            size='icon'
            onClick={onToggle}
          />
        </HStack>
      </Flex>
      <Menu isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}
