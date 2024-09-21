/* eslint-disable @typescript-eslint/no-explicit-any */
import "./compStyle/Card.css"
import Form from "./Form";
import Calc from "./Calc";
import { SetStateAction, useState } from "react";
//TODO FAZER A MATEMATICA

function Card(){
    const [mDay, setMDay] = useState()
    const [mMonth, setMMonth] = useState()
    const [mYear, setMYear] = useState()
    
    //const date = new Date()
    //const currDay = date.getDate()
    //const currMonth = date.getMonth()+1
    //const currYear = date.getFullYear()


    const [days, setDay] = useState("--")
    const [months, setMonths] = useState("--")
    const [years, setYears] = useState("--")

    const calculateTimePassed = (dia:any, mes:any, ano:any) => {
        if(dia > 30 || dia <= 0) return
        if(mes > 12 || mes <= 0) return
        if(ano <= 0) return
        const givenDate = new Date(ano, mes - 1, dia)
      

        const currentDate = new Date()
      

        let years = currentDate.getFullYear() - givenDate.getFullYear()
      

        let months = currentDate.getMonth() - givenDate.getMonth()
      

        let days = currentDate.getDate() - givenDate.getDate()
      

        if (days < 0) {
          months--;
          const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0)
          days += previousMonth.getDate()
        }
      
        if (months < 0) {
          years--;
          months += 12;
        }
        setDay(`${days}`)
        setMonths(`${months}`)
        setYears(`${years}`)
        //console.log(`${days} ${months} ${years}`)
      }
    
    return(
        <div className="card sm:max-w-xs flex flex-col p-3 bg-white content-center justify-center">
            <Form getDay={(e: { target: { value: SetStateAction<undefined>; }; })=>{setMDay(e.target.value)}} getMonth={(e: { target: { value: SetStateAction<undefined>; }; })=>{setMMonth(e.target.value)}} getYear={(e: { target: { value: SetStateAction<undefined>; }; })=>{setMYear(e.target.value)}}/>
            <div className="btn-container flex w-full justify-center my-4">
                <button onClick={()=>{calculateTimePassed(mDay, mMonth, mYear)}} className="btn p-3 rounded-3xl bg-purple-700 hover:bg-purple-800">
                    <img src="src/assets/icon-arrow.svg" alt="" />
                </button>
            </div>
            <div className="justify-center flex-col content-center">
                <Calc num={years} time="years"/>
                <Calc num={months} time="months"/>
                <Calc num={days} time="days"/>
            </div>
        </div>
        
    );
}
export default Card