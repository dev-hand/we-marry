import React from 'react'
import { BaseText, H1Text, H2Text, SectionText } from 'components/common/Text'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { theme } from 'styles/theme'

export const Intro: React.FC = () => {
  return (
    <Column>
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
            {`유일한 두사람이 만나\n성실하고 애틋하게 사랑하며\n용기가 되고 빛이 되어\n천천히 걸어가겠습니다.\n\n애정을 담아 축하해주세요.\n더 없는 격려와 기쁨으로\n간직하겠습니다.`}
          </BaseText>
          <BackgroundImage
            src='/image/Nm3TWU_mcard_2023-05-19_1dc298371df344a18110c234d34d60f8_w1280.jpg'
            style={{ width: '100%', height: 441 }}
          />
        </Column>
      </Column>
    </Column>
  )
}
