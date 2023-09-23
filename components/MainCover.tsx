import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export const MainCover: React.FC<{ thumbnail: string }> = ({ thumbnail }) => (
  <>
    <Image
      src={thumbnail}
      alt={thumbnail}
      width={300}
      height={400}
      layout='responsive'
      objectFit='cover'
      priority
    />
    <div style={{ position: 'relative', height: 30 }}>
      <Gradation />
    </div>
  </>
)

const Gradation = styled.div`
  top: 1px;
  width: 100%;
  height: 100%;
  box-shadow: rgb(255, 255, 255) 0px -20px 30px 30px;
  position: absolute;
`
