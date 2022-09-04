import React, { InputHTMLAttributes } from 'react'
import { CustomInput } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: number
}

export const Input = React.forwardRef((props: InputProps, ref: any) => {
  return <CustomInput type="text" {...props} ref={ref} />
})

Input.displayName = 'Input'
