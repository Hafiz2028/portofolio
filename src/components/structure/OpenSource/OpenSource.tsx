import { useTranslation } from 'next-i18next'
import { Box, Heading, VStack } from '@chakra-ui/react'

export const OpenSource: React.FC = () => {
  const { t } = useTranslation('common')

  return (
    <VStack
      as='section'
      align='stretch'
      pb='20'
      borderColor='black'
      borderTop='1px solid'
      spacing='16'
    >
      <Box
        px={{ base: '4', md: '8' }}
        pt='32'
        pb='3'
        bg='linear-gradient(90deg, #93A5CF 0%, #E4EFE9 100%)'
      >
        <Heading
          as='h2'
          variant='section'
          color='white'
          size='2xl'
          wordBreak={{ base: 'break-all', sm: 'break-word' }}
        >
          {t('open-source')}
        </Heading>
      </Box>
    </VStack>
  )
}
