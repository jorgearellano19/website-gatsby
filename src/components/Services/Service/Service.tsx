import Icon from '@ant-design/icons'
import { Typography } from 'antd'
import * as React from 'react'
import { FrontendIcon, BackendIcon, DevopsIcon } from '../../../assets/icons'
import { AppContext } from '../../../context/Application'
import { Service, servicesEnum } from '../../../utils/globalTypes'
import { getTranslation } from '../../../utils/language'
import { DESCRIPTION_SERVICE_PREFIX } from '../../../utils/translation/homePage/keys'
import styles from './Service.module.scss'

const { Title, Text } = Typography

const getBackgroundService = (slug: servicesEnum) => {
  switch (slug) {
    case servicesEnum.backend:
      return 'rgb(108, 108, 229)'
    case servicesEnum.frontend:
      return 'rgb(249, 215, 76)'
    case servicesEnum.devops:
      return 'rgb(249, 123, 139)'
    default:
      return 'rgb(249, 123, 139)'
  }
}

type Props = {
  service: Service
}

const icons = {
  [servicesEnum.frontend]: <FrontendIcon />,
  [servicesEnum.backend]: <BackendIcon />,
  [servicesEnum.devops]: <DevopsIcon />
}

const ServiceComponent: React.FC<Props> = ({ service }) => {
  const { language } = React.useContext(AppContext)
  const description = getTranslation(service, language, DESCRIPTION_SERVICE_PREFIX)
  return (
    <div style={{ backgroundColor: getBackgroundService(service.slug) }} className={styles.container}>
      <div className={styles.imageContainer}>{icons[service.slug]}</div>
      <div className={styles.imageContainer}>
        <Title level={2}>{service.name}</Title>
      </div>
      <Text>{description}</Text>
    </div>
  )
}

export default ServiceComponent
