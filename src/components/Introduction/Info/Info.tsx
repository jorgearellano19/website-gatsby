import { Row, Col } from 'antd'
import React from 'react'

type Props = {
  name: string
  aboutMe: string
}

const Info: React.FC<Props> = ({ name, aboutMe }) => (
  <div>
    <Row>
      <Col span={24}>Avatar</Col>
    </Row>
    <Row>
      <Col span={24}>{name}</Col>
    </Row>
    <Row>
      <Col span={24}>{aboutMe} </Col>
    </Row>
  </div>
)

export default Info
