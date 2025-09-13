import { useTranslation } from 'next-i18next'
import { Flex, Link, Text, HStack, IconButton, Stack } from '@chakra-ui/react'
import { VscArrowUp } from 'react-icons/vsc'
import { usePostHog } from 'posthog-js/react'
import { config } from '@config/config'

const links: { name: string; href: string }[] = [
  { name: 'Email', href: config.email_link },
  { name: 'Github', href: config.github },
  { name: 'LinkedIn', href: config.linkedin },
]

export const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  const posthog = usePostHog()

  return (
    <Flex
      as='footer'
      direction={{ base: 'column', md: 'row' }}
      align={{ base: 'flex-start', md: 'center' }}
      justify='space-between'
      mt='4'
      pt='12'
      pb='24'
      px={{ base: 4, md: 8 }}
      borderTop='1px solid'
      borderColor='black'
      gap={{ base: 8, md: 0 }}
    >
      {/* Bagian kiri */}
      <Text casing='uppercase' fontSize={{ base: 'sm', md: 'md' }}>
        {config.copyright}
      </Text>

      {/* Bagian kanan */}
      <HStack spacing={{ base: 6, md: 8 }} align='center' wrap='wrap'>
        {links.map(({ name, href }) => (
          <Link
            key={name}
            title={name}
            href={href}
            variant='social'
            onClick={() =>
              posthog.capture('footer_link_clicked', { name, link: href })
            }
            isExternal
            fontSize={{ base: 'sm', md: 'md' }}
          >
            {name}
          </Link>
        ))}
        <IconButton
          aria-label={t('go-to-top')}
          title={t('go-to-top')}
          icon={<VscArrowUp />}
          variant='icon'
          size='sm'
          onClick={() => window.scrollTo(0, 0)}
        />
      </HStack>
    </Flex>
  )
}
