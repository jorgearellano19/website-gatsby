import { Button } from 'antd'
import React, { useContext } from 'react'
import { AppContext } from '../../context/Application'
import { HomePage } from '../../utils/globalTypes'
import { getTranslation } from '../../utils/language'
import { PRINCIPAL_PHRASE_PREFIX } from '../../utils/translation/homePage/keys'
import Info from './Info'
import classes from './Introduction.module.scss'
import SocialMedia from './SocialMedia'
import t from '../../utils/translation/homePage/constants.json'

type Props = {
  strapiHome: HomePage
}

const Introduction: React.FC<Props> = ({ strapiHome }) => {
  const { language } = useContext(AppContext)
  console.log(PRINCIPAL_PHRASE_PREFIX)
  const principalPhrase = getTranslation(strapiHome, language, PRINCIPAL_PHRASE_PREFIX)
  return (
    <section className={classes.container}>
      <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="300" data-sal-easing="ease" className={classes.home}>
        <Info aboutMe={principalPhrase} name={strapiHome.name} />
        <SocialMedia />
        <div className={classes.buttonContainer}>
          <Button className={classes.button} color="primary">
            {t.introduction.contactMeButton[language]}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Introduction
