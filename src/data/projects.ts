import {
  SiLaravel,
  SiTailwindcss,
  SiMysql,
  SiVite,
  SiPhp,
  SiLaragon,
  SiXampp,
  SiBootstrap,
} from 'react-icons/si'
import BHMImage from '@public/img/projects/bhm/homepagebhm.png'
import SipintasImage from '@public/img/projects/sipintas/homepagesipintasplus.png'
import RumahImage from '@public/img/projects/rumahanyaman/homepagerumah.png'
import StudioImage from '@public/img/projects/studiofoto/homepagestudio.png'
import type { Project } from '@utils/types'

export const projects: Project[] = [
  {
    id: '1',
    title: 'BHM Project',
    description: {
      en: 'A platform designed to streamline the Halal Certification registration process for businesses. As a backend contributor, I was responsible for designing and implementing the RESTful APIs that connect the backend to the frontend, powering the landing page content management, user registration flow, and core admin panel functionalities.',
    },
    images: [{ src: BHMImage }],
    homepage: 'https://bhmofficial.com/',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Vite', icon: SiVite, color: '#646CFF' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Laragon', icon: SiLaragon, color: '#0E76A8' },
    ],
    isShowcased: true,
    projectType: 'Team Contribution',
    role: 'Backend Developer',
  },
  {
    id: '2',
    title: 'Sipintas-Plus',
    description: {
      en: 'An information system that digitizes the facility and asset booking process for the West Sumatra General Bureau. As the Backend Developer, I was responsible for designing the database schema (ERD) and developing the complex multi-stage booking workflow, which included an availability calendar, a multi-actor approval process, and a comprehensive admin panel for managing users and assets.',
    },
    images: [{ src: SipintasImage }],
    homepage: 'https://sipintas-plus.biroumumsumbar.com/',
    github: 'https://github.com/Hafiz2028/sipintas-plus',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Laragon', icon: SiLaragon, color: '#0E76A8' },
    ],
    isShowcased: true,
    projectType: 'Team Collaboration',
    role: 'Backend Developer',
  },
  {
    id: '3',
    title: 'FotoYuk',
    description: {
      en: 'A web-based marketplace connecting users with local photo studios to simplify the booking process. As my personal thesis project, I led the end-to-end development from UI/UX design in Figma to a full-stack Laravel implementation. I architected a complex database schema over 30 relational tables and built over 15 RESTful APIs to power its dynamic booking and filtering features.',
    },
    images: [{ src: StudioImage }],
    github: 'https://github.com/Hafiz2028/studiofoto-TA',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'XAMPP', icon: SiXampp, color: '#eb8602ff' },
    ],
    isShowcased: true,
    projectType: 'Personal Project',
    role: 'Full-Stack Developer & Creator',
  },
  {
    id: '4',
    title: 'Rumah Anyaman',
    description: {
      en: "An e-commerce platform built from the ground up to help the 'Rumah Anyaman' SME bring their craft products online. Using native PHP, I developed all core e-commerce functionalities, including the shopping cart, secure checkout, and payment confirmation. I also managed the entire deployment lifecycle to a Niagahoster server.",
    },
    images: [{ src: RumahImage }],
    homepage: 'https://rumahanyaman.niagapadang.com/',
    technologies: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Laragon', icon: SiLaragon, color: '#0E76A8' },
    ],
    isShowcased: true,
    projectType: 'Personal Project',
    role: 'Full-Stack Developer & Creator',
  },
]
