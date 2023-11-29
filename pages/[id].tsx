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
import { Footer } from 'components/common/Footer'
import { Location } from 'components/Location'
import { getFullWeddingDate } from 'global/format'
import { Account } from 'components/Account'

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

const Post: NextPage<{ id: string; post: string[] }> = ({ id, post }) => {
  const index = postIds.indexOf(id)
  const {
    grideAccount,
    groomAccount,
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
    trafficInfo,
  }: PostProps = JSON.parse(post[index])
  return (
    <>
      <Seo
        title={`${groomName} ♥︎ ${grideName} 결혼합니다`}
        description={`${getFullWeddingDate(
          weddingDate,
        )} ${address} ${location}`}
        image={`${PREFIX}/${thumbnail}`}
        url={`${PREFIX}/${id}`}
      />
      <Frame>
        <BoxShadow>
          <MainCover thumbnail={thumbnail} />
          <Content style={{ paddingTop: 30 }}>
            <Invitation
              message={message}
              grideName={grideName}
              grideParentsName={grideParentsName}
              gridePhoneNumber={gridePhoneNumber}
              image={images[0]}
              groomName={groomName}
              groomParentsName={groomParentsName}
              groomPhoneNumber={groomPhoneNumber}
            />
          </Content>
          <Line style={{ border: 0 }} />
          <WeddingDay
            weddingDate={weddingDate}
            location={location}
            address={address}
          />
          <Line style={{ border: 0 }} />
          <Content>
            <Gallery images={images} />
          </Content>
          <Line />
          <Content>
            <Location
              location={location}
              address={address}
              trafficInfo={trafficInfo}
            />
          </Content>
          <Line />
          <Content style={{ paddingBottom: 80 }}>
            <Account grideAccount={grideAccount} groomAccount={groomAccount} />
          </Content>
          <Footer
            id={id}
            groomName={groomName}
            grideName={grideName}
            thumbnail={thumbnail}
            address={address}
            location={location}
            weddingDate={weddingDate}
          />
        </BoxShadow>
      </Frame>
    </>
  )
}

const Frame = styled(Media)`
  animation: frameFadeIn 2s 1 ease;
  @keyframes frameFadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const BoxShadow = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 20px 20px #00000003;
`

const Content = styled(Column)`
  padding: 0 20px;
  align-items: center;
  text-align: center;
`

const Line = styled.div`
  width: 90%;
  margin: 80px auto;
  border: 0.5px solid ${(p) => p.theme.color.lightGray};
`

export default Post
