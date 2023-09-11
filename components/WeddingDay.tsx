import React from 'react'
import { Column } from 'components/common/Layout'
import { H1Text, SectionText } from 'components/common/Text'
import { BackgroundImage } from 'components/common/Image'

export const WeddingDay: React.FC = () => {
  return (
    <Column gap={30} style={{ width: '100%' }}>
      <Column gap={10}>
        <SectionText>Wedding day</SectionText>
        <H1Text>결혼식까지 1일 남았습니다.</H1Text>
      </Column>
      <BackgroundImage
        src='/image/calendar.png'
        style={{ width: '100%', height: 258 }}
      />
    </Column>
  )
}
