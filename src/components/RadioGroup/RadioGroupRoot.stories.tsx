import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroupProps } from '@radix-ui/react-radio-group'

import { Card } from '../Card/Card'
import { Typography } from '../Typography/Typography'
import { RadioGroupItem, RadioGroupRoot } from './'

const meta: Meta<typeof RadioGroupRoot> = {
  component: RadioGroupRoot,
  tags: ['autodocs'],
  title: 'components/RadioGroup',
} satisfies Meta<typeof RadioGroupRoot>

export default meta
type Story = StoryObj<typeof RadioGroupRoot>

export const Default: Story = {
  args: {
    defaultValue: 'day',
  },

  render: (args: RadioGroupProps) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <Typography variant={'h3'}>Your subscription costs:</Typography>
        <Card>
          <RadioGroupRoot {...args}>
            <RadioGroupItem value={'day'}>$10 per 1 Day</RadioGroupItem>
            <RadioGroupItem value={'week'}>$50 per 7 Day</RadioGroupItem>
            <RadioGroupItem value={'month'}>$100 per month</RadioGroupItem>
            <RadioGroupItem disabled value={'year'}>
              $799 per year
            </RadioGroupItem>
          </RadioGroupRoot>
        </Card>
      </div>
    )
  },
}
