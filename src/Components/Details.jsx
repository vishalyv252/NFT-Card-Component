import React from 'react'
import Ethereum from '../images/icon-ethereum.png'
import Clock from '../images/icon-clock.png'

const Details = () => {
    return (
    <>
        <div className='flex flex-row w-60 justify-between my-2'>
            <div className='flex text-xs'>
                <img src={Ethereum} alt={Ethereum} className='mr-2 h-4' />
                <p className='text-Cyan'>0.041 ETH</p>
            </div>
            <div className='flex text-xs'>
                <img src={Clock} alt={'Clock'} className='mr-2 h-4' />
                <p className='text-SBlue'>3 days left</p>
            </div>
        </div>
    </>
    )
}

export default Details;