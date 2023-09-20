import React, { useEffect, useState } from 'react'
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
import { useRouter } from 'next/router'
import { ids } from 'public/data'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = ids.map((id) => {
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
  const data = await fetch(decodeURI(`${PREFIX}/data/${id}.json`), {
    headers: { Accept: 'application/json' },
  }).then((res) => {
    console.log(res)
    return res.json()
  })
  return {
    props: { data },
  }
}
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await fetch(
//     `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREAD_SHEET_ID}/values/data?key=${GOOGLE_SHEET_API_KEY}`,
//   ).then((res) => res.json())
//   return {
//     props: { data },
//   }
// }

interface Props {
  data: PostProps
}

const Post: NextPage<Props> = ({ data }) => {
  // const router = useRouter()
  // const id = router.asPath
  //   .split('/')
  //   .find((item) => IDS.includes(item)) as string
  // const idIndex = IDS.indexOf(id)
  const {
    thumbnail,
    images,
    groomName,
    groomParentsName,
    grideAccount,
    grideName,
    grideParentsName,
    gridePhoneNumber,
    groomAccount,
    groomPhoneNumber,
    trafficInfo,
    weddingDate,
    message,
    address,
    location,
    calendarImage,
  }: PostProps = data

  return (
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
          <WeddingDay weddingDate={weddingDate} calendarImage={calendarImage} />
          <Line />
          <Gallery images={images} />
          <Line />
        </Content>
      </BoxShadow>
    </Media>
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
