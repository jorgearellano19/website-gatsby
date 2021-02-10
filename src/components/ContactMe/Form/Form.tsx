import { Col, Row } from 'antd'
import * as React from 'react'
import Textarea from '../../common/TextArea'
import TextField from '../../common/TextField'

const ContactForm: React.FC<{}> = () => (
  <Row
    gutter={[
      { xs: 40, md: 50 },
      { xs: 40, md: 50 }
    ]}
  >
    <Col xs={24} md={12}>
      <TextField placeholder="First name" />
    </Col>
    <Col xs={24} md={12}>
      <TextField placeholder="Last name" />
    </Col>
    <Col xs={24}>
      <TextField placeholder="Subject" />
    </Col>
    <Col xs={24}>
      <Textarea placeholder="Message" />
    </Col>
  </Row>
)

export default ContactForm
