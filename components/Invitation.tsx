import React, { useState } from 'react'
import styled from 'styled-components'
import {
  BaseText,
  H1Text,
  H2Text,
  H3Text,
  SectionText,
  SmallText,
} from 'components/common/Text'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { theme } from 'styles/theme'
import { Modal } from 'components/common/Modal'
import { Contact } from 'components/Contact'
import { Button } from 'components/common/Button'

export const Invitation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Column style={{ width: '100%' }}>
      <Column gap={60}>
        <Column gap={10}>
          <SectionText>Invitation</SectionText>
          <Row gap={10} style={{ justifyContent: 'center' }}>
            <H2Text>조용천</H2Text>
            <H1Text>&</H1Text>
            <H1Text>송유진</H1Text>
          </Row>
        </Column>
        <Column gap={40} style={{ alignItems: 'center' }}>
          <BackgroundImage
            src='/icon/leaf.svg'
            style={{ width: 24, height: 35 }}
          />
          <BaseText style={{ lineHeight: '32px', color: theme.color.darkGray }}>
            {`서로가 마주보며 다져온 사랑을\n이제 함께 한 곳을 바라보며\n걸어갈 수 있는 큰 사랑으로 키우고자 합니다.\n저희 두 사람이 사랑의 이름으로\n지켜나갈 수 있게 앞날을\n축복해 주시면 감사하겠습니다.
`}
          </BaseText>
          <BackgroundImage
            src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
            style={{ width: '100%', height: 441 }}
          />
          <Column gap={10}>
            <RowCenter>
              <RowCenter gap={4}>
                <H3Text>조성규 ‧ 노경남</H3Text>
                <SmallDarkGrayText>의</SmallDarkGrayText>
              </RowCenter>
              <Row>
                <SmallDarkGrayText style={{ width: 50 }}>
                  아들
                </SmallDarkGrayText>
              </Row>
              <RowCenter gap={4}>
                <H3Text>조용천</H3Text>
                <SmallDarkGrayText>입니다.</SmallDarkGrayText>
              </RowCenter>
            </RowCenter>
            <RowCenter>
              <RowCenter gap={4}>
                <H3Text>송일영 ‧ 엄미나</H3Text>
                <SmallDarkGrayText>의</SmallDarkGrayText>
              </RowCenter>
              <Row>
                <SmallDarkGrayText style={{ width: 50 }}>딸</SmallDarkGrayText>
              </Row>
              <RowCenter gap={4}>
                <H3Text>송유진</H3Text>
                <SmallDarkGrayText>입니다.</SmallDarkGrayText>
              </RowCenter>
            </RowCenter>
          </Column>
          <Button onClick={() => setIsOpen(true)}>연락하기</Button>
        </Column>
      </Column>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Contact />
      </Modal>
    </Column>
  )
}

const RowCenter = styled(Row)`
  align-items: center;
`

const SmallDarkGrayText = styled(SmallText)`
  color: ${(p) => p.theme.color.darkGray};
`
