import React, { useState } from 'react'
import { DateTime } from 'luxon'
import Link from 'next/link'
import { Link as ScrollLink } from 'react-scroll'
import { HiMenuAlt3 } from 'react-icons/hi'
import events from '../../data/events'

import useNavigation from '../../hooks/useNavigation'
import useClock from '../../hooks/useClock'
import { FcAlarmClock } from 'react-icons/fc'
import { useTimezone } from '../../context/TimezoneContext'

const TopNav = () => {
  const { isOpen, toggleOpen } = useNavigation()
  const [today] = useState(DateTime.local())
  const { getDayByNumber } = useTimezone()
  const clock = useClock()
  return (
    <div className="fixed z-50 w-full top-0 bg-gray-900">
      <div className="max-w-6xl px-4 flex justify-between items-center min-h-[70px] mx-auto text-gray-100">
        <div className="text-xl font-bold">
          <ScrollLink to={`event-${today.toFormat('E')}`} smooth={true} offset={-70} duration={1500}>
            <strong>{today.weekdayLong}</strong>:{' '}
            <i className="text-primary-500">
              {events[getDayByNumber(today) - 1].name} {}
            </i>
          </ScrollLink>
        </div>
        <button onClick={toggleOpen} className="md:hidden">
          <HiMenuAlt3 size={20} color="#fff" />
        </button>
        <div className="flex border border-gray-500 border-dashed rounded px-4 py-2">
          <FcAlarmClock size={24} style={{ marginRight: 10 }} /> {clock}
        </div>
      </div>
    </div>
  )
}

export default TopNav
