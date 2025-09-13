import NextLink from 'next/link'
import {
  Button,
  chakra,
  Flex,
  Heading,
  VStack,
  Text,
  HStack,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'

const MotionFlex = motion(Flex)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)
const MotionButton = motion(Button)
const MotionHStack = motion(HStack)

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
          'linear-gradient(80deg, #ddcbf8 0%, #eaed9e 100%)',
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
          wordBreak='break-word'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Full-Stack Developer Who Builds Complete Web Solutions
        </MotionHeading>

        <MotionText
          fontSize={{ base: 'lg', md: 'xl' }}
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

        <MotionHStack
          spacing={6}
          mt={4}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <MotionButton
            size='lg'
            bg='black'
            color='white'
            _hover={{ bg: 'gray.700' }}
            onClick={handleScrollToProjects}
          >
            View My Projects
          </MotionButton>
          <NextLink
            href='/pdf/CV-FullStack-Muhammad-Hafiz-Aulia-Rahmadoni.pdf'
            passHref
            legacyBehavior
          >
            <MotionButton
              as='a'
              size='lg'
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
        </MotionHStack>
      </VStack>
    </MotionFlex>
  )
}
