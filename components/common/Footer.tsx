import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import moment from 'moment'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { BaseText, SmallText } from 'components/common/Text'
import { PREFIX } from 'global/constant'
import { Card } from 'components/common/Card'

export const Footer: React.FC<{
  id: string
  groomName: string
  grideName: string
  thumbnail: string
  address: string
  location: string
  weddingDate: string
}> = ({
  id,
  groomName,
  grideName,
  thumbnail,
  address,
  location,
  weddingDate,
}) => {
  return (
    <MainContainer>
      <Column gap={20}>
        <BtnWrapper
          onClick={() =>
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
          }
        >
          <BackgroundImage
            src='/icon/kakao.svg'
            style={{ width: 24, height: 24 }}
          />
          <BaseText>카카오톡 공유하기</BaseText>
        </BtnWrapper>
        <BtnWrapper>
          <BackgroundImage
            src='/icon/link.svg'
            style={{ width: 24, height: 24 }}
          />
          <BaseText>링크주소 복사하기</BaseText>
        </BtnWrapper>
      </Column>
      <Card vertical={20} horizontal={20}>
        <DescText>재능 기부 목적으로 만든 무료 청첩장입니다</DescText>
        <DescText>
          서비스 문의는{' '}
          <Link href=''>
            <a>여기를 눌러주세요</a>
          </Link>
        </DescText>
      </Card>
    </MainContainer>
  )
}

const MainContainer = styled(Column)`
  gap: 30px;
  width: 100%;
  align-items: center;
  padding: 40px 0;
  background-color: ${(p) => p.theme.color.secondary};
`

const BtnWrapper = styled(Row)`
  gap: 10px;
  align-items: center;
  cursor: pointer;
`

const DescText = styled(SmallText)`
  color: ${(p) => p.theme.color.darkGray};
  line-height: 22px;
  text-align: center;
  a {
    color: ${(p) => p.theme.color.black};
    text-decoration: underline;
  }
`
