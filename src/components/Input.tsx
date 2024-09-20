import "./compStyle/Input.css"
export default function Input(props: {type: string, pholder: string, min:number, max:number}){
    return(
        <div className="">
            <label htmlFor="dates" className="label font-bold">{props.type}</label>
            <input className="box-border w-full " name="dates" type="number" placeholder={props.pholder}
            min={props.min} max={props.max}/>
        </div>
    )
}