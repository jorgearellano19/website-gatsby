import { Button, Col, Row, Typography } from 'antd'
import * as React from 'react'
import styles from './Description.module.scss'
import t from '../../../utils/translation/homePage/constants.json'
import ProgressBar from '../ProgressBar'
import { DownloadableFile, Service } from '../../../utils/globalTypes'

type Props = {
  aboutMe: string
  cvButtonText: string
  services: Service[]
  cv: DownloadableFile
}
const Description: React.FC<Props> = ({ aboutMe, cvButtonText, services, cv }) => {
  const downloadCV = () => {
    console.log(cv)
    if (typeof window !== 'undefined') {
      window.open(cv.publicURL, '_blank')
    }
  }
  return (
    <Row className={styles.container}>
      <Col xs={24} md={12}>
        <Typography className={styles.aboutMe}>{aboutMe}</Typography>
        <div className={styles.buttonContainer}>
          <Button onClick={downloadCV} className={styles.button} color="primary">
            {cvButtonText}
          </Button>
        </div>
      </Col>
      <Col xs={24} md={12}>
        {services.map(service => (
          <ProgressBar service={service} key={service.name} />
        ))}
      </Col>
    </Row>
  )
}

export default Description
