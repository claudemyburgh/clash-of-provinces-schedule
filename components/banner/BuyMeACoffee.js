import React from 'react'
import Image from 'next/image'

const BuyMeACoffee = () => {
  return (
    <div className="-rotate-1 bg-gradient-to-b from-yellow-50 to-white p-12 border-2 border-yellow-500 rounded-lg drop-shadow-2xl flex flex-wrap min-h-[200px] text-center md:text-left">
      <div className="relative hidden md:block ">
        <div data-atropos-offset="5" className="min-w-[200px] min-h-[400px]   absolute -left-24 -top-24">
          <Image src={'/coffee-spill.png'} layout={'responsive'} width={80} height={150} />
        </div>
      </div>
      <div className="ml-40 space-y-3">
        <h1
          data-atropos-offset="5"
          className="rotate-1 drop-shadow bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent text-3xl  md:text-5xl font-black tracking-tight uppercase"
        >
          Support This Website
        </h1>
        <p data-atropos-offset="-5" data-atropos-opacity="1;0.25">
          By supporting this website you will help me to pay for the domain and hosting and motivate me to add new features and also even
          maybe create a android app with more features.
        </p>
        <a
          href="https://www.buymeacoffee.com/designbycode"
          target="_blank"
          rel="noreferrer"
          data-atropos-offset="-5"
          className={
            'bg-gradient-to-b from-yellow-500 to-yellow-400 hover:shadow hover:to-yellow-300 text-white px-6' +
            ' py-2' +
            ' rounded-lg -rotate-2 inline-flex'
          }
        >
          <Image src={'/bmc-full-logo.svg'} layout={'fixed'} width={220} height={40} />
        </a>
      </div>
    </div>
  )
}

export default BuyMeACoffee
