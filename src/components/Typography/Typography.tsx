'use client'
import { ElementType, ReactNode, forwardRef } from 'react'

import cn from 'clsx'

import s from './Typography.module.scss'

import { PolymorphPropsWithRef, PolymorphRef } from '../../types/polymorph'
import { TypographyVariants } from './typographyVariants'

type TextAlign = 'center' | 'inherit' | 'left' | 'right'

type ElementProps = {
  children: ReactNode
  className?: string
  textAlign?: TextAlign
  variant?: (typeof TypographyVariants)[keyof typeof TypographyVariants]
}

type TagComponent = <T extends ElementType = 'p'>(
  props: PolymorphPropsWithRef<T, ElementProps>
) => ReactNode

const TypographyPolymorph: TagComponent = forwardRef(
  <T extends ElementType = 'button'>(props: PolymorphPropsWithRef<T>, ref?: PolymorphRef<T>) => {
    const {
      as: Tag = 'p',
      children,
      className,
      textAlign = 'left',
      variant = TypographyVariants.RegularText14,
      ...rest
    } = props

    return (
      <Tag className={cn(s[variant], s[`align-${textAlign}`], className)} ref={ref} {...rest}>
        {children}
      </Tag>
    )
  }
)

export const Typography = TypographyPolymorph
