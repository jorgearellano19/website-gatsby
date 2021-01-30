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
  name: string
  level: expertise
  description_es: string
  description_en: string
}
