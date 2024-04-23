import React from 'react'

export default function GuestCartCard({order}) {
  return (
    <div>
        <img src={ order.img } width='200' height='200'/>
    </div>
  )
}
