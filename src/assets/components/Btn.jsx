import React from 'react'

function Btn() {
    return (
        <>
            <div className='flex gap-3'>
                <button className='bg-lime-300 text-white font-bold rounded hover:bg-red-400 border hover:border-2 hover:border-lime-900 h-10 w-20 hover:transition-shadow '><a href="https://github.com/Satyam6204">GitHub</a></button>
                <button className='bg-lime-300 text-white font-bold rounded hover:bg-red-400 border hover:border-2 hover:border-lime-900 h-10 w-20 '><a href="https://www.linkedin.com/in/satyam-kumar-7a2b91262/">LinkeDln</a></button>
                <button className='bg-lime-300 text-white font-bold rounded hover:bg-red-400 border hover:border-2 hover:border-lime-900  h-10 w-20'><a href="https://www.instagram.com/satyam__cs/">Instagram</a></button>
                <button className= 'bg-lime-300 text-white font-bold rounded hover:bg-red-400 border hover:border-2 hover:border-lime-900   h-10 w-20'><a href="#" download></a>RESUME</button>

            </div>
        </>
    )
}

export default Btn