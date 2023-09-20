import React from 'react'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from './Image'
import { BaseText } from './Text'
import { theme } from 'styles/theme'
import { PREFIX } from 'global/constant'
import moment from 'moment'

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Kakao: any
  }
}

interface Props {
  id: string
  groomName: string
  grideName: string
  thumbnail: string
  address: string
  location: string
  weddingDate: string
}

export const Footer: React.FC<Props> = ({
  id,
  groomName,
  grideName,
  thumbnail,
  address,
  location,
  weddingDate,
}) => {
  return (
    <Column
      vertical={40}
      style={{
        width: '100%',
        alignItems: 'center',
        backgroundColor: theme.color.secondary,
      }}
    >
      <Row
        gap={10}
        style={{ alignItems: 'center', cursor: 'pointer' }}
        onClick={() => {
          window.Kakao.init('7f507b714b35d40245268ee3378570c7')
          window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
              title: `${groomName} ♥︎ ${grideName} 결혼합니다`,
              description: `${moment(new Date(weddingDate)).format(
                'YYYY년 M월 D일 HH시 mm분',
              )} ${address} ${location}`,
              imageUrl: `${PREFIX}/${thumbnail}`,
              link: {
                mobileWebUrl: `${PREFIX}/${id}`,
                webUrl: `${PREFIX}/${id}`,
              },
            },
            buttons: [
              {
                title: '청첩장 보러가기',
                link: {
                  mobileWebUrl: `${PREFIX}/${id}`,
                  webUrl: `${PREFIX}/${id}`,
                },
              },
            ],
          })
        }}
      >
        <BackgroundImage
          src='/icon/kakao.svg'
          style={{ width: 24, height: 24 }}
        />
        <BaseText>카카오톡 공유하기</BaseText>
      </Row>
    </Column>
  )
}
