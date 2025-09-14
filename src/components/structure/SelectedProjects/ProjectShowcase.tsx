import { useTranslation } from 'next-i18next'
import NextImage from 'next/image'
import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  Badge,
  Link,
  Stack,
  Text,
  VStack,
  Tooltip,
  chakra,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  IconButton,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { usePostHog } from 'posthog-js/react'
import type { Project } from '@utils/types'
import { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const MotionBox = motion(Box)

export const ProjectShowcase: React.FC<Project> = ({
  title,
  description,
  images,
  homepage,
  github,
  technologies,
  role,
  projectType,
}) => {
  const { t, i18n } = useTranslation('common')
  const posthog = usePostHog()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleOpenModal = () => {
    setCurrentImageIndex(0)
    onOpen()
  }

  return (
    <Stack
      bg='white'
      direction={{ base: 'column', md: 'row' }}
      // h='96'
      px='6'
      py='2'
      borderColor='black'
      border='1px solid'
      spacing={{ base: '0', md: '24' }}
      role='group'
      overflow='hidden'
    >
      <VStack flex='2' py='4' align='flex-start' justify='center' spacing='4'>
        <VStack w='full' justify='space-between' align='start'>
          <Heading as='h3'>{title}</Heading>
          {projectType && (
            <Badge colorScheme='teal' variant='subtle'>
              {projectType}
            </Badge>
          )}
        </VStack>
        <Divider opacity='1' />
        <Text>{description[i18n.language as keyof typeof description]}</Text>
        <VStack align='start' spacing={3} pt='2'>
          {role && (
            <HStack>
              <Text fontWeight='bold' fontSize='sm'>
                My Role:
              </Text>
              <Text fontSize='sm' color='gray.600'>
                {role}
              </Text>
            </HStack>
          )}
          <HStack>
            <Text fontWeight='bold' fontSize='sm'>
              Built with:
            </Text>
            {technologies.map((tech) => (
              <Tooltip key={tech.name} label={tech.name} hasArrow>
                <chakra.span>
                  <tech.icon size='1.5em' color={tech.color} />
                </chakra.span>
              </Tooltip>
            ))}
          </HStack>
        </VStack>
        <HStack spacing='4'>
          {homepage && (
            <Link
              href={homepage}
              variant='projectLink'
              onClick={() =>
                posthog.capture('project_link_clicked', {
                  type: 'website',
                  title,
                })
              }
              isExternal
            >
              {t('website')}
            </Link>
          )}
          {github && (
            <Link
              href={github}
              variant='projectLink'
              onClick={() =>
                posthog.capture('project_link_clicked', {
                  type: 'github',
                  title,
                })
              }
              isExternal
            >
              Github
            </Link>
          )}
        </HStack>
      </VStack>
      <Flex flex='3' align='flex-end' pos='relative'>
        <Box
          display={{ md: 'none' }}
          mt='4'
          pt='1.5'
          px='1.5'
          border='1px solid black'
          borderBottom='none'
          borderTopRadius='1.375rem'
          cursor='pointer'
          onClick={handleOpenModal}
        >
          <ImageWithBorder title={title} image={images[0]} />
        </Box>
        <MotionBox
          display={{ base: 'none', md: 'block' }}
          pos='absolute'
          pt='3.5'
          px='3.5'
          bg='#F9FBFD'
          w='full'
          top='0'
          left='0'
          right='0'
          border='1px solid black'
          borderBottom='0'
          borderTopRadius='1.875rem'
          initial={{ y: '4rem' }}
          whileHover={{ y: '2.5rem' }}
        >
          <Box cursor='pointer' onClick={handleOpenModal}>
            {' '}
            {/* DIUBAH */}
            <ImageWithBorder title={title} image={images[0]} />
          </Box>
        </MotionBox>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size='4xl' isCentered>
        <ModalOverlay />
        <ModalContent mx={4}>
          <ModalHeader>{title} - Gallery</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={4}>
            <VStack>
              <HStack w='full' align='center' justify='center'>
                <IconButton
                  aria-label='Previous image'
                  icon={<AiOutlineLeft />}
                  onClick={() =>
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex > 0 ? prevIndex - 1 : images.length - 1
                    )
                  }
                  isDisabled={images.length <= 1}
                />
                <Box
                  flex='1'
                  minW='0' // Mencegah gambar meluap dari kontainer
                  borderWidth='1px'
                  borderRadius='lg'
                  overflow='hidden'
                >
                  <NextImage
                    src={images?.[currentImageIndex]?.src}
                    alt={`${title} screenshot ${currentImageIndex + 1}`}
                    draggable='false'
                  />
                </Box>
                <IconButton
                  aria-label='Next image'
                  icon={<AiOutlineRight />}
                  onClick={() =>
                    setCurrentImageIndex((prevIndex) =>
                      prevIndex < images.length - 1 ? prevIndex + 1 : 0
                    )
                  }
                  isDisabled={images.length <= 1}
                />
              </HStack>
              <Text fontSize='sm' mt={2}>
                {currentImageIndex + 1} / {images.length}
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Stack>
  )
}
const ImageWithBorder: React.FC<
  Pick<Project, 'title'> & { image: Project['images'][0] }
> = ({ title, image }) => (
  <Box
    pos='relative'
    w='full'
    borderTopRadius='2xl'
    overflow='hidden'
    borderColor='black'
    borderTop='1px solid'
    borderLeft='1px solid'
    borderRight='1px solid'
    h={{ base: '200px', md: '500px' }}
  >
    <NextImage
      src={image.src}
      alt={title}
      draggable='false'
      style={{
        objectFit: 'cover',
        objectPosition: 'top',
      }}
    />
  </Box>
)
