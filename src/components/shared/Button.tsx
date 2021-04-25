import tw from 'twin.macro'
import styled from 'styled-components'

const variantStyles = {
  primary: tw`bg-blue-500 border-blue-500 text-white`,
  destructive: tw`bg-red-500 border-red-500 text-white`,
  clear: tw`text-black`
}

export interface ButtonProps {
  variant?: keyof typeof variantStyles
}

export const Button = styled.button(({ variant }: ButtonProps) => [
  tw`text-base px-3 py-2 mx-2 rounded-md border`,
  variantStyles[variant || 'clear']
])
