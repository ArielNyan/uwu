import "./compStyle/Input.css"
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type
export default function Input(props: {type: string, pholder: string, min:number, max:number, getter: Function}){
    const get = props.getter
    return(
        <div className="">
            <label htmlFor="dates" className="label font-bold">{props.type}</label>
            <input onChange={(e) => {get(e)}} className="box-border w-full " name="dates" type="number" placeholder={props.pholder}
            min={props.min} max={props.max}/>
        </div>
    )
}