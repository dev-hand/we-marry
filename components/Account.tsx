import React from 'react'
import styled from 'styled-components'
import { Column, ColumnCenter } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { BaseText, H1Text } from 'components/common/Text'
import { Select, SelectItem } from 'components/common/Select'
import { Account as AccountProps } from 'global/type'
import { CopyBtn } from 'components/CopyBtn'
import { theme } from 'styles/theme'

const Item: React.FC<{
  bankName: string
  accountNumber: string
  name: string
}> = ({ bankName, accountNumber, name }) => (
  <AccountSelectItem>
    <Column gap={15} style={{ alignItems: 'start' }}>
      <BaseText>
        {bankName} <span style={{ color: theme.color.gray }}>|</span>{' '}
        {accountNumber}
      </BaseText>
      <BaseText>{name}</BaseText>
    </Column>
    <CopyBtn text={accountNumber} />
  </AccountSelectItem>
)

export const Account: React.FC<{
  groomAccount: AccountProps[]
  grideAccount: AccountProps[]
}> = ({ groomAccount, grideAccount }) => {
  return (
    <Column style={{ width: '100%' }}>
      <Column gap={40}>
        <ColumnCenter gap={20}>
          <BackgroundImage
            src='/icon/leaf.svg'
            style={{ width: 24, height: 35 }}
          />
          <H1Text>마음 전하실 곳</H1Text>
        </ColumnCenter>
        <Column gap={10}>
          {groomAccount.length > 0 && (
            <Select title='신랑측 계좌번호'>
              {groomAccount.map((item, index) => (
                <Item
                  key={index}
                  bankName={item.bankName}
                  name={item.name}
                  accountNumber={item.accountNumber}
                />
              ))}
            </Select>
          )}
          {grideAccount.length > 0 && (
            <Select title='신부측 계좌번호'>
              {grideAccount.map((item, index) => (
                <Item
                  key={index}
                  bankName={item.bankName}
                  name={item.name}
                  accountNumber={item.accountNumber}
                />
              ))}
            </Select>
          )}
        </Column>
      </Column>
    </Column>
  )
}

const AccountSelectItem = styled(SelectItem)`
  justify-content: space-between;
  align-items: center;
`
