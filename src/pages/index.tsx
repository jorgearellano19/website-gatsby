import * as React from 'react'
import AboutMe from '../components/AboutMe'
import ContactMe from '../components/ContactMe'
import Experience from '../components/Experience/Experience'
import Introduction from '../components/Introduction'
import Reviews from '../components/Reviews/Reviews'
import Services from '../components/Services'
import Skills from '../components/Skills'

const IndexPage = () => (
  <>
    <Introduction />
    <AboutMe />
    <Services />
    <Experience />
    <Skills />
    <Reviews />
    <ContactMe />
  </>
)

export default IndexPage
