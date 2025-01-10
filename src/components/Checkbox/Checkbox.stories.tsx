import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { CheckBox, CheckboxProps } from './Checkbox'

const meta = {
  component: CheckBox,
  tags: ['autodocs'],
  title: 'components/CheckBox',
} satisfies Meta<typeof CheckBox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
    label: 'Click here',
  },

  render: (args: CheckboxProps) => {
    const [checked, setChecked] = useState(true)

    return <CheckBox {...args} checked={checked} onChange={setChecked} />
  },
}
