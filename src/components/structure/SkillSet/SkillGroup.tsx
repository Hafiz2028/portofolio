import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import type { TFuncKey } from 'i18next'
import { Heading, SimpleGrid, VStack } from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import type { SkillGroup as ISkillGroup } from '@utils/types'
import { SkillBox } from './SkillBox'

const group: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkillGroupProps extends ISkillGroup {}

export const SkillGroup: React.FC<SkillGroupProps> = ({ category, skills }) => {
  const { t } = useTranslation('common')
  const [borderColor, setBorderColor] = useState('black')
  const [boxShadow, setBoxShadow] = useState('none')

  const handleSkillHover = (color: string) => {
    setBorderColor(color)
    setBoxShadow(`0px 4px 14px 0px ${color}`)
  }
  const handleSkillLeave = () => {
    setBorderColor('black')
    setBoxShadow('none')
  }
  return (
    <motion.div variants={group}>
      <VStack
        align='flex-start'
        p='6'
        spacing='6'
        borderColor={borderColor}
        boxShadow={boxShadow}
        borderWidth='1px'
        borderStyle='solid'
        transition='all 0.2s ease-in-out'
      >
        <Heading as='h3' variant='skillCategory'>
          {t(category as TFuncKey<'common'>)}
        </Heading>
        <SimpleGrid columns={3} spacing='5'>
          {skills.map((skill) => (
            <SkillBox
              key={skill.name}
              onSkillHover={handleSkillHover}
              onSkillLeave={handleSkillLeave}
              {...skill}
            />
          ))}
        </SimpleGrid>
      </VStack>
    </motion.div>
  )
}
