import React from 'react'
import styled from 'styled-components'
import { BackgroundImage } from 'components/common/Image'

export const MainCover: React.FC<{ thumbnail: string }> = ({ thumbnail }) => (
  <>
    <BackgroundImage src={thumbnail} style={{ width: '100%', height: 634 }} />
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
