import { Center, Icon, Tooltip, useDisclosure } from '@chakra-ui/react'
import type { Skill } from '@utils/types'

export interface SkillProps extends Skill {
  onSkillHover: (color: string) => void
  onSkillLeave: () => void
}

export const SkillBox: React.FC<SkillProps> = ({
  name,
  icon,
  color,
  onSkillHover,
  onSkillLeave,
}) => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()

  return (
    <Tooltip
      aria-label={name}
      label={name}
      isOpen={isOpen}
      placement='bottom'
      gutter={-8}
      shouldWrapChildren
    >
      <Center
        p='1'
        boxSize='16'
        bg='gray.100'
        onMouseEnter={() => {
          onSkillHover(color)
          onOpen()
        }}
        onMouseLeave={() => {
          onSkillLeave()
          onClose()
        }}
        onClick={onToggle}
        transition='transform 0.2s ease-in-out'
        _hover={{
          transform: 'scale(1.1)',
        }}
      >
        <Icon as={icon} aria-label={name} boxSize='8' color={color} />
      </Center>
    </Tooltip>
  )
}
