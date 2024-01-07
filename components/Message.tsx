import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BaseText, H1Text, SectionText } from 'components/common/Text'
import { Card } from 'components/common/Card'
import { Button } from 'components/common/Button'
import { COMMENT_FORM_URL } from 'global/constant'

export const Message: React.FC<{ comments: any[] }> = ({ comments }) => {
  return (
    <Column gap={40} style={{ width: '100%' }}>
      <Column gap={15}>
        <SectionText>COMMENT</SectionText>
        <H1Text>축하 메시지</H1Text>
      </Column>
      {comments.length > 0 && (
        <Column gap={10}>
          {comments.map((comment: any, index: number) => {
            if (!comment.name || !comment.message || !comment.createdAt) return
            return (
              <CommentCard key={index}>
                <CommentTop>
                  <BaseText>{comment.name}</BaseText>
                  <DateText>{comment.createdAt}</DateText>
                </CommentTop>
                <DescText>{comment.message}</DescText>
              </CommentCard>
            )
          })}
        </Column>
      )}
      <a target='_blank' href={COMMENT_FORM_URL} rel='noopener noreferrer'>
        <Button>메시지 작성하기</Button>
      </a>
    </Column>
  )
}

const CommentCard = styled(Card)`
  gap: 10px;
  padding: 15px;
  border-radius: 16px;
  align-items: flex-start;
  background-color: rgba(216, 190, 178, 0.15);
`

const CommentTop = styled(Row)`
  width: 100%;
  justify-content: space-between;
`

const DescText = styled(BaseText)`
  color: ${(p) => p.theme.color.darkGray};
`

const DateText = styled(BaseText)`
  color: ${(p) => p.theme.color.gray};
`
