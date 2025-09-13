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
      en: 'Website Pendaftaran Sertifikasi Bersama Halal Madani (BHM).',
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
    tags: [
      { label: 'backend', colorScheme: 'pink' },
      { label: 'websockets', colorScheme: 'green' },
      { label: 'aws', colorScheme: 'orange' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '2',
    title: 'Sipintas-Plus',
    description: {
      en: 'Website Peminjaman Fasilitas, Kendaraan dan Barang Kabiro Umum Sumatera Barat.',
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
    tags: [
      { label: 'Back-End', colorScheme: 'pink' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '3',
    title: 'FotoYuk',
    description: {
      en: 'Website Marketplace Booking dan Penyewaan Studio Foto di Kota Padang',
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
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
  {
    id: '4',
    title: 'Rumah Anyaman',
    description: {
      en: 'Website E-Commerce Produk Anyaman, dibuat untuk UMKM Rumah Anyaman.',
    },
    images: [{ src: RumahImage }],
    homepage: 'https://rumahanyaman.niagapadang.com/',
    // github: 'https://github.com/chr-ge/why-pigeons',
    technologies: [
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Laragon', icon: SiLaragon, color: '#0E76A8' },
    ],
    tags: [
      { label: 'full-stack', colorScheme: 'pink' },
      { label: 'e-commerce', colorScheme: 'purple' },
      { label: 'website', colorScheme: 'cyan' },
    ],
    isShowcased: true,
  },
]
