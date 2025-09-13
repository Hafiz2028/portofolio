import {
  SiLaravel,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiBootstrap,
  SiCss3,
  SiKotlin,
  SiHtml5,
  SiFigma,
  SiGit,
  SiPostman,
} from 'react-icons/si'
import { Javascript } from '@components/icons'
import type { SkillGroup } from '@utils/types'

export const skills: SkillGroup[] = [
  {
    id: '1',
    category: 'languages',
    skills: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Javascript', icon: Javascript, color: '#F7DF1E' },
      { name: 'Typescript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Kotlin', icon: SiKotlin, color: '#7F52FF' },
    ],
  },
  {
    id: '2',
    category: 'front-end',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7611f6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
    ],
  },
  {
    id: '3',
    category: 'back-end',
    skills: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      // { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      // { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      // { name: 'Express', icon: SiExpress, color: '#000000' },
      // { name: 'Ruby on Rails', icon: SiRubyonrails, color: '#D30001' },
    ],
  },
  {
    id: '4',
    category: 'databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      // { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      // { name: 'Amazon DynamoDB', icon: SiAmazondynamodb, color: '#4053D6' },
      // { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    id: '5',
    category: 'cloud',
    skills: [
      // {
      { name: 'Vercel', icon: SiVercel, color: '#000000' },
      //   name: 'Amazon Web Services',
      //   icon: SiAmazonwebservices,
      //   color: '#232F3E',
      // },
      // { name: 'Google Cloud Platform', icon: SiGooglecloud, color: '#4285F4' },
      // { name: 'Heroku', icon: SiHeroku, color: '#430098' },
      // { name: 'Terraform', icon: SiTerraform, color: '#844FBA' },
    ],
  },
  {
    id: '6',
    category: 'devtools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#7e09d7ff' },
      { name: 'Figma', icon: SiFigma, color: '#cf0808ff' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]
