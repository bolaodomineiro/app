import { Btn } from "./GoogleStylesBtn"
import Google from "../../assets/images/google.png"

const GoogleBtn = () => {
    return (
        <Btn>
            <img src={Google} alt="google logo" />
            <p> Entrar com Google </p>
        </Btn>
    )
}

export default GoogleBtn