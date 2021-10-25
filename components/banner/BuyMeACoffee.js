import React from 'react'
import Image from 'next/image'
import Atropos from 'atropos/react'

const BuyMeACoffee = () => {
  return (
    <Atropos
      className={'overflow-visible'}
      activeOffset={10}
      shadowScale={1.05}
      shadowOffset={10}
      rotateXMax={10}
      rotateYMax={10}
      highlight={false}
      // onEnter={() => console.log('Enter')}
      // onLeave={() => console.log('Leave')}
      // onRotate={(x, y) => console.log('Rotate', x, y)}
    >
      <div className="bg-gradient-to-b from-yellow-50 to-white p-12 border-2 border-yellow-500 rounded-lg shadow flex flex-wrap min-h-[200px] text-center md:text-left">
        <div className="relative hidden md:block ">
          <div data-atropos-offset="5" className="min-w-[200px] min-h-[400px]   absolute -left-24 -top-24">
            <Image src={'/coffee-spill.png'} layout={'responsive'} width={80} height={150} />
          </div>
        </div>
        <div className="ml-40 space-y-3">
          <h1
            data-atropos-offset="5"
            className="bg-gradient-to-b from-primary-500 to-primary-300 bg-clip-text text-transparent text-3xl  md:text-5xl font-black tracking-tight uppercase"
          >
            Support my work
          </h1>
          <p data-atropos-offset="-5" data-atropos-opacity="1;0.25">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam, assumenda consequatur dignissimos dolores eos est et eum
            harum id illum iste mollitia neque praesentium sunt suscipit unde veniam vitae voluptate voluptates. Deserunt, dicta dolor,
            eaque
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
    </Atropos>
  )
}

export default BuyMeACoffee
