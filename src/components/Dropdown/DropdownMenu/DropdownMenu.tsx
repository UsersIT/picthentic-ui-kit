'use client'
import { ComponentPropsWithoutRef, ElementRef, ReactNode, forwardRef } from 'react'

import * as RadixDropdown from '@radix-ui/react-dropdown-menu'
import clsx from 'clsx'

import s from './DropdownMenu.module.scss'

type MenuProps = {
  modal?: boolean
  onOpenChange?: (open: boolean) => void
  open?: boolean
  portal?: boolean
  trigger: ReactNode
} & Omit<ComponentPropsWithoutRef<typeof RadixDropdown.Content>, 'asChild'>

export const DropdownMenu = forwardRef<ElementRef<typeof RadixDropdown.Content>, MenuProps>(
  ({ children, className, modal, onOpenChange, open, portal = true, trigger, ...rest }, ref) => {
    const menuContent = (
      <RadixDropdown.Content
        className={clsx(s.content, className)}
        ref={ref}
        {...rest}
        onPointerDownOutside={e => {
          if (!portal) {
            e.detail.originalEvent.preventDefault()
          }
        }}
      >
        {children}
      </RadixDropdown.Content>
    )

    return (
      <RadixDropdown.Root modal={modal} onOpenChange={onOpenChange} open={open}>
        <RadixDropdown.Trigger asChild>{trigger}</RadixDropdown.Trigger>
        {portal ? <RadixDropdown.Portal>{menuContent}</RadixDropdown.Portal> : menuContent}
      </RadixDropdown.Root>
    )
  }
)

DropdownMenu.displayName = 'DropdownMenu'
