import { useDebugValue } from "react"

function InputEmail(){
    return(
        <>
            <label htmlFor="email" >E-mail</label>
            <input type="email" value="" placeholder="Digite um email" onChange={()=>{}} />
        </>
    )
}

export default InputEmail;