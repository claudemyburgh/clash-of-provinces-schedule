import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="lg:flex-grow space-y-4 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start justify-center md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-6xl translate-y-2 font-black tracking-tight text-primary-500">Rise of Empires</h1>
          <h2 className={'text-3xl font-extralight tracking-widest text-gray-400'}>Clash of Provinces Schedule</h2>
          <p className="mb-8 text-lg leading-relaxed">
            Join the fight and play against thousands of player around the world in <strong>Rise of Empires - Clash of Provinces</strong>
          </p>
          <p className="mb-8 text-lg leading-relaxed">
            Here you will find a full list of task you can complete the get the highest points for your team.
          </p>

          <div className="flex justify-center space-x-1">
            <button className="bg-gradient-to-b from-primary-500 to-primary-600 hover:to-primary-400 text-lg text-white tracking-tight font-bold rounded inline-flex justify-center items-center px-6 py-2 hover:shadow-md">
              Button
            </button>

            <a
              href="https://www.buymeacoffee.com/designbycode"
              target="_blank"
              rel="noreferrer"
              className="relative  bg-gradient-to-b from-yellow-500 to-yellow-400 hover:to-yellow-300 text-lg text-white tracking-tight font-bold rounded inline-flex justify-center items-center min-w-[180px] px-6 py-2 hover:shadow-md"
            >
              <span className="p-2 relative block  w-full h-full">
                <Image src={'/bmc-full-logo.svg'} layout={'fill'} alt="buy me a coffee" />
              </span>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative drop-shadow-2xl">
          <Image src={'/hero-sample.png'} layout={'responsive'} height={563} width={877} alt="hero image" />
        </div>
      </div>
    </>
  )
}

export default Hero
