import React from 'react'
import Pricing from '../components/Pricing';

const prices = [
    {
        units: "1 - 750",
        price: 0.95
    },
    {
        units: "751 - 2000",
        price: 0.85
    },
    {
        units: "2001 - 5000",
        price: 0.70
    },
    {
        units: "5001 +",
        price: 0.65
    },
]

const Price = () => {
  return (
    <div>
        <h2>Our Pricing Includes:</h2>
        <ul>
            <li>Receiving</li>
            <li>Labelling</li>
            <li>Inspection</li>
            <li>Damage Control</li>
            <li>Label Renewal</li>
            <li>14 days free inventory</li>
        </ul>
        <div className="pricing-pane">
            {
                prices.map((price, index) => {
                    return <Pricing price={price} key={index} />;
                })
            }
        </div>
    </div>
  )
}

export default Price