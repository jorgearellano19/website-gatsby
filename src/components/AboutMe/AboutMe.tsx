import { Col, Row, Space } from 'antd'
import React from 'react'
import styles from './AboutMe.module.scss'
import AvatarContainer from './AvatarContainer'
import Description from './Description'
import Numbers from './Numbers'

const AboutMe: React.FC<{}> = () => (
  <section>
    <div className={styles.container}>
      <div>
        <h1>About Me</h1>
      </div>
      <Space style={{ width: '100%' }} direction="vertical" size={70}>
        <Row>
          <Col md={6} xs={24}>
            <AvatarContainer />
          </Col>
          <Col className={styles.aboutMeContainer} md={18} xs={24}>
            <Description />
          </Col>
        </Row>
        <Numbers />
      </Space>
    </div>
  </section>
)

export default AboutMe
