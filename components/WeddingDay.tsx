import React from 'react'
import Image from 'next/image'
import { Column } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { diffDateFormat } from 'global/format'

export const WeddingDay: React.FC<{
  weddingDate: string
  calendarImage: string
}> = ({ weddingDate, calendarImage }) => {
  const diffDate = diffDateFormat(new Date().toString(), weddingDate)
  const dDay =
    diffDate === 0 ? '오늘 결혼합니다.' : `결혼식까지 ${diffDate}일 남았습니다.`

  return (
    <Column gap={30} style={{ width: '100%' }}>
      <Column gap={10}>
        <SectionText>Wedding day</SectionText>
        <H1Text>{dDay}</H1Text>
      </Column>
      <Image
        src={calendarImage}
        alt='calendar'
        width={353}
        height={258}
        objectFit='cover'
        layout='responsive'
      />
    </Column>
  )
}
