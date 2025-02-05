'use client'
import React, { forwardRef } from 'react'

import clsx from 'clsx'
import * as timeago from 'timeago.js'
import ru from 'timeago.js/lib/lang/ru'
import TimeAgo from 'timeago-react'

import s from './Time.module.scss'

import { Typography } from '../Typography/Typography'

timeago.register('ru', ru)

export type TimeProps = {
  /** en by default*/
  locale?: string
  /** @format date example: '2022-10-25T12:00:00.000Z' */
  time: string
} & React.ComponentPropsWithoutRef<'span'>

export const Time = forwardRef<HTMLSpanElement, TimeProps>(
  ({ className, locale, time, ...rest }, ref) => {
    return (
      <Typography
        as={'span'}
        className={clsx(s.date, className)}
        id={'time'}
        ref={ref}
        variant={'small-text'}
        {...rest}
      >
        <TimeAgo datetime={time} locale={locale} />
      </Typography>
    )
  }
)

Time.displayName = 'Time'
