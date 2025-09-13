import {
  Box,
  Heading,
  Text,
  VStack,
  Divider,
  HStack,
  Image,
} from '@chakra-ui/react'
import { EducationType } from '@data/education'
import { motion, type Variants } from 'framer-motion'

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export const EducationCard: React.FC<EducationType> = ({
  institution,
  degree,
  period,
  organizations,
  logo,
}) => {
  return (
    <motion.div variants={item} style={{ height: '100%' }}>
      <Box
        p='6'
        h='100%'
        bg='white'
        border='1px solid'
        borderColor='black'
        shadow={`8px 8px 0px 0px var(--chakra-colors-gray-300)`}
        transition='all 0.2s ease-in-out'
        _hover={{ shadow: 'none', transform: 'translate(8px, 8px)' }}
      >
        <HStack align='start' spacing={5} h='100%'>
          {logo && (
            <Image
              src={logo}
              alt={`${institution} logo`}
              boxSize='100px'
              objectFit='contain'
              mt={1}
            />
          )}
          <VStack align='start' spacing={3} flex={1}>
            <Box>
              <Heading as='h3' size='md'>
                {institution}
              </Heading>
              <Text fontSize='lg' color='gray.700' fontWeight='medium'>
                {degree}
              </Text>
              <Text fontSize='sm' color='gray.500'>
                {period}
              </Text>
            </Box>
            {organizations && organizations.length > 0 && (
              <>
                <Divider my={2} />
                <Box w='100%'>
                  <Heading as='h4' size='sm' mb={2}>
                    Organizational & Leadership
                  </Heading>
                  <VStack align='start' spacing={1}>
                    {organizations.map((org, index) => (
                      <HStack key={index} align='start'>
                        <Text>
                          <Text as='span' fontWeight='bold'>
                            {org.role}
                          </Text>
                          , {org.name}
                        </Text>
                      </HStack>
                    ))}
                  </VStack>
                </Box>
              </>
            )}
          </VStack>
        </HStack>
      </Box>
    </motion.div>
  )
}
