export interface WorkExperienceType {
  id: number
  logo?: string
  role: string
  company: string
  period: string
  descriptions: string[]
  skills: string[]
}

export const workExperience: WorkExperienceType[] = [
  {
    id: 1,
    logo: 'icons/logo.png',
    role: 'Software Development Intern',
    company: 'Directorate of Information Technology (DTI), Andalas University',
    period: 'Jan 2023 - Feb 2023',
    descriptions: [
      'Collaborated within a 4-person team on the end-to-end development lifecycle of a new mobile application module for academic lecturers.',
      "Analyzed user requirements and engineered the system design, creating UML and activity diagrams to map the application's core logic.",
      'Developed and implemented 3 key features: student list, student details, and academic history using Kotlin for the Android platform.',
      'Conducted comprehensive blackbox testing to ensure all functionalities met the initial requirements and specifications.',
    ],
    skills: [
      'Kotlin',
      'Postman',
      'Android Development',
      'System Design',
      'UML',
      'Blackbox Testing',
    ],
  },
]
