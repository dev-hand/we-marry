import React from 'react'
import { Column, Row } from 'components/common/Layout'
import { BaseText, H1Text, SectionText } from 'components/common/Text'
import styled from 'styled-components'
import { Button } from './common/Button'
import { BackgroundImage } from './common/Image'
import { theme } from 'styles/theme'

export const Contact: React.FC = () => {
  return (
    <Column gap={40} style={{ alignItems: 'center' }}>
      <Column gap={10}>
        <SectionText>Contact</SectionText>
        <H1Text>연락처</H1Text>
      </Column>
      <Column gap={30}>
        <Row gap={20} style={{ alignItems: 'center' }}>
          <Row gap={10}>
            <BaseText>010-1234-1234</BaseText>
            <BaseText style={{ color: theme.color.gray }}>|</BaseText>
            <BaseText>조용천</BaseText>
          </Row>
          <CopyButton>
            <BackgroundImage
              src='/icon/copy.svg'
              style={{ width: 16, height: 16 }}
            />
            복사
          </CopyButton>
        </Row>
        <Row gap={20} style={{ alignItems: 'center' }}>
          <Row gap={10}>
            <BaseText>010-1234-1234</BaseText>
            <BaseText style={{ color: theme.color.gray }}>|</BaseText>
            <BaseText>조용천</BaseText>
          </Row>
          <CopyButton>
            <BackgroundImage
              src='/icon/copy.svg'
              style={{ width: 16, height: 16 }}
            />
            복사
          </CopyButton>
        </Row>
        <Row gap={20} style={{ alignItems: 'center' }}>
          <Row gap={10}>
            <BaseText>010-1234-1234</BaseText>
            <BaseText style={{ color: theme.color.gray }}>|</BaseText>
            <BaseText>조용천</BaseText>
          </Row>
          <CopyButton>
            <BackgroundImage
              src='/icon/copy.svg'
              style={{ width: 16, height: 16 }}
            />
            복사
          </CopyButton>
        </Row>
      </Column>
    </Column>
  )
}

const CopyButton = styled(Button)`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  border: 0;
  border-radius: 4px;
  background-color: ${(p) => p.theme.color.lightGray};
  font-size: 13px;
  color: ${(p) => p.theme.color.darkGray};
`
