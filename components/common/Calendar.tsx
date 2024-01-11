import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { Grid } from './Layout'
import { H3Text } from './Text'

const WEEK = ['일', '월', '화', '수', '목', '금', '토']
const MONTH_DATES = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export const Calendar: React.FC<{ marriageAt: string }> = ({ marriageAt }) => {
  const year = moment(marriageAt).get('years')
  const month = moment(marriageAt).get('months') + 1
  const date = moment(marriageAt).get('dates')
  const day = moment(marriageAt).get('days')
  const lastMonth = MONTH_DATES[moment(marriageAt).get('months')]
  return (
    <Main>
      {WEEK.map((item, index) => (
        <H3Text key={index}>{item}</H3Text>
      ))}
    </Main>
  )
}

const Main = styled(Grid)`
  width: 100%;
  grid-template-columns: repeat(7, 1fr);
`
