import React, { useState } from "react"
import { CountContainer } from "./CountStyles"

const Count = ({handlePriceUp, cotas}) => {

    const [count, setCount] = useState(1)

    return (
        <CountContainer>
            <div className="btn-decrease"
                onClick={() => {setCount(count > 1 ? count - 1 : 1); handlePriceUp(count > 1 ? count - 1 : 1)}}
            >-</div>
            <input
                aria-label="Quantity" 
                className="quantity"
                value={count}
                type="text"
                disabled 
            />
            <div className="btn-increase"
                onClick={() => {setCount(cotas > count ? count + 1 : count); handlePriceUp(cotas > count ? count + 1 : count)}}
            >+</div>
        </CountContainer>
    )
}

export default Count
            