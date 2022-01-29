import dayjs from 'dayjs'
import React from 'react'
export interface DateInterface{
    dayjs : dayjs.Dayjs
    setDate ?: React.Dispatch<React.SetStateAction<dayjs.Dayjs>>
    currentMonth ?: number
}