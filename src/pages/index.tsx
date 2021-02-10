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
      hoursCoded
      glassesOfWater
      happyClients
      projects
      cv {
        publicURL
      }
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
      services {
        name
        level
        description_es
        description_en
        slug
      }
      educationalExperience {
        carreer_es
        carreer_en
        endDate
        startDate
        shortDescription_es
        shortDescription_en
      }
      workExperiences {
        isActualWork
        company
        shortDescription_en
        shortDescription_es
        startDate
        endDate
      }
      skills {
        name
        type
        description_en
        description_es
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      reviews {
        name
        company
        position
        message_es
        message_en
        img {
          childImageSharp {
            fixed(width: 150, height: 150) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    }
  }
`

type Props = {
  data: MainPageResponse
}

const IndexPage: React.FC<Props> = ({ data: { strapiHome } }) => {
  console.log(strapiHome)
  return (
    <>
      <Introduction strapiHome={strapiHome} />
      <AboutMe strapiHome={strapiHome} />
      <Services services={strapiHome.services} />
      <Experience works={strapiHome.workExperiences} educational={strapiHome.educationalExperience} />
      <Skills skills={strapiHome.skills} />
      <Reviews reviews={strapiHome.reviews} />
      <ContactMe />
    </>
  )
}

export default IndexPage
