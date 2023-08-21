import React from 'react'
import { NextPage } from 'next'
import { BackgroundImage } from 'components/Image'
import { Media } from 'components/layout'

const Index: NextPage = () => {
  return (
    <Media>
      <BackgroundImage
        src='/image/Nm3TWU_mcard_2023-05-19_d029a1ab5ff646e7b1dcecf3730e77cb_w1280.jpg'
        style={{ width: '100%', height: 634 }}
      />
    </Media>
  )
}

export default Index
