import { Col, Row } from 'antd'
import * as React from 'react'
import ContactForm from './Form'
import styles from './ContactMe.module.scss'

const ContactMe: React.FC<{}> = () => (
  <section>
    <div className={styles.container}>
      <div>
        <h1>Get in Touch</h1>
      </div>
      <Row justify="center">
        <Col xs={24} md={8}>
          Lets talk about everything! <br /> Dont like forms? Send me an email. 👋
        </Col>
        <Col xs={28} md={16}>
          <ContactForm />
        </Col>
      </Row>
    </div>
  </section>
)

export default ContactMe
