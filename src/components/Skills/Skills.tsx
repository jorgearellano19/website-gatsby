import * as React from 'react'
import { Col, Row, Select } from 'antd'
import styles from './Skills.module.scss'
import useResizeWidth from '../../hooks/useResizeWidth'
import Skill from './Skill'

const Skills: React.FC<{}> = () => {
  const { isMobile } = useResizeWidth()
  const SelectComponent = isMobile ? <Select /> : <div>Links</div>
  const mockArray = [0, 1, 2]
  return (
    <section>
      <div className={styles.container}>
        <div>
          <h1>Skills</h1>
        </div>
        {SelectComponent}
        <Row>
          {mockArray.map((val, index) => (
            <Col key={val} className={styles.skillContainer} xs={24} sm={12} md={8}>
              <Skill />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Skills
