import * as React from 'react'
import { Typography, Timeline } from 'antd'
import { BookOutlined, LaptopOutlined } from '@ant-design/icons'
import { DateTime } from 'luxon'
import { timelineType } from '../../../utils/globalTypes'
import { AppContext } from '../../../context/Application'
import styles from './TimelineCustomItem.module.scss'

const { Text, Title } = Typography

type Props = {
  type: timelineType
  since: string
  until: string
  isPresent: boolean
  title: string
  description: string
}
const TimelineCustomItem: React.FC<Props> = ({ since, isPresent, until, title, description, type }) => {
  const { language } = React.useContext(AppContext)
  const sinceDate = DateTime.fromISO(since)
    .setLocale(language)
    .toLocaleString({ month: 'long', year: 'numeric' })
  const untilDate =
    !isPresent &&
    DateTime.fromISO(until)
      .setLocale(language)
      .toLocaleString({ month: 'long', year: 'numeric' })
  const className = type === timelineType.work ? styles.container : ''
  return (
    <div className={className} data-sal="slide-up" data-sal-duration="1500" data-sal-delay="500" data-sal-easing="ease">
      <Timeline.Item dot={type === timelineType.educational ? <BookOutlined /> : <LaptopOutlined />}>
        <div>
          <Text type="secondary">
            {sinceDate} - {isPresent ? 'Present' : untilDate}
          </Text>
        </div>
        <div>
          <Title level={5}>{title}</Title>
        </div>
        <div>
          <Text>{description}</Text>
        </div>
      </Timeline.Item>
    </div>
  )
}

export default TimelineCustomItem
