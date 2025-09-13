import { useTranslation } from 'next-i18next'
import { Button, Heading, VStack, Link, HStack, Text } from '@chakra-ui/react'
import { SiLinkedin, SiGithub, SiMaildotru } from 'react-icons/si'
import { config } from '@config/config'

// Hapus properti 'icon' dari data
const contactLinks = [
  {
    label: 'Email Me',
    href: `mailto:${config.email_link}`,
    colorScheme: 'red',
  },
  { label: 'LinkedIn', href: config.linkedin, colorScheme: 'blue' },
  { label: 'GitHub', href: config.github, colorScheme: 'gray' },
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
      <HStack
        spacing={{ base: 4, md: 8 }}
        justify='center'
        direction={{ base: 'column', md: 'row' }}
        w={{ base: 'full', md: 'auto' }}
        mx='auto'
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
            <HStack spacing={2}>
              {link.label === 'Email Me' && <SiMaildotru />}
              {link.label === 'LinkedIn' && <SiLinkedin />}
              {link.label === 'GitHub' && <SiGithub />}
              <Text>{link.label}</Text>
            </HStack>
          </Button>
        ))}
      </HStack>
    </VStack>
  )
}
