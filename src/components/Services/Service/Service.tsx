import * as React from 'react'
import styles from './Service.module.scss'

type ServiceProps = {
  index: number
}

const getBackgroundService = (index: number) => {
  switch (index % 3) {
    case 0:
      return 'rgb(108, 108, 229)'
    case 1:
      return 'rgb(249, 215, 76)'
    default:
      return 'rgb(249, 123, 139)'
  }
}

const Service: React.FC<ServiceProps> = ({ index }) => (
  <div style={{ backgroundColor: getBackgroundService(index) }} className={styles.container}>
    <div className={styles.imageContainer}>Image container</div>
    <div className={styles.imageContainer}>
      <h2>Title</h2>
    </div>
    <div>Description</div>
  </div>
)

export default Service
