import { Meta, StoryObj } from '@storybook/react'

import { Table } from './Table'

const meta = {
  component: Table.Root,
  parameters: {
    docs: {
      description: {
        component: 'A simple and customizable table component.',
      },
    },
  },
  tags: ['autodocs'],
  title: 'Components/Table',
} satisfies Meta<typeof Table.Root>

export default meta
type Story = StoryObj<typeof meta>

const paymentData = [
  {
    endDate: '12.12.2024',
    paymentDate: '11.12.2024',
    paymentType: 'Stripe',
    price: '$10',
    subscriptionType: '1 Day',
  },
  {
    endDate: '21.12.2024',
    paymentDate: '20.12.2024',
    paymentType: 'Stripe',
    price: '$10',
    subscriptionType: '1 Day',
  },
]

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.Cell>Data of payment</Table.Cell>
          <Table.Cell>End Date of Subscription</Table.Cell>
          <Table.Cell>Price</Table.Cell>
          <Table.Cell>Subscription Type</Table.Cell>
          <Table.Cell>Payment Type</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {paymentData.map((payment, index) => (
          <Table.Row key={index}>
            <Table.Cell>{payment.paymentDate}</Table.Cell>
            <Table.Cell>{payment.endDate}</Table.Cell>
            <Table.Cell>{payment.price}</Table.Cell>
            <Table.Cell>{payment.subscriptionType}</Table.Cell>
            <Table.Cell>{payment.paymentType}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  ),
}
