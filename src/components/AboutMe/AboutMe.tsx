import { Col, Row, Space } from 'antd'
import React from 'react'
import styles from './AboutMe.module.scss'

const AboutMe: React.FC<{}> = () => (
  <section>
    <div className={styles.container}>
      <div>
        <h1>About Me</h1>
      </div>
      <Row>
        <Col md={3} xs={12}>
          Image Container
        </Col>
        <Col className={styles.aboutMeContainer} md={9} xs={12}>
          About Me Description With info
        </Col>
        <Col xs={12}>Numbers Data</Col>
      </Row>
    </div>
  </section>
)

export default AboutMe
