import { CodeOutlined, CoffeeOutlined, ProjectOutlined, UserOutlined } from '@ant-design/icons'
import { Col, Row } from 'antd'
import * as React from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../context/Application'
import t from '../../../utils/translation/homePage/constants.json'
import NumberAnimated from '../NumberAnimated/NumberAnimated'
import styles from './Numbers.module.scss'

type Props = {
  projects: number
  happyClients: number
  hoursCoded: number
  glassesOfWater: number
}

const Numbers: React.FC<Props> = ({ projects, hoursCoded, happyClients, glassesOfWater }) => {
  const { language } = useContext(AppContext)
  const coffeeText = t.aboutMe.stats.coffee[language] as string
  const happyClientsText = t.aboutMe.stats.happyClients[language] as string
  const projectsText = t.aboutMe.stats.projects[language] as string
  const hoursCodedText = t.aboutMe.stats.hoursCoded[language] as string
  return (
    <Row justify="center">
      <Col xs={12} sm={12} md={6}>
        <NumberAnimated number={projects} text={projectsText} icon={<ProjectOutlined className={styles.icon} />} />
      </Col>
      <Col xs={12} sm={12} md={6}>
        <NumberAnimated number={happyClients} text={happyClientsText} icon={<UserOutlined className={styles.icon} />} />
      </Col>
      <Col xs={12} sm={12} md={6}>
        <NumberAnimated number={hoursCoded} text={hoursCodedText} icon={<CodeOutlined className={styles.icon} />} />
      </Col>
      <Col xs={12} sm={12} md={6}>
        <NumberAnimated number={glassesOfWater} text={coffeeText} icon={<CoffeeOutlined className={styles.icon} />} />
      </Col>
    </Row>
  )
}

export default Numbers
