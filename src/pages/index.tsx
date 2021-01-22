import * as React from 'react'
import AboutMe from '../components/AboutMe'
import Experience from '../components/Experience/Experience'
import Introduction from '../components/Introduction'
import Services from '../components/Services'
import Skills from '../components/Skills'

const IndexPage = () => (
  <>
    <Introduction />
    <AboutMe />
    <Services />
    <Experience />
    <Skills />
  </>
)

export default IndexPage
