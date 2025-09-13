export interface EducationType {
  id: number
  institution: string
  degree: string
  period: string
  gpa?: string
  logo?: string
  organizations?: OrganizationType[]
}
export interface OrganizationType {
  role: string
  name: string
}

export const education: EducationType[] = [
  // Isi dengan data Anda, contoh:
  {
    id: 1,
    logo: 'icons/logo.png',
    institution: 'Andalas University',
    degree: 'Bachelor of Information Systems',
    period: 'Aug 2020 - Jan 2025',
    organizations: [
      {
        role: 'Coordinator of Service & Training Division',
        name: 'Laboratory Enterprise Application (LEA)',
      },
      {
        role: 'Chief Executive',
        name: "Information System's Celebration & Event (ISCE)",
      },
    ],
  },
]
