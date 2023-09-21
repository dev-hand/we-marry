import styled from 'styled-components'
import { BaseText } from 'components/common/Text'

export const Chip = styled(BaseText)`
  width: fit-content;
  padding: 4px 16px;
  border-radius: 50px;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.primary};
`
