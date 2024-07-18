import React, { useState } from "react"
import { CountContainer } from "./CountStyles"

const Count = ({handlePriceUp}) => {

    const [count, setCount] = useState(1)

    return (
        <CountContainer>
            <div className="btn-decrease"
                onClick={() => {setCount(count > 1 ? count - 1 : 1); handlePriceUp(count > 1 ? count - 1 : 1)}}
            >-</div>
            <div className="quantity">{count}</div>
            <div className="btn-increase"
                onClick={() => {setCount(count + 1); handlePriceUp(count + 1)}}
            >+</div>
        </CountContainer>
    )
}

export default Count
            