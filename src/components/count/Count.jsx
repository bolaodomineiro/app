import { CountContainer } from "./CountStyles"

const Count = () => {
    return (
        <CountContainer>
            <div className="btn-decrease">-</div>
            <div className="quantity">{1}</div>
            <div className="btn-increase">+</div>
        </CountContainer>
    )
}

export default Count
            