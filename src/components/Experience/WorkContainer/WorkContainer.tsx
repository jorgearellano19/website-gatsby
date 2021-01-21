import { Row, Col } from 'antd'
import * as React from 'react'
import styles from './WorkContainer.module.scss'
import Work from '../Work'

const WorkContainer: React.FC<{}> = () => (
  <Row gutter={20}>
    <Col xs={24} md={12}>
      <div className={styles.workContainer}>
        <Work />
      </div>
    </Col>
    <Col xs={24} md={12}>
      <div className={styles.workContainer}>
        <Work />
      </div>
    </Col>
  </Row>
)

export default WorkContainer
