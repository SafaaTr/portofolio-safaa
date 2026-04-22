import React from 'react'

import iconDemo from '/images/icondemo.png'

function CardItem({item}) {
  return (
    <div>
        <div className="card min-w-300 snap-center h-320" >
                      <img src={item.img} alt="imgProject" className='w-full' />
                      <h2 className='font-semibold text-2xl mt-32'>{item.paragraph}</h2>
                      <div className='flex justify-between items-center'>
                      <p className='text-[#1D2130 pt-18]'>{item.content}</p>
                       <a href={item.url}><img src={iconDemo} alt="icon" className='w-35 h-35' /></a>
                      </div>
                     
                    </div>
    </div>
  )
}

export default CardItem