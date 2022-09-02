import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1120px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  a {
    height: 38px;
    width: 38px;
    border-radius: 6px;
    background: var(--yellow-light);

    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Location = styled.span`
  background: var(--purple-light);
  color: var(--purple-dark);
  border-radius: 6px;
  font-size: 14px;
  padding: 10px 8px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`
