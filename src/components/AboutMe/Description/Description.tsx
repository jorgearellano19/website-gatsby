import { Col, Row } from 'antd'
import * as React from 'react'
import styles from './Description.module.scss'

const Description: React.FC<{}> = () => (
  <Row className={styles.container}>
    <Col xs={24} md={12}>
      Description Index with button
    </Col>
    <Col xs={24} md={12}>
      Percentage{' '}
    </Col>
  </Row>
)

export default Description
