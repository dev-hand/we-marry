import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BaseText, H1Text, H3Text, SectionText } from 'components/common/Text'
import { Map } from 'components/Map'
import { CopyBtn } from 'components/CopyBtn'
import { TrafficInfo } from 'global/type'

export const Location: React.FC<{
  location: string
  address: string
  trafficInfo: TrafficInfo
}> = ({ location, address, trafficInfo }) => (
  <Column style={{ width: '100%' }}>
    <Column gap={40}>
      <Column gap={15}>
        <SectionText>LOCATION</SectionText>
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
      <Column>
        <Map address={address} />
      </Column>
      {trafficInfo.car && (
        <RightSection>
          <H3Text>자가용</H3Text>
          <SubText>{trafficInfo.car}</SubText>
        </RightSection>
      )}
      {trafficInfo.metro && (
        <RightSection>
          <H3Text>지하철</H3Text>
          <SubText>{trafficInfo.metro}</SubText>
        </RightSection>
      )}
      {trafficInfo.bus && (
        <RightSection>
          <H3Text>버스</H3Text>
          <SubText>{trafficInfo.bus}</SubText>
        </RightSection>
      )}
    </Column>
  </Column>
)

const DescText = styled(H3Text)`
  color: ${(p) => p.theme.color.darkGray};
`

const SubText = styled(BaseText)`
  width: 80%;
  text-align: start;
  line-height: 28px;
  color: ${(p) => p.theme.color.darkGray};
`

const RightSection = styled(Column)`
  gap: 10px;
  align-items: start;
`
