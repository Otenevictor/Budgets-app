import { useState } from "react"
import InputShortner from "./InputShortner"
import LinkResult from "./LinkResult"

const ResultShort = () => {
    const [inputValue, setInputValue] = useState("");
  return (

    <div className="container">
    <InputShortner setInputValue={setInputValue}/>
    < LinkResult inputValue={inputValue} />
    </div>
    
  )
}

export default ResultShort