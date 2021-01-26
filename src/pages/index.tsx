import * as React from 'react'
import { graphql } from 'gatsby'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience/Experience'
import Introduction from '../components/Introduction'
import Reviews from '../components/Reviews/Reviews'
import Services from '../components/Services'
import Skills from '../components/Skills'
import { MainPageResponse } from '../utils/globalTypes'

export const pageQuery = graphql`
  query {
    strapiHome {
      principalPhrase_es
      principalPhrase_en
      name
      aboutMe_es
      aboutMe_en
      image {
        id
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
      socialMedia {
        link
        type
      }
    }
  }
`

type Props = {
  data: MainPageResponse
}

const IndexPage: React.FC<Props> = ({ data: { strapiHome } }) => {
  return (
    <>
      <Introduction strapiHome={strapiHome} />
      <AboutMe />
      <Services />
      <Experience />
      <Skills />
      <Reviews />
      <ContactMe />
    </>
  )
}

export default IndexPage
