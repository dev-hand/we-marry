import React, { useState } from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BaseText } from 'components/common/Text'
import { BackgroundImage } from 'components/common/Image'

export const Select: React.FC<{
  children: React.ReactChild[]
  title: string
}> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false)
  const optionHeight = 104 * children.length
  return (
    <Column>
      <Dropdown isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)}>
        <ContainerTitleText>{title}</ContainerTitleText>
        <DropdownIcon src='/icon/chevron-down-primary.svg' />
      </Dropdown>
      {isOpen && <Option height={optionHeight}>{children}</Option>}
    </Column>
  )
}

const Dropdown = styled(Row)<{ isOpen: boolean }>`
  position: relative;
  height: 54px;
  border-radius: ${(p) => (p.isOpen ? '4px 4px 0 0;' : '4px;')};
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.color.secondary};
  cursor: pointer;
`

const Option = styled(Column)<{ height: number }>`
  height: ${(p) => p.height}px;
  padding: 0 20px;
  border: 1px solid ${(p) => p.theme.color.lightGray};
  border-top: 0;
  border-radius: 0 0 4px 4px;
  .selectItem:not(:last-child) {
    border-bottom: 1px solid ${(p) => p.theme.color.lightGray};
  }
  animation: optionDropdown 0.5s 1 ease;
  overflow: hidden;
  @keyframes optionDropdown {
    0% {
      height: 0px;
    }
    100% {
      height: ${(p) => p.height};
    }
  }
`

export const SelectItem = styled(Row).attrs({ className: 'selectItem' })`
  padding: 20px 0;
`

const ContainerTitleText = styled(BaseText)`
  color: ${(p) => p.theme.color.primary};
`

const DropdownIcon = styled(BackgroundImage)`
  position: absolute;
  right: 60px;
  width: 24px;
  height: 24px;
`
