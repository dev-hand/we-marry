import styled from 'styled-components'

export const Spacing = styled.div<{
  gap?: number
  vertical?: number
  horizontal?: number
}>`
  display: flex;
  ${(p) => p.gap && `gap: ${p.gap}px;`}
  ${(p) =>
    p.horizontal &&
    `padding-right: ${p.horizontal}px; padding-left: ${p.horizontal}px;`}
    ${(p) =>
    p.vertical &&
    `padding-top: ${p.vertical}px; padding-bottom: ${p.vertical}px;`};
`

export const Column = styled(Spacing)`
  flex-direction: column;
`

export const Row = styled(Spacing)`
  flex-direction: row;
`

export const Grid = styled(Spacing)`
  display: grid;
`

export const Media = styled.div`
  @media ${(p) => p.theme.media.desktop} {
    margin: auto;
    width: 480px;
  }
  @media ${(p) => p.theme.media.mobile} {
    width: 100%;
  }
`
