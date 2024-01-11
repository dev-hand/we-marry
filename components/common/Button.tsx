import styled from 'styled-components'
import { handleCopy } from 'global/handler'
import { BackgroundImage } from 'components/common/Image'

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 50px;
  border: 1px solid ${(p) => p.theme.color.gray};
  font-size: ${(p) => p.theme.size.default};
  color: ${(p) => p.theme.color.black};
  background-color: #ffffff;
  cursor: pointer;
  transition: 0.2s;
  :active {
    background-color: ${(p) => p.theme.color.gray};
  }
  :focus {
    outline: none;
  }
`

export const TelBtn: React.FC<{ phoneNumber: string }> = ({ phoneNumber }) => (
  <a href={`tel:${phoneNumber}`}>
    <MainButton>
      <BackgroundImage
        src='/icon/phone.svg'
        style={{ width: 16, height: 16 }}
      />
      전화
    </MainButton>
  </a>
)

export const SmsBtn: React.FC<{ phoneNumber: string }> = ({ phoneNumber }) => (
  <a href={`sms:${phoneNumber}`}>
    <MainButton>
      <BackgroundImage src='/icon/mail.svg' style={{ width: 16, height: 16 }} />
      문자
    </MainButton>
  </a>
)

export const CopyBtn: React.FC<{ text: string }> = ({ text }) => (
  <MainButton onClick={() => handleCopy(text)}>
    <BackgroundImage src='/icon/copy.svg' style={{ width: 16, height: 16 }} />
    복사
  </MainButton>
)

const MainButton = styled(Button)`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  gap: 2px;
  padding: 1px 6px;
  border: 0;
  border-radius: 4px;
  font-size: 13px;
  color: ${(p) => p.theme.color.darkGray};
`
