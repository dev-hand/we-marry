import React from 'react'
import styled from 'styled-components'
import { RowCenter } from 'components/common/Layout'
import { H3Text } from 'components/common/Text'

export const Countdown: React.FC<{ weddingDate: string }> = ({
  weddingDate,
}) => {
  const date = new Date(weddingDate)
  return (
    <Main>
      <Card>{date.getMonth() + 1}</Card>
      <H3Text>월</H3Text>
      <Card>{date.getDate()}</Card>
      <H3Text>일</H3Text>
      <Card>{date.getHours()}</Card>
      <H3Text>시</H3Text>
      <Card>{date.getMinutes() === 0 ? '00' : date.getMinutes()}</Card>
      <H3Text>분</H3Text>
    </Main>
  )
}

const Main = styled(RowCenter)`
  gap: 10px;
  justify-content: center;
`

const Card = styled(RowCenter)`
  width: 44px;
  height: 52px;
  border-radius: 10px;
  justify-content: center;
  font-size: ${(p) => p.theme.size.h3};
  color: ${(p) => p.theme.color.primary};
  background-color: ${(p) => p.theme.color.secondary};
`
