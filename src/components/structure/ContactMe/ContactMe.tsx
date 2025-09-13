import { useTranslation } from 'next-i18next'
import {
  Button,
  Heading,
  VStack,
  Link,
  HStack,
  Text,
  Stack,
} from '@chakra-ui/react'
import { SiLinkedin, SiGithub, SiMaildotru } from 'react-icons/si'
import { config } from '@config/config'

const contactLinks = [
  {
    label: 'Email Me',
    href: `mailto:${config.email_link}`,
    colorScheme: 'red',
    icon: <SiMaildotru />,
  },
  {
    label: 'LinkedIn',
    href: config.linkedin,
    colorScheme: 'blue',
    icon: <SiLinkedin />,
  },
  {
    label: 'GitHub',
    href: config.github,
    colorScheme: 'gray',
    icon: <SiGithub />,
  },
]

export const ContactMe: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      py='20'
      px={{ base: '4', md: '8' }}
      spacing='8'
      borderColor='black'
      borderTop='1px solid'
    >
      <Heading as='h2' variant='section' size='2xl' textAlign='center'>
        {t('contact-me')}
      </Heading>
      <Text textAlign='center' fontSize='lg' maxW='xl' mx='auto'>
        I&apos;m always open to discussing new projects or opportunities. Feel
        free to reach out!
      </Text>

      {/* Gunakan Stack biar mobile lebih rapih */}
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 4, md: 6 }}
        justify='center'
        w='full'
      >
        {contactLinks.map((link) => (
          <Button
            key={link.label}
            as={Link}
            href={link.href}
            isExternal
            variant='solid'
            size='lg'
            colorScheme={link.colorScheme}
            w={{ base: 'full', md: 'auto' }}
          >
            <HStack spacing={2} justify='center'>
              {link.icon}
              <Text>{link.label}</Text>
            </HStack>
          </Button>
        ))}
      </Stack>
    </VStack>
  )
}
