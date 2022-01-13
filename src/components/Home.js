import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>
            Home Page
            <button onClick={() => navigate('order-summary',{replace:true})}>Order Now</button>
        </div>
    )
}

export default Home
// replace true go back to the default browser with no url 