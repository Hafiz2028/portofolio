import { useTranslation } from 'next-i18next'
import {
  Heading,
  Stack,
  Text,
  VStack,
  Button,
  HStack,
  Link,
} from '@chakra-ui/react'
import { SiLinkedin, SiMaildotru } from 'react-icons/si'
import { config } from '@config/config'

export const ContactMe: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <Stack
      as='section'
      id='contact'
      direction={{ base: 'column', md: 'row' }}
      py='20'
      px={{ base: '4', md: '8' }}
      borderColor='black'
      borderTop='1px solid'
      spacing={{ base: '16', md: '4', xl: '2' }}
      scrollMarginTop='calc(var(--chakra-sizes-header-height) - 1px)'
    >
      <Heading as='h2' flex='1' variant='section' size='2xl'>
        {t('contact-me')}
      </Heading>
      <VStack flex='1' spacing='6' align='flex-start'>
        <Text fontSize='lg'>
          I&apos;m always open for new opportunities, collaborations, or just a
          chat. Feel free to reach out to me.
        </Text>
        <HStack spacing='4' mt={4}>
          <Button
            as={Link}
            href={config.email_link}
            isExternal
            leftIcon={<SiMaildotru />}
            variant='outline'
          >
            Email Me
          </Button>

          <Button
            as={Link}
            href={config.linkedin}
            isExternal
            leftIcon={<SiLinkedin />}
            colorScheme='linkedin'
          >
            LinkedIn
          </Button>
        </HStack>
      </VStack>
    </Stack>
  )
}
