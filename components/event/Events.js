import React, { Fragment } from 'react'
import events from '../../data/events'
import EventTableRow from './EventTableRow'
import { Element } from 'react-scroll'

const Events = () => {
  return (
    <>
      {events &&
        events.map((event, index) => (
          <Fragment key={index.toString()}>
            <Element name={`event-${index + 1}`}>
              <div className="panel p-0 mb-5 bg--gray-900 txt--gray-200">
                <div className="p-4">
                  <h1 className="font--size-xl">{event.name}</h1>
                </div>

                {event.events && (
                  <table key={`table-${index.toString()}`} style={{ width: '100%' }} className="border--gray-800 mb-5">
                    <thead>
                      <tr>
                        <th className="bg--blue-600 px-4 py-3">TIMES</th>
                        <th className="bg--blue-600 px-4 py-3">EVENTS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <EventTableRow event={event} />
                    </tbody>
                  </table>
                )}
              </div>
            </Element>
          </Fragment>
        ))}
    </>
  )
}

export default Events
