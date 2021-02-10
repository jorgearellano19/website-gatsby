import { Col, Row, Typography } from 'antd'
import * as React from 'react'
import ContactForm from './Form'
import styles from './ContactMe.module.scss'

const { Title } = Typography

const ContactMe: React.FC<{}> = () => (
  <section>
    <div className={styles.container}>
      <div>
        <Title level={1}>Get in Touch</Title>
      </div>
      <Row justify="center">
        <Col xs={24} md={8}>
          <Typography>
            Lets talk about everything! <br /> Dont like forms? Send me an email. 👋
          </Typography>
        </Col>
        <Col xs={28} md={16}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  </section>
)

export default ContactMe
