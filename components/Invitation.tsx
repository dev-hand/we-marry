import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
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
import { ParentsName, PhoneNumber } from 'global/type'

export const Invitation: React.FC<{
  groomName: string
  grideName: string
  message: string
  image: string
  groomParentsName: ParentsName
  grideParentsName: ParentsName
  groomPhoneNumber: PhoneNumber[]
  gridePhoneNumber: PhoneNumber[]
}> = ({
  groomName,
  grideName,
  message,
  image,
  groomParentsName,
  grideParentsName,
  groomPhoneNumber,
  gridePhoneNumber,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Column style={{ width: '100%' }}>
      <Column gap={60}>
        <Column gap={10}>
          <SectionText>Invitation</SectionText>
          <Row gap={10} style={{ justifyContent: 'center' }}>
            <H2Text>{groomName}</H2Text>
            <H1Text>&</H1Text>
            <H1Text>{grideName}</H1Text>
          </Row>
        </Column>
        <Column gap={40}>
          <Column style={{ alignItems: 'center' }}>
            <BackgroundImage
              src='/icon/leaf.svg'
              style={{ width: 24, height: 35 }}
            />
          </Column>
          <BaseText style={{ lineHeight: '32px', color: theme.color.darkGray }}>
            {message}
          </BaseText>
          <Image
            src={image}
            alt='invitation-image'
            width={353}
            height={441}
            objectFit='cover'
            layout='responsive'
          />
          <Column gap={10} style={{ alignItems: 'center' }}>
            <RowCenter>
              <RowCenter gap={4}>
                <H3Text>
                  {groomParentsName.father} ‧ {groomParentsName.mother}
                </H3Text>
                <SmallDarkGrayText>의</SmallDarkGrayText>
              </RowCenter>
              <Row>
                <SmallDarkGrayText style={{ width: 50 }}>
                  아들
                </SmallDarkGrayText>
              </Row>
              <RowCenter gap={4}>
                <H3Text>{groomName}</H3Text>
                <SmallDarkGrayText>입니다</SmallDarkGrayText>
              </RowCenter>
            </RowCenter>
            <RowCenter>
              <RowCenter gap={4}>
                <H3Text>
                  {grideParentsName.father} ‧ {grideParentsName.mother}
                </H3Text>
                <SmallDarkGrayText>의</SmallDarkGrayText>
              </RowCenter>
              <Row>
                <SmallDarkGrayText style={{ width: 50 }}>딸</SmallDarkGrayText>
              </Row>
              <RowCenter gap={4}>
                <H3Text>{grideName}</H3Text>
                <SmallDarkGrayText>입니다</SmallDarkGrayText>
              </RowCenter>
            </RowCenter>
          </Column>
          <Button onClick={() => setIsOpen(true)}>연락하기</Button>
        </Column>
      </Column>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Contact
          groomPhoneNumber={groomPhoneNumber}
          gridePhoneNumber={gridePhoneNumber}
        />
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
