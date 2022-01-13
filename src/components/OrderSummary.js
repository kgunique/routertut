import React from 'react'
import { useNavigate } from 'react-router-dom'


const OrderSummary = () => {
    const navigate = useNavigate()

    return (
        <div>
            <h1>Order confirmed</h1>
            <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
    )
}

export default OrderSummary
// navigate -1 will go back one page before

// usenavigate is use to navigate functionally most coomonly on a button click
