import React from 'react'
import Image from 'next/image'
const BuyMeACoffee = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-white p-12 border-2 border-yellow-500 rounded-lg shadow flex flex-wrap min-h-[200px] text-center md:text-left">
      <div className="relative md:w-1/4 hidden md:block ">
        <div className="min-w-[200px] min-h-[400px]  absolute -left-24 -top-24">
          <Image src={'/coffee-spill.png'} layout={'responsive'} width={80} height={150} />
        </div>
      </div>
      <div className="md:w-3/4 space-y-5">
        <h1 className="bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent text-3xl  md:text-5xl font-bold tracking-tight uppercase">
          Support my work
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam, assumenda consequatur dignissimos dolores eos est et eum
          harum id illum iste mollitia neque praesentium sunt suscipit unde veniam vitae voluptate voluptates. Deserunt, dicta dolor, eaque
        </p>
        <a
          href="https://www.buymeacoffee.com/designbycode"
          target="_blank"
          rel="noreferrer"
          className={
            'bg-gradient-to-b from-yellow-500 to-yellow-400 hover:shadow hover:to-yellow-300 text-white px-6' +
            ' py-2' +
            ' rounded-full inline-flex'
          }
        >
          <Image src={'/bmc-full-logo.svg'} layout={'fixed'} width={220} height={40} />
        </a>
      </div>
    </div>
  )
}

export default BuyMeACoffee
