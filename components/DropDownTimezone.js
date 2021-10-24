import React from 'react'
import { useTimezone } from '../context/TimezoneContext'

const DropDownTimezone = ({ className }) => {
  const { timezone, handleZoneChange, selectedZone } = useTimezone()

  return (
    <>
      <select
        onChange={handleZoneChange}
        name="timezone"
        id="timezone"
        value={selectedZone}
        className={`form-select rounded max-w-full ${className}`}
      >
        {timezone.map((zone, index) => (
          <option key={index.toString()} value={zone.value}>
            {zone.name}
          </option>
        ))}
      </select>
    </>
  )
}

export default DropDownTimezone
