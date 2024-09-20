export default function Calc(props: {num: string, time: string}){
    return(
        <div className="calc text-2xl">
            <h1 className="font-bold"><span className="text-purple-800">{props.num}</span> {props.time}</h1>
        </div>
    )
}