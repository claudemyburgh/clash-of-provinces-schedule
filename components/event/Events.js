import React, { Fragment } from 'react'
import Image from 'next/image'
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
              <div className="flex relative  flex-col justify-center lg:w-2/3 w-full mx-auto mt-10 mb-5">
                <div className={'drop-shadow-lg'}>
                  <Image
                    src={event.image.source}
                    layout={'responsive'}
                    width={event.image.wide}
                    height={event.image.height}
                    alt={event.name}
                  />
                </div>
                <div className="md:absolute md:translate-y-10 drop-shadow-lg z-10 p-10">
                  <h1 className="sm:text-4xl text-3xl font-black text-primary-500">{event.name}</h1>
                  <p className=" leading-relaxed text-base text-gray-200 bg-black bg-opacity-50 rounded p-3 -m-3">{event.description}</p>
                </div>
              </div>

              {event.events && (
                <div className={'lg:w-2/3 w-full mx-auto overflow-auto border border-gray-300 rounded-md shadow-xl'}>
                  <table key={`table-${index.toString()}`} className="table-auto w-full text-left whitespace-no-wrap relative">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 rounded-tl-md ">
                          TIMES
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-900 ">EVENTS</th>
                        <th className="px-4 py-3 max-w-[100px] title-font tracking-wider font-medium text-white text-sm bg-gray-900 text-right rounded-tr-md">
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
