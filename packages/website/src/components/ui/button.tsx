import { ark } from '@ark-ui/react-es6/src'
import type { ComponentPropsWithoutRef } from 'react'
import { styled } from 'styled-system/jsx'
import { button, type ButtonVariantProps } from 'styled-system/recipes'

export type ButtonProps = ButtonVariantProps & ComponentPropsWithoutRef<typeof ark.button>
export const Button = styled(ark.button, button)
