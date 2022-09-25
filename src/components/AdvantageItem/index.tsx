import { Icon } from 'phosphor-react'
import { ReactElement, ReactNode } from 'react'
import { AdvantageItemContainer, IconContainer } from './styles'

interface AdvantageItemProps {
  children: ReactElement | ReactNode
  icon: Icon
  bgColor: string
}

export function AdvantageItem({
  children,
  icon: Icon,
  bgColor,
}: AdvantageItemProps) {
  return (
    <AdvantageItemContainer>
      <IconContainer bgColor={bgColor}>
        <Icon weight="fill" size={16} color="#fff" />
      </IconContainer>

      {children}
    </AdvantageItemContainer>
  )
}
