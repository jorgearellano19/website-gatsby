import { Col, Row } from 'antd'
import * as React from 'react'
import Service from './Service'
import styles from './Services.module.scss'

const mockArray = [0, 1, 2]

const Services: React.FC<{}> = () => (
  <section>
    <div className={styles.container}>
      <div>
        <h1>Services</h1>
      </div>
      <Row
        gutter={[
          { xs: 40, md: 50 },
          { xs: 40, md: 50 }
        ]}
      >
        {mockArray.map((val, index) => (
          <Col xs={24} md={8}>
            <Service index={index + 1} />
          </Col>
        ))}
      </Row>
    </div>
  </section>
)

export default Services
