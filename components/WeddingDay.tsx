import React from 'react'
import Image from 'next/image'
import { Column } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { getDiffDate } from 'global/format'
import { Countdown } from 'components/Countdown'

export const WeddingDay: React.FC<{
  weddingDate: string
  calendarImage: string
}> = ({ weddingDate, calendarImage }) => {
  const diffDate = getDiffDate(new Date().toString(), weddingDate)
  const dDay =
    diffDate === 0
      ? '오늘 결혼합니다'
      : diffDate < 0
      ? '결혼식이 지났습니다'
      : `결혼식까지 ${diffDate}일 남았습니다`

  return (
    <Column gap={40} style={{ width: '100%' }}>
      <Column gap={15}>
        <SectionText>WEDDING DAY</SectionText>
        <H1Text>{dDay}</H1Text>
      </Column>
      <div>
        <Image
          src={calendarImage}
          alt='calendar'
          width={353}
          height={220}
          objectFit='cover'
          layout='responsive'
          priority
        />
      </div>
      <Countdown weddingDate={weddingDate} />
    </Column>
  )
}
