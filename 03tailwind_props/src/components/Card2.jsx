import React from 'react'

function Card2({userid, btnText="visit me"}) {
    return (
        <div>
            <img src='https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600'
            className='z-0 w-100 rounded-md object-cover' />
            <div>
                <h1>{userid}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <button className='bg-green-700'>{btnText}</button>
            </div>
        </div>
    )
}

export default Card2
