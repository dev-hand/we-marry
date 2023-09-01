import styled from 'styled-components'
import { Column } from 'components/common/Layout'

export const Card = styled(Column)`
  border-radius: 8px;
  background-color: ${(p) => p.theme.color.white};
`
