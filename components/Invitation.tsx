import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { BaseText, H1Text, H3Text, SectionText } from 'components/common/Text'
import { Column, ColumnCenter, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
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
      <Column gap={40}>
        <Column gap={15}>
          <SectionText>INVITATION</SectionText>
          <Row gap={10} style={{ justifyContent: 'center' }}>
            <H1Text>{groomName}</H1Text>
            <H1Text>&</H1Text>
            <H1Text>{grideName}</H1Text>
          </Row>
        </Column>
        <ColumnCenter>
          <BackgroundImage
            src='/icon/leaf.svg'
            style={{ width: 24, height: 35 }}
          />
        </ColumnCenter>
        <MsgText>{message}</MsgText>
        <div>
          <Image
            src={image}
            alt={image}
            width={353}
            height={441}
            objectFit='cover'
            layout='responsive'
            priority
          />
        </div>
        <ColumnCenter gap={10}>
          <RowCenter>
            <RowCenter gap={4}>
              <RowCenter>
                <NameText>{groomParentsName.father}</NameText> {' ‧ '}
                <NameText>{groomParentsName.mother}</NameText>
              </RowCenter>
              <DarkGrayText>의</DarkGrayText>
            </RowCenter>
            <Row>
              <MaleText>아들</MaleText>
            </Row>
            <RowCenter gap={4}>
              <NameText>{groomName}</NameText>
            </RowCenter>
          </RowCenter>
          <RowCenter>
            <RowCenter gap={4}>
              <RowCenter>
                <NameText>{grideParentsName.father}</NameText> {' ‧ '}
                <NameText>{grideParentsName.mother}</NameText>
              </RowCenter>
              <DarkGrayText>의</DarkGrayText>
            </RowCenter>
            <Row>
              <MaleText>딸</MaleText>
            </Row>
            <RowCenter gap={4}>
              <NameText>{grideName}</NameText>
            </RowCenter>
          </RowCenter>
        </ColumnCenter>
        <Button onClick={() => setIsOpen(true)}>연락하기</Button>
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

const DarkGrayText = styled(BaseText)`
  color: ${(p) => p.theme.color.darkGray};
`

const MaleText = styled(DarkGrayText)`
  width: 40px;
`

const NameText = styled(H3Text)`
  min-width: 70px;
`

const MsgText = styled(DarkGrayText)`
  line-height: 32px;
`
