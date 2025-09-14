import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  HStack,
  Button,
} from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion' // Import motion

import { workExperience } from '@data/workExperience'
import { education } from '@data/education'
import { WorkExperienceCard } from '../../WorkExperienceCard'
import { EducationCard } from '../../EducationCard'

// Varian untuk container grid (meniru SkillSet.tsx)
const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

// Membuat SimpleGrid menjadi komponen motion
const MotionSimpleGrid = motion(SimpleGrid)

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work')
  const { t } = useTranslation('common')
  return (
    <VStack as='section' align='stretch' py='20' spacing={12}>
      <Heading
        as='h2'
        size='2xl'
        px={{ base: '4', md: '8' }}
        textTransform='uppercase'
        fontWeight='black'
        letterSpacing='wider'
      >
        {t('experience-heading')}
      </Heading>
      <MotionSimpleGrid
        spacing='10'
        variants={container}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
      >
        <HStack spacing={4} px={{ base: '4', md: '8' }}>
          <Button
            onClick={() => setActiveTab('work')}
            variant={activeTab === 'work' ? 'solid' : 'outline'}
            bg={activeTab === 'work' ? 'black' : 'white'}
            color={activeTab === 'work' ? 'white' : 'black'}
            borderColor='black'
            borderRadius='0'
            _hover={{
              bg: activeTab === 'work' ? 'gray.700' : 'gray.100',
            }}
          >
            Work Experience
          </Button>
          <Button
            onClick={() => setActiveTab('education')}
            variant={activeTab === 'education' ? 'solid' : 'outline'}
            bg={activeTab === 'education' ? 'black' : 'white'}
            color={activeTab === 'education' ? 'white' : 'black'}
            borderColor='black'
            borderRadius='0'
            _hover={{
              bg: activeTab === 'education' ? 'gray.700' : 'gray.100',
            }}
          >
            Education
          </Button>
        </HStack>
        <Box px={{ base: '4', md: '8' }}>
          {activeTab === 'work' && (
            <MotionSimpleGrid
              key='work-grid'
              columns={{ base: 1, lg: 2 }}
              spacing={10}
              variants={container}
              initial='hidden'
              animate='visible'
            >
              {workExperience.map((job) => (
                <WorkExperienceCard key={job.id} {...job} />
              ))}
            </MotionSimpleGrid>
          )}

          {activeTab === 'education' && (
            <MotionSimpleGrid
              key='education-grid'
              columns={{ base: 1, lg: 2 }}
              spacing={10}
              variants={container}
              initial='hidden'
              animate='visible'
            >
              {education.map((edu) => (
                <EducationCard key={edu.id} {...edu} />
              ))}
            </MotionSimpleGrid>
          )}
        </Box>
      </MotionSimpleGrid>
    </VStack>
  )
}
