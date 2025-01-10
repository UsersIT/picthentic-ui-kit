import React from 'react'

import { clsx } from 'clsx'

import s from './Pagination.module.scss'

import { ArrowIosBackOutline, ArrowIosForward } from '../../assets/icons'
import { Button } from '../Button/Button'
import { type Option, Select } from '../Select/Select'
import { Typography } from '../Typography/Typography'

export const Pagination = ({
  appendText,
  currentPage,
  onPageChange,
  onPageSizeChange,
  pageSize,
  pageSizeOptions,
  prependText,
  totalPages,
}: {
  appendText?: React.ReactNode
  currentPage: number
  onPageChange: (page: number) => void
  onPageSizeChange: (size: number) => void
  pageSize: number
  pageSizeOptions: number[]
  prependText?: React.ReactNode
  totalPages: number
}) => {
  const handlePageChange = (page: number) => onPageChange(page - 1)

  const renderPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => {
        const page = i + 1

        return (
          <li key={page}>
            <Button
              className={clsx(s.button, { [s.active]: page === currentPage + 1 })}
              onClick={() => handlePageChange(page)}
              variant={'text'}
            >
              <Typography>{page}</Typography>
            </Button>
          </li>
        )
      })
    }

    const pages = []

    const addPage = (page: number) => {
      pages.push(
        <li key={page}>
          <Button
            className={clsx(s.button, { [s.active]: page === currentPage + 1 })}
            onClick={() => handlePageChange(page)}
            variant={'text'}
          >
            <Typography>{page}</Typography>
          </Button>
        </li>
      )
    }

    addPage(1)

    if (currentPage + 1 <= 4) {
      for (let i = 2; i <= 5; i++) {
        addPage(i)
      }
      pages.push(<li key={'end-ellipsis'}>...</li>)
      addPage(totalPages)
    } else if (currentPage + 1 >= totalPages - 3) {
      pages.push(<li key={'start-ellipsis'}>...</li>)
      for (let i = totalPages - 4; i < totalPages; i++) {
        addPage(i)
      }
      addPage(totalPages)
    } else {
      pages.push(<li key={'start-ellipsis'}>...</li>)
      addPage(currentPage)
      addPage(currentPage + 1)
      addPage(currentPage + 2)
      pages.push(<li key={'end-ellipsis'}>...</li>)
      addPage(totalPages)
    }

    return pages
  }

  return (
    <nav className={s.root}>
      <ul className={s.list}>
        <li>
          <Button
            className={s.button}
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage)}
            variant={'text'}
          >
            <ArrowIosBackOutline height={12} width={12} />
          </Button>
        </li>
        {renderPageNumbers()}
        <li>
          <Button
            className={s.button}
            disabled={currentPage === totalPages - 1}
            onClick={() => handlePageChange(currentPage + 2)}
            variant={'text'}
          >
            <ArrowIosForward height={12} width={12} />
          </Button>
        </li>
      </ul>
      <div className={s.controls}>
        {prependText}
        <Select
          onValueChange={(value: string) => onPageSizeChange(Number(value))}
          options={pageSizeOptions.map(
            option => ({ label: option, value: option.toString() }) as Option
          )}
          value={pageSize.toString()}
          variant={'pagination'}
        />
        {appendText}
      </div>
    </nav>
  )
}
