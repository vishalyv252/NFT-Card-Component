import React from 'react'
import Image from './Components/Image';
import Avatar from './Components/Avatar';
import Paragraph from './Components/Paragraph';
import Heading from './Components/Heading';
import Details from './Components/Details';
import Line from './Components/Line';
import Name from './Components/Name';

const App = () => {
    return (
    <>
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='flex flex-col justify-center items-center h-auto w-auto rounded-lg bg-CBG font-Outfits drop-shadow-2xl'>
                <Image />
                <Heading />
                <Paragraph />
                <Details />
                <Line />
                <div className='flex w-60 flex-start mb-3'>
                    <Avatar />
                    <Name />
                </div>
            </div>
        </div>
    </>
    )
}

export default App;