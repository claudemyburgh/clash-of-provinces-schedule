import React from 'react'
import Times from './Times'
import { FaCheck, FaTimes } from 'react-icons/fa'

const EventTableRow = ({ event }) => {
  return (
    <>
      {event.events.map((event, eventIndex) => (
        <tr key={`events-${eventIndex.toString()}`} className={`even:bg-primary-100 odd:bg-gray-100  ${event.dd && 'connected'}`}>
          <td className="px-4 py-3 font-bold">
            <Times index={eventIndex} />
          </td>
          <td className="p-4 font-semibold text-gray-700">
            <ul>
              {event.tasks.map((task, taskIndex) => (
                <li key={taskIndex.toString()}>{task}</li>
              ))}
            </ul>
          </td>
          <td className={`p-4 font-semibold text-gray-700 text-right`}>
            <div className="checker w-8 h-8 float-right relative">
              <span
                className={`w-8 h-8 rounded-full relative items-center justify-center z-20  flex${
                  event.dd ? ' bg-gray-900 text-secondary-400' : ' bg-gray-200  text-white '
                }`}
              >
                {event.dd ? <FaCheck size={14} /> : <FaTimes size={14} />}
              </span>
            </div>
          </td>
        </tr>
      ))}
    </>
  )
}

export default EventTableRow
