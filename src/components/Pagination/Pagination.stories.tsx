import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Typography } from '../Typography/Typography'
import { Pagination } from './Pagination'

const meta = {
  argTypes: {
    appendText: {
      control: { type: 'text' },
      description: 'Optional text displayed after pagination controls.',
    },
    currentPage: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      description: 'The current page number (0-indexed).',
    },
    onPageChange: {
      description: 'Callback function called when the page changes.',
    },
    onPageSizeChange: {
      description: 'Callback function called when the page size changes.',
    },
    pageSize: {
      control: { type: 'number' },
      defaultValue: { summary: 10 },
      description: 'The number of items per page.',
    },
    pageSizeOptions: {
      control: { type: 'array' },
      defaultValue: { summary: [10, 20, 50] },
      description: 'Available options for page size.',
    },
    prependText: {
      control: { type: 'text' },
      description: 'Optional text displayed before pagination controls.',
    },
    totalPages: {
      control: { type: 'number' },
      defaultValue: { summary: 1 },
      description: 'The total number of pages.',
    },
  },
  component: Pagination,
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    currentPage: 0,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50],
    totalPages: 5,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    const [pageSize, setPageSize] = useState(args.pageSize)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
      args.onPageChange(page)
    }

    const handlePageSizeChange = (size: number) => {
      setPageSize(size)
      args.onPageSizeChange(size)
    }

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        pageSize={pageSize}
      />
    )
  },
}

export const WithText: Story = {
  args: {
    appendText: <Typography>on page</Typography>,
    currentPage: 1,
    pageSize: 10,
    pageSizeOptions: [10, 20, 50],
    prependText: <Typography>Show</Typography>,
    totalPages: 10,
  },
  render: args => {
    const [currentPage, setCurrentPage] = useState(args.currentPage)
    const [pageSize, setPageSize] = useState(args.pageSize)

    const handlePageChange = (page: number) => {
      setCurrentPage(page)
      args.onPageChange(page)
    }

    const handlePageSizeChange = (size: number) => {
      setPageSize(size)
      args.onPageSizeChange(size)
    }

    return (
      <Pagination
        {...args}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        pageSize={pageSize}
      />
    )
  },
}
