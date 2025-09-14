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
    id: '4',
    title: 'Rumah Anyaman',
    description: {
      en: 'Built a complete e-commerce platform from scratch using native PHP to help an SME digitalize their business. I developed all core functionalities, including a shopping cart and secure checkout, and managed the full deployment lifecycle on a Niagahoster server.',
    },
    images: [{ src: RumahImage }],
    homepage: 'https://rumahanyaman.niagapadang.com/',
    technologies: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    isShowcased: true,
    projectType: 'Freelance Project',
    role: 'Full-Stack Developer & Creator',
  },
  {
    id: '3',
    title: 'BHM Project',
    description: {
      en: 'Contributed to the backend development of a Halal Certification platform by designing and implementing key RESTful APIs. My work powered the landing page CMS, user registration, and core admin panel functionalities, supporting a streamlined certification process for businesses.',
    },
    images: [{ src: BHMImage }],
    homepage: 'https://bhmofficial.com/',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    isShowcased: true,
    projectType: 'Freelance Project',
    role: 'Backend Contributor',
  },
  {
    id: '2',
    title: 'FotoYuk',
    description: {
      en: 'Spearheaded the end-to-end development of a photo studio marketplace for my thesis project. I designed the UI/UX, architected a complex database with 26 relational tables, and built over 15 RESTful APIs to power a dynamic, filterable booking experience.',
    },
    images: [{ src: StudioImage }],
    github: 'https://github.com/Hafiz2028/studiofoto-TA',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    isShowcased: true,
    projectType: 'Personal Project',
    role: 'Full-Stack Developer & Creator',
  },
  {
    id: '1',
    title: 'Sipintas-Plus',
    description: {
      en: 'Led the backend architecture for a system that digitized the facility booking process for the West Sumatra General Bureau. I architected the database, engineered a complex multi-stage booking workflow, an availability calendar, and a multi-actor approval process to successfully manage over 100 assets.',
    },
    images: [{ src: SipintasImage }],
    homepage: 'https://sipintas-plus.biroumumsumbar.com/',
    github: 'https://github.com/Hafiz2028/sipintas-plus',
    technologies: [
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
    isShowcased: true,
    projectType: 'Freelance Project',
    role: 'Backend Developer',
  },
]
