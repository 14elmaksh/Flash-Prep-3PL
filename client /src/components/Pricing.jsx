import React from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";

const Pricing = ({ price }) => {
  return (
    <div className="single-price">
        <div className="range">{price.units} units</div>
        <BsFillCaretDownFill />
        <div className="price">$ {price.price} per unit</div>
    </div>
  )
}

export default Pricing