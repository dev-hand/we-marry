import styled from 'styled-components'
import { PREFIX } from 'global/constant'

export const BackgroundImage = styled.div<{
  src: string
}>`
  background-image: url(${(p) => PREFIX + p.src});
  background-size: cover;
  background-position: center;
`
