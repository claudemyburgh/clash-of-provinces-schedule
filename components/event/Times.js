import React from 'react'
import { useTimezone } from '../../context/TimezoneContext'
import TimeInterval from '../../utils/time-interval'

const Times = ({ index }) => {
  const { selectedZone } = useTimezone()
  const { times } = new TimeInterval()

  return (
    <ul>
      {Array(3)
        .fill()
        .map((_, ti) => (
          <li key={ti.toString()}>
            <>{times[index + ti * 8].plus({ hour: 4 }).setZone(`UTC${selectedZone}`).toFormat('T')}</>
          </li>
        ))}
    </ul>
  )
}

export default Times
