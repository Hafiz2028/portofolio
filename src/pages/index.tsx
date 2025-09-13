import type { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { MainLayout } from '@components/layouts/MainLayout'
import {
  ContactMe,
  Hero,
  SelectedProjects,
  SkillSet,
  SlashDivider,
  Experience,
} from '@components/structure'
import { useLogMessage } from '@utils/hooks/use-log-message'
import { config } from '@config/config'

const Home: NextPage = () => {
  useLogMessage()

  return (
    <MainLayout>
      <Hero />
      <SlashDivider />
      <SelectedProjects />
      <Experience />
      <SkillSet />
      <ContactMe />
    </MainLayout>
  )
}

export const getStaticProps: GetStaticProps = async ({
  locale = config.defaultLocale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
