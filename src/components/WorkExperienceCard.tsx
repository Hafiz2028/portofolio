import {
  Box,
  Heading,
  Text,
  Tag,
  VStack,
  HStack,
  Image,
  Stack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { WorkExperienceType } from '@data/workExperience'

// Varian animasi untuk setiap item kartu
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const WorkExperienceCard: React.FC<WorkExperienceType> = ({
  logo,
  role,
  company,
  period,
  descriptions,
  skills,
}) => {
  return (
    <motion.div variants={item} style={{ height: '100%' }}>
      <Box
        p={{ base: 4, md: 6 }}
        h='100%'
        bg='white'
        border='1px solid'
        borderColor='black'
        shadow={`8px 8px 0px 0px var(--chakra-colors-blue-200)`}
        transition='all 0.2s ease-in-out'
        _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align={{ base: 'center', md: 'start' }}
          spacing={5}
          h='100%'
        >
          {logo && (
            <Image
              src={logo}
              alt={`${company} logo`}
              boxSize={{ base: '60px', md: '100px' }}
              objectFit='contain'
              mt={1}
            />
          )}
          <VStack align='start' spacing={3} flex={1} w='full'>
            <Box>
              <Heading as='h3' size={{ base: 'sm', md: 'md' }}>
                {role}
              </Heading>
              <Text
                fontSize={{ base: 'sm', md: 'md' }}
                color='gray.600'
                fontWeight='semibold'
              >
                {company}
              </Text>
              <Text fontSize={{ base: 'xs', md: 'sm' }} color='gray.500'>
                {period}
              </Text>
            </Box>
            <VStack
              as='ul'
              align='start'
              spacing={1}
              flex='1'
              pl={{ base: 3, md: 5 }}
              listStyleType='disc'
            >
              {descriptions.map((desc, index) => (
                <Text as='li' key={index} fontSize={{ base: 'sm', md: 'md' }}>
                  {desc}
                </Text>
              ))}
            </VStack>
            <Wrap spacing={2} pt={2}>
              {skills.map((skill) => (
                <WrapItem key={skill}>
                  <Tag
                    size={{ base: 'sm', md: 'md' }}
                    variant='solid'
                    colorScheme='blue'
                    borderRadius='full'
                  >
                    {skill}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>
          </VStack>
        </Stack>
      </Box>
    </motion.div>
  )
}
