import React from 'react'
import styled from 'styled-components'
import { NextPage } from 'next'
import { BackgroundImage } from 'components/common/Image'
import { Column, Media } from 'components/common/Layout'
import { Intro } from 'components/Intro'

const Index: NextPage = () => (
  <Media>
    <BoxShadow>
      <BackgroundImage
        src='/image/Nm3TWU_mcard_2023-05-19_d029a1ab5ff646e7b1dcecf3730e77cb_w1280.jpg'
        style={{ width: '100%', height: 634 }}
      />
      <div style={{ position: 'relative', height: 30 }}>
        <Gradation />
      </div>
      <Content>
        <Intro />
      </Content>
    </BoxShadow>
  </Media>
)

const BoxShadow = styled.div`
  overflow: hidden;
  box-shadow: 0px 0px 20px 20px #00000003;
`

const Gradation = styled.div`
  top: 1px;
  width: 100%;
  height: 100%;
  box-shadow: rgb(255, 255, 255) 0px -20px 30px 30px;
  position: absolute;
`

const Content = styled(Column)`
  padding: 20px;
  align-items: center;
  text-align: center;
`

export default Index
