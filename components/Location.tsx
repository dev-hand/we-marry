import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { H1Text, H3Text, SectionText } from 'components/common/Text'
import { Map } from 'components/Map'
import { CopyBtn } from 'components/CopyBtn'

export const Location: React.FC<{
  location: string
  address: string
}> = ({ location, address }) => (
  <Column style={{ width: '100%' }}>
    <Column gap={30}>
      <Column gap={20}>
        <Column gap={10}>
          <SectionText>Location</SectionText>
          <H1Text>오시는 길</H1Text>
        </Column>
        <Column gap={15}>
          <DescText>{location}</DescText>
          <Row
            gap={10}
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <DescText>{address}</DescText>
            <CopyBtn text={address} />
          </Row>
        </Column>
      </Column>
      <Column>
        <Map address={address} />
      </Column>
    </Column>
  </Column>
)

const DescText = styled(H3Text)`
  color: ${(p) => p.theme.color.darkGray};
`
