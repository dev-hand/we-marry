import React from 'react'
import Image from 'next/image'
import { Column, Row } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { getDiffDate } from 'global/format'
import { Chip } from './common/Chip'
import moment from 'moment'

export const WeddingDay: React.FC<{
  weddingDate: string
  calendarImage: string
}> = ({ weddingDate, calendarImage }) => {
  const diffDate = getDiffDate(new Date().toString(), weddingDate)
  const dDay =
    diffDate === 0 ? '오늘 결혼합니다.' : `결혼식까지 ${diffDate}일 남았습니다`

  return (
    <Column gap={40} style={{ width: '100%' }}>
      <Column gap={10}>
        <SectionText>Wedding day</SectionText>
        <H1Text>{dDay}</H1Text>
      </Column>
      <Column gap={20}>
        <Row style={{ justifyContent: 'center' }}>
          <Chip>{moment(new Date(weddingDate)).format('YYYY년 M월')}</Chip>
        </Row>
        <Image
          src={calendarImage}
          alt='calendar'
          width={353}
          height={258}
          objectFit='cover'
          layout='responsive'
        />
      </Column>
    </Column>
  )
}
