import React from 'react'
import Times from './Times'

const EventTableRow = ({ event }) => {
  return (
    <>
      {event.events.map((event, eventIndex) => (
        <tr key={`events-${eventIndex.toString()}`}>
          <td className="p-4">
            <Times index={eventIndex} />
          </td>
          <td className="p-4">
            <ul>
              {event.tasks.map((task, taskIndex) => (
                <li key={taskIndex.toString()}>{task}</li>
              ))}
            </ul>
          </td>
        </tr>
      ))}
    </>
  )
}

export default EventTableRow
