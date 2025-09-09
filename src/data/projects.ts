import {
  SiChakraui,
  SiNextdotjs,
  SiReact,
  SiMongodb,
  SiLaravel,
  SiPostgresql,
  SiStripe,
  SiTailwindcss,
} from 'react-icons/si'
import FotoYukImage1 from '@public/img/projects/hypzz.png'
import FotoYukImage2 from '@public/img/projects/kalabam.png'
import FotoYukImage3 from '@public/img/projects/why-pigeons-full.png'
import KalabamImage from '@public/img/projects/kalabam.png'
import WhyPigeonsImage from '@public/img/projects/why-pigeons-full.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sipintas-Plus',
    description: {
      en: 'Connecting influencers and brands to collaborate on product advertisements and more.',
    },
    images: [
      { src: FotoYukImage1 },
      { src: FotoYukImage2 },
      { src: FotoYukImage3 },
    ],
    homepage: 'https://hypzz.chr-ge.com/?ref=chr-ge.com',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Kalabam',
    description: {
      en: 'Create multiplayer quizzes for class activities or interactive presentations.',
    },
    images: [{ src: KalabamImage }],
    homepage: 'https://kalabam.com/?ref=chr-ge.com',
    github: 'https://github.com/chr-ge/kalabam',
    technologies: [
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'ChakraUI', icon: SiChakraui, color: '#319795' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'Why Pigeons',
    description: {
      en: 'Quick food delivery right to your door. User, restaurant, driver, and admin dashboards are fully functional.',
    },
    images: [{ src: WhyPigeonsImage }],
    github: 'https://github.com/chr-ge/why-pigeons',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'Stripe', icon: SiStripe, color: '#008CDD' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
