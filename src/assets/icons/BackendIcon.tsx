/* eslint-disable react/jsx-props-no-spreading */
import Icon from '@ant-design/icons'
import * as React from 'react'
import BackendSvg from '../images/BackendSvg'

const FrontendIcon = props => <Icon component={BackendSvg} {...props} />

export default FrontendIcon
