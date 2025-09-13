import {
  Box,
  Heading,
  Text,
  Tag,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Image, // <-- Tambahkan Image ke dalam import
} from '@chakra-ui/react'
import { motion, type Variants } from 'framer-motion'
import { MdChevronRight } from 'react-icons/md'
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
        p='6'
        h='100%'
        bg='white'
        border='1px solid'
        borderColor='black'
        shadow={`8px 8px 0px 0px var(--chakra-colors-blue-200)`}
        transition='all 0.2s ease-in-out'
        _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
      >
        <HStack align='start' spacing={5} h='100%'>
          {logo && (
            <Image
              src={logo}
              alt={`${company} logo`}
              boxSize='100px'
              objectFit='contain'
              mt={1}
            />
          )}
          <VStack align='start' spacing={3} h='100%'>
            <Box>
              <Heading as='h3' size='md'>
                {role}
              </Heading>
              <Text fontSize='md' color='gray.600' fontWeight='semibold'>
                {company}
              </Text>
              <Text fontSize='sm' color='gray.500'>
                {period}
              </Text>
            </Box>
            <List spacing={1} flex='1'>
              {descriptions.map((desc, index) => (
                <ListItem key={index} display='flex' alignItems='center'>
                  <ListIcon as={MdChevronRight} color='blue.500' />
                  {desc}
                </ListItem>
              ))}
            </List>
            <HStack wrap='wrap' justifySelf='flex-end' paddingTop='4'>
              {skills.map((skill) => (
                <Tag
                  key={skill}
                  variant='solid'
                  colorScheme='blue'
                  borderRadius='full'
                >
                  {skill}
                </Tag>
              ))}
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  )
}
