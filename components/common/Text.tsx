import styled from 'styled-components'

export const H1Text = styled.h1`
  font-size: ${(p) => p.theme.size.h1};
  font-weight: 400;
`

export const H2Text = styled.h2`
  font-size: ${(p) => p.theme.size.h2};
  font-weight: 400;
`

export const H3Text = styled.h3`
  font-size: ${(p) => p.theme.size.h3};
  font-weight: 400;
`

export const BaseText = styled.p`
  font-size: ${(p) => p.theme.size.default};
`

export const SmallText = styled.p`
  font-size: ${(p) => p.theme.size.small};
`

export const SectionText = styled(SmallText)`
  color: ${(p) => p.theme.color.primary};
`
