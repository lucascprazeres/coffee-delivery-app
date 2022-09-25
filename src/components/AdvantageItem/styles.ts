import styled from 'styled-components'

export const AdvantageItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p,
  span {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`

interface IconContainerProps {
  bgColor: string
}

export const IconContainer = styled.span<IconContainerProps>`
  background-color: ${(props) => props.bgColor};

  height: 2rem;
  width: 2rem;

  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
`
