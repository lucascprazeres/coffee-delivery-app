import { InputHTMLAttributes } from 'react'
import { CustomInput } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: number
}

export function Input(props: InputProps) {
  return <CustomInput type="text" {...props} />
}
