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
  USER_KEYS,
} from 'global/constant'
import { useRouter } from 'next/router'
import { PostProps } from 'global/type'
import { MainCover } from 'components/MainCover'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = USER_KEYS.map((key) => {
    return {
      params: {
        key,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SPREAD_SHEET_ID}/values/data?key=${GOOGLE_SHEET_API_KEY}`,
  ).then((res) => {
    console.log('res >> ', res)
    return res.json()
  })
  return {
    props: { data },
  }
}

interface Props {
  data: {
    values: string[]
  }
}

const Post: NextPage<Props> = ({ data }) => {
  console.log('######')
  const router = useRouter()
  const key = router.asPath.replaceAll('/', '')
  const keyIndex = USER_KEYS.indexOf(key)
  const [unitData, setUnitData] = useState()
  console.log(1, data)
  useEffect(() => {
    console.log(3, data)
    // const {
    //   thumbnail,
    //   images,
    //   groomName,
    //   groomParentsName,
    //   grideAccount,
    //   grideName,
    //   grideParentsName,
    //   gridePhoneNumber,
    //   groomAccount,
    //   groomPhoneNumber,
    //   trafficInfo,
    //   weddingDate,
    //   message,
    //   address,
    //   location,
    //   calendarImage,
    // }: PostProps = JSON.parse(data.values[keyIndex])
    setUnitData(JSON.parse(data.values[keyIndex]))
  }, [data])

  console.log(2, unitData)
  return (
    <Media>
      <BoxShadow>
        {/* <MainCover thumbnail={thumbnail} />
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
        </Content> */}
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
