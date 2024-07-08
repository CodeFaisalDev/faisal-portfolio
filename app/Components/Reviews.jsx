import React from 'react'
import { Reviews } from './ReviewsComponent'

const ReviewsMain = () => {
  return (
    <div className='text-center font-rubik max-md:mt-16 max-md:w-[100vw]'>
        <h1 className='font-bold text-4xl max-md:mb-10 md:text-6xl'>
            My Client Reviews
        </h1>
        <div>
            <Reviews/>
        </div>
    </div>
  )
}

export default ReviewsMain