import { createContext, useContext, useEffect, useState } from 'react'
import timezone from '../data/timezone'
import { DateTime } from 'luxon'

const TimezoneContext = createContext()

export const TimezoneProvider = ({ children }) => {
  const [selectedZone, setSelectedZone] = useState()

  const [mounted, setMounted] = useState(false)

  const handleZoneChange = (e) => {
    setSelectedZone(e.target.value)
    e.target.blur()
    localStorage.setItem('localTime', JSON.stringify(e.target.value))
  }

  const getLocalTime = () => {
    const zone = DateTime.local().toFormat('ZZ')
    setSelectedZone(zone)
  }

  const setLocalTime = () => {
    const zone = DateTime.local().toFormat('ZZ')
    setSelectedZone(zone)
    localStorage.setItem('localTime', JSON.stringify(zone))
  }

  const getDayByNumber = (day) => {
    return +day.toFormat('E')
  }

  const getCurrentEvent = (day, time) => {
    return getDayByNumber(day) === +DateTime.local().toFormat('E')
  }

  const getCurrentHour = (hours) => {
    return hours === DateTime.local()
  }

  useEffect(() => {
    const localTimeExist = localStorage.getItem('localTime')
    if (localTimeExist) {
      setSelectedZone(JSON.parse(localTimeExist))
    } else {
      setSelectedZone(() => getLocalTime())
    }
    setMounted(true)
  }, [setSelectedZone])

  const context = {
    timezone,
    selectedZone,
    setSelectedZone,
    setLocalTime,
    handleZoneChange,
    getDayByNumber,
    getCurrentEvent,
    getCurrentHour,
  }

  return mounted && <TimezoneContext.Provider value={context}>{children}</TimezoneContext.Provider>
}

export const useTimezone = () => useContext(TimezoneContext)
