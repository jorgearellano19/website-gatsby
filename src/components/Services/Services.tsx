import { Col, Row, Typography } from 'antd'
import * as React from 'react'
import { Service } from '../../utils/globalTypes'
import ServiceComponent from './Service'
import styles from './Services.module.scss'
import t from '../../utils/translation/homePage/constants.json'
import { AppContext } from '../../context/Application'

const { Title } = Typography

type Props = {
  services: Service[]
}

const Services: React.FC<Props> = ({ services }) => {
  const { language } = React.useContext(AppContext)
  return (
    <section>
      <div className={styles.container}>
        <div data-sal="slide-up" data-sal-duration="1000" data-sal-delay="200" data-sal-easing="ease">
          <Title>{t.services.title[language]}</Title>
        </div>
        <Row
          gutter={[
            { xs: 40, md: 50 },
            { xs: 40, md: 50 }
          ]}
        >
          {services.map(service => (
            <Col className={styles.serviceContainer} key={service.slug} xs={24} md={8}>
              <ServiceComponent service={service} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Services
