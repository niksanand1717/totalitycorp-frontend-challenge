import React from 'react'
import greentick from './../assets/greentick.png'

function OrderPlaced() {
  return (
    <div className='container placed'>
        <div>
            <img className='greentick' src={greentick} />
            <h1 className='text-center'>Order Placed Successfully</h1>
        </div>
    </div>
  )
}

export default OrderPlaced