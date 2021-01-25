import { GatsbyImageProps } from 'gatsby-image'
import { ReactNode } from 'react'

export enum languages {
  es = 'es',
  en = 'en'
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
  image: ImageSharp
}

export type ImageSharp = {
  id: string
  childImageSharp: GatsbyImageProps
}
