import { Icon } from 'phosphor-react'
import { AdvantageItemContainer, IconContainer } from './styles'

interface AdvantageItemProps {
  text: string
  icon: Icon
  bgColor: string
}

export function AdvantageItem({
  text,
  icon: Icon,
  bgColor,
}: AdvantageItemProps) {
  return (
    <AdvantageItemContainer>
      <IconContainer bgColor={bgColor}>
        <Icon weight="fill" size={16} color="#fff" />
      </IconContainer>

      <p>{text}</p>
    </AdvantageItemContainer>
  )
}
