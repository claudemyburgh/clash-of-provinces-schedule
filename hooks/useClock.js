import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'
import { useTimezone } from '../context/TimezoneContext'

const useClock = () => {
  const [clock, setClock] = useState()
  const { selectedZone } = useTimezone()

  useEffect(() => {
    const timer = setInterval(() => {
      setClock((prevClock) => DateTime.local().setZone(`UTC${selectedZone}`).toFormat('HH:mm:ss'))
    }, 100)

    return () => {
      clearInterval(timer)
    }
  }, [selectedZone])

  return clock
}

export default useClock
