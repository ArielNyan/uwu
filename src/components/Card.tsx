import "./compStyle/Card.css"
import Form from "./Form";
import Calc from "./Calc";
import { useState } from "react";
//TODO FAZER A MATEMATICA
function Card(){
    const [num, setNum] = useState("--")
    return(
        <div className="card sm:max-w-xs flex flex-col p-3 bg-white content-center justify-center">
            <Form />
            <div className="btn-container flex w-full justify-center my-4">
                <button className="btn p-3 rounded-3xl bg-purple-700 hover:bg-purple-800">
                    <img src="src/assets/icon-arrow.svg" alt="" />
                </button>
            </div>
            <div className="justify-center flex-col content-center">
                <Calc num={num} time="years"/>
                <Calc num={num} time="months"/>
                <Calc num={num} time="days"/>
            </div>
        </div>
        
    );
}
export default Card