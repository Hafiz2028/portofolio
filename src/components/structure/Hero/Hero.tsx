import NextLink from 'next/link'
import {
  Button,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
  Stack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)
const MotionStack = motion(Stack)

export const Hero: React.FC = () => {
  const posthog = usePostHog()
  const handleScrollToProjects = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
    posthog.capture('hero_projects_clicked')

    const projectsSection = document.getElementById('projects')
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <MotionFlex
      h='calc(100vh - var(--chakra-sizes-header-height))'
      px={{ base: '4', md: '8' }}
      align='center'
      animate={{
        background: [
          'linear-gradient(80deg, #ddcbf8 0%, rgba(234, 237, 158, 1) 100%)',
          'linear-gradient(120deg, #ddfffc 0%, #C79DEE 100%)',
        ],
      }}
      transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.75 }}
    >
      <VStack align='flex-start' pb='16' maxW='container.lg' spacing='6'>
        <MotionHeading
          as='h1'
          variant='hero'
          size='hero'
          // lineHeight={{ base: '1.2', md: '1.3' }}
          fontSize={{
            base: '2xl',
            sm: '4xl',
            md: '5xl',
            lg: '6xl',
          }}
          wordBreak='break-word'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Full-Stack Developer Who Builds Complete Web Solutions
        </MotionHeading>

        <MotionText
          fontSize={{ base: 'md', sm: 'lg', md: 'xl' }}
          maxW='2xl'
          color='blackAlpha.800'
          fontWeight='medium'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I translate complex business needs into efficient and scalable
          applications, with a deep focus on system design, quality, and user
          experience.
        </MotionText>

        <MotionStack
          direction={{ base: 'column', sm: 'row' }}
          spacing={4}
          w='full'
          maxW={{ base: 'full', sm: 'auto' }}
          mt={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <MotionButton
            size='lg'
            w={{ base: 'full', sm: 'auto' }}
            bg='black'
            color='white'
            _hover={{ bg: 'gray.700' }}
            onClick={handleScrollToProjects}
          >
            View My Projects
          </MotionButton>
          <NextLink
            href='/pdf/CV-FullStack-Muhammad_Hafiz_Aulia_Rahmadoni.pdf'
            passHref
            legacyBehavior
          >
            <MotionButton
              as='a'
              size='lg'
              w={{ base: 'full', sm: 'auto' }}
              variant='outline'
              borderColor='black'
              color='black'
              _hover={{ bg: 'blackAlpha.100' }}
              target='_blank'
              onClick={() => posthog.capture('hero_cv_clicked')}
            >
              Download CV
            </MotionButton>
          </NextLink>
        </MotionStack>
      </VStack>
    </MotionFlex>
  )
}
