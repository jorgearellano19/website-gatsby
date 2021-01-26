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
