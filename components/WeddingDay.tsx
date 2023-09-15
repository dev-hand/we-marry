import React from 'react'
import Image from 'next/image'
import { Column } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'

export const WeddingDay: React.FC = () => (
  <Column gap={30} style={{ width: '100%' }}>
    <Column gap={10}>
      <SectionText>Wedding day</SectionText>
      <H1Text>결혼식까지 1일 남았습니다.</H1Text>
    </Column>
    <Image
      src='/image/calendar.png'
      alt='calendar'
      width={353}
      height={258}
      objectFit='cover'
      layout='responsive'
    />
  </Column>
)
