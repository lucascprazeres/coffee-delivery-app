import styled from 'styled-components'

export const AdvantageItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: 16px;
  }
`

interface IconContainerProps {
  bgColor: string
}

export const IconContainer = styled.span<IconContainerProps>`
  background-color: ${(props) => props.bgColor};

  height: 32px;
  width: 32px;

  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
`
