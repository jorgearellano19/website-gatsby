import { Progress, Row, Typography } from 'antd'
import * as React from 'react'
import { expertise, Service } from '../../../utils/globalTypes'

const percent = {
  [expertise.junior]: 30,
  [expertise.mid]: 60,
  [expertise.senior]: 90
}

type Props = {
  service: Service
}
const ProgressBar: React.FC<Props> = ({ service: { name, level } }) => (
  <div>
    <div>
      <Typography> {name} </Typography>
    </div>
    <div>
      <Progress success={{ percent: 90 }} percent={percent[level]} />
    </div>
  </div>
)

export default ProgressBar
