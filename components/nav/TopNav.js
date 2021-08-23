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
    <div className="nav nav--fixed border--blue-800">
      <div className="nav__wrapper">
        <div className="nav__brand mr-6">
          <ScrollLink to={`event-${today.toFormat('E')}`} smooth={true} offset={-70} duration={1500}>
            <strong>{today.weekdayLong}</strong>:{' '}
            <i className="txt--blue-900 font--weight-900">
              {events[getDayByNumber(today) - 1].name} {}
            </i>
          </ScrollLink>
        </div>
        <button onClick={toggleOpen} className="nav__toggle">
          <HiMenuAlt3 size={20} color="#fff" />
        </button>
        <div className={`nav__responsive justify--end ${isOpen()}`}>
          <ul className="nav__links">
            <li className="nav__link clock border--white border--dashed">
              <FcAlarmClock size={24} style={{ marginRight: 10 }} /> {clock}
            </li>
          </ul>
          {/*<ul className="nav__links">*/}
          {/*  <li className="nav__link">*/}
          {/*    <Link href={`/`}>*/}
          {/*      <a>HOME</a>*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*  <li className="nav__link">*/}
          {/*    <Link href={`/`}>*/}
          {/*      <a>HERO</a>*/}
          {/*    </Link>*/}
          {/*  </li>*/}
          {/*</ul>*/}
        </div>
      </div>
    </div>
  )
}

export default TopNav
