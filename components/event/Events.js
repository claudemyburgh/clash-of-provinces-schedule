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
              <div className="flex flex-col text-center lg:w-2/3 w-full mx-auto mt-10 mb-5 border border-primary-500 p-10 bg-gray-900 rounded-xl shadow-xl">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-primary-500">{event.name}</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">{event.description}</p>
              </div>

              {event.events && (
                <div className={'lg:w-2/3 w-full mx-auto overflow-auto border border-gray-300 rounded-xl shadow-xl'}>
                  <table key={`table-${index.toString()}`} className="table-auto w-full text-left whitespace-no-wrap relative">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl-lg ">
                          TIMES
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 ">EVENTS</th>
                        <th className="px-4 py-3 max-w-[100px] title-font tracking-wider font-medium text-white text-sm bg-gray-900 text-right rounded-tr-lg">
                          Double Dip
                        </th>
                      </tr>
                    </thead>
                    <tbody className={'divide-y divide-x divide-gray-300 divide-dashed'}>
                      <EventTableRow event={event} />
                    </tbody>
                  </table>
                </div>
              )}
            </Element>
          </Fragment>
        ))}
    </>
  )
}

export default Events
