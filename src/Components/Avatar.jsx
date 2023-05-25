import React from 'react'
import Profile from '../images/image-avatar.png'

const Avatar = () => {
    return (
    <>
        <div>
            <img src={Profile} alt={'Profile'} className='w-7 h-7 border-2 border-White rounded-full'/>
        </div>
    </>
    )
}

export default Avatar;