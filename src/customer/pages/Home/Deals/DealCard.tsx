import React from 'react'
import type { Deal } from '../../../../types/dealTypes'
import { useNavigate } from 'react-router-dom'

const DealCard = ({deal}:{deal:Deal}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/products/${deal.category.categoryId}`)} className='w-full cursor-pointer'>
        <img className='border-x-[1px] border-t-[1px] border-black w-full h-[12rem] object-cover object-top' src={deal.category.image} alt="" />
        <div className='border-1 border-black bg-white text-black p-2 text-center'>
            <p className='text-lg font-semibold'>{deal.category.categoryId.split("_").join(" ")}</p>
            <p className='text-2xl font-bold'>{deal.discount}% OFF</p>
            <p className='text-balance text-lg'>shop now</p>

        </div>
    </div>
  )
}

export default DealCard