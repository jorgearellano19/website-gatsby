import { GatsbyImageFixedProps, GatsbyImageFluidProps, GatsbyImageProps } from 'gatsby-image'
import { ReactNode } from 'react'

export enum languages {
  es = 'es',
  en = 'en'
}

export enum SocialMediaTypes {
  linkedIn = 'LINKEDIN',
  github = 'GITHUB',
  twitter = 'TWITTER'
}

export enum expertise {
  junior = 'junior',
  mid = 'mid',
  senior = 'senior'
}

export enum servicesEnum {
  frontend = 'frontend',
  backend = 'backend',
  devops = 'devops'
}

export enum timelineType {
  educational = 'educational',
  work = 'work'
}

export enum skillType {
  frontend = 'Frontend',
  backend = 'Backend',
  devops = 'DevOps',
  databases = 'Databases',
  others = 'Others'
}

export type MenuOption = {
  name: string
  icon: ReactNode
}

export type ApplicationContext = {
  language: languages
  onChangeLanguage: (language: languages) => void
}

export type MainPageResponse = {
  strapiHome: HomePage
}

export type HomePage = {
  principalPhrase_es: string
  principalPhrase_en: string
  name: string
  aboutMe_es: string
  aboutMe_en: string
  image: ImageSharpFixed
  socialMedia: SocialMedia[]
  services: Service[]
  hoursCoded: number
  glassesOfWater: number
  happyClients: number
  projects: number
  cv: DownloadableFile
  educationalExperience: EducationalExperience
  workExperiences: WorkExperience[]
  skills: Skill[]
}

export type EducationalExperience = {
  carreer_es: string
  carreer_en: string
  endDate: string
  startDate: string
  shortDescription_es: string
  shortDescription_en: string
}

export type WorkExperience = {
  startDate: string
  title: string
  company: string
  isActualWork: boolean
  longDescription_en: string
  longDescription_es: string
  shortDescription_en: string
  shortDescription_es: string
  endDate: string
}

export type Skill = {
  type: skillType
  image: ImageSharpFluid
  description_es: string
  description_en: string
  name: string
}

export type DownloadableFile = {
  publicURL: string
}

export type SocialMedia = {
  type: SocialMediaTypes
  link: string
}

export type ImageSharpFluid = {
  id: string
  childImageSharp: GatsbyImageFluidProps
}

export type ImageSharpFixed = {
  id: string
  childImageSharp: GatsbyImageFixedProps
}

export type Service = {
  slug: servicesEnum
  name: string
  level: expertise
  description_es: string
  description_en: string
}
