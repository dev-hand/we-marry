import React from 'react'
import styled from 'styled-components'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Column, Media } from 'components/common/Layout'
import { Invitation } from 'components/Invitation'
import { WeddingDay } from 'components/WeddingDay'
import { Gallery } from 'components/Gallery'
import {
  GOOGLE_SHEET_API_KEY,
  GOOGLE_SPREAD_SHEET_ID,
  PREFIX,
} from 'global/constant'
import { PostProps } from 'global/type'
import { MainCover } from 'components/MainCover'
import { postIds } from 'public/data'
import { Seo } from 'components/common/Seo'
import moment from 'moment'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = postIds.map((id) => {
    return {
      params: {
        id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string
  const data = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREAD_SHEET_ID}/values/data?key=${GOOGLE_SHEET_API_KEY}`,
  ).then((res) => res.json())
  return {
    props: { id, post: data.values },
  }
}

interface Props {
  id: string
  post: string[]
}

const Post: NextPage<Props> = ({ id, post }) => {
  const index = postIds.indexOf(id)
  const {
    // trafficInfo,
    // grideAccount,
    // groomAccount,
    address,
    location,
    thumbnail,
    images,
    groomName,
    groomParentsName,
    grideName,
    grideParentsName,
    gridePhoneNumber,
    groomPhoneNumber,
    weddingDate,
    message,
    calendarImage,
  }: PostProps = JSON.parse(post[index])

  return (
    <>
      <Seo
        title={`${groomName} & ${grideName}의 결혼식에 초대합니다`}
        description={`${moment(new Date(weddingDate)).format(
          'YYYY년 M월 D일 HH시 mm분',
        )} ${address} ${location}`}
        image={thumbnail}
        url={`${PREFIX}/${id}`}
      />
      <Media>
        <BoxShadow>
          <MainCover thumbnail={thumbnail} />
          <Content>
            <Invitation
              message={message}
              grideName={grideName}
              grideParentsName={grideParentsName}
              gridePhoneNumber={gridePhoneNumber}
              groomName={groomName}
              groomParentsName={groomParentsName}
              groomPhoneNumber={groomPhoneNumber}
              image={images[0]}
            />
            <Line />
            <WeddingDay
              weddingDate={weddingDate}
              calendarImage={calendarImage}
            />
            <Line />
            <Gallery images={images} />
            <Line />
          </Content>
        </BoxShadow>
      </Media>
    </>
  )
}

const BoxShadow = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 20px 20px #00000003;
`

const Content = styled(Column)`
  padding: 20px;
  align-items: center;
  text-align: center;
`

const Line = styled.div`
  width: 100%;
  margin: 80px 0;
  border: 0.5px solid ${(p) => p.theme.color.lightGray};
`

export default Post
