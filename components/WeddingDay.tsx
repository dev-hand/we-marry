import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { H2Text, SectionText } from 'components/common/Text'
import { getFullWeddingDate } from 'global/format'
import { Calendar } from 'components/common/Calendar'

export const WeddingDay: React.FC<{
  marriageAt: string
}> = ({ marriageAt }) => (
  <Main>
    <SectionText>WEDDING DAY</SectionText>
    <H2Text>{getFullWeddingDate(marriageAt)}</H2Text>
    <Calendar marriageAt={marriageAt} />
  </Main>
)

const Main = styled(Column)`
  gap: 15px;
  padding: 80px 0;
  align-items: center;
`
