import { Space } from 'antd'
import * as React from 'react'
import styles from './Experience.module.scss'
import WorkContainer from './WorkContainer'

const Experience: React.FC<{}> = () => (
  <section>
    <div className={styles.container}>
      <Space className={styles.spaceContainer} direction="vertical" size={30}>
        <div>
          <h1>School Degree</h1>
        </div>
        <div className={styles.educationalContainer}>Educational container</div>
      </Space>
      <Space className={styles.spaceContainerWork} direction="vertical" size={30}>
        <div>
          <h1>Work Experience </h1>
        </div>
        <WorkContainer />
      </Space>
    </div>
  </section>
)

export default Experience
