import { Col, Row, Space, Typography } from 'antd'
import React, { useContext } from 'react'
import { AppContext } from '../../context/Application'
import { HomePage } from '../../utils/globalTypes'
import { getTranslation } from '../../utils/language'
import { ABOUT_ME_PREFIX } from '../../utils/translation/homePage/keys'
import styles from './AboutMe.module.scss'
import AvatarContainer from './AvatarContainer'
import Description from './Description'
import Numbers from './Numbers'
import t from '../../utils/translation/homePage/constants.json'

const { Title } = Typography

type Props = {
  strapiHome: HomePage
}

const AboutMe: React.FC<Props> = ({ strapiHome }) => {
  const { language } = useContext(AppContext)
  const { image, services, happyClients, hoursCoded, glassesOfWater, projects, cv } = strapiHome
  const aboutMe = getTranslation(strapiHome, language, ABOUT_ME_PREFIX)
  const cvButtonText = t.aboutMe.cvButton[language] as string

  return (
    <section>
      <div className={styles.container}>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200" data-sal-easing="ease">
          <Title level={2}>{t.aboutMe.title[language]}</Title>
        </div>
        <Space style={{ width: '100%' }} direction="vertical" size={70}>
          <Row>
            <Col md={6} xs={24}>
              <AvatarContainer image={image} />
            </Col>
            <Col className={styles.aboutMeContainer} md={18} xs={24}>
              <Description cv={cv} services={services} cvButtonText={cvButtonText} aboutMe={aboutMe} />
            </Col>
          </Row>
          <Numbers projects={projects} happyClients={happyClients} hoursCoded={hoursCoded} glassesOfWater={glassesOfWater} />
        </Space>
      </div>
    </section>
  )
}

export default AboutMe
