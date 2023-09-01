import styled from 'styled-components'

export const Button = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 50px;
  border: 1px solid ${(p) => p.theme.color.gray};
  font-size: ${(p) => p.theme.size.default};
  background-color: ${(p) => p.theme.color.white};
  cursor: pointer;
  transition: 0.2s;
  :active {
    background-color: ${(p) => p.theme.color.gray};
  }
  :focus {
    outline: none;
  }
`
