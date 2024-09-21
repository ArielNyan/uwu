import Input from "./Input";
// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function Form(props: {getDay: Function, getMonth: Function, getYear: Function}){
    return(
        <div className="flex">
            <Input getter={props.getDay} type="Day" pholder="DD" min={1} max={31}/>
            <Input getter={props.getMonth} type="Month" pholder="MM" min={1} max={12}/>
            <Input getter={props.getYear} type="Year" pholder="YYYY" min={1980} max={2024}/>
        </div>
    )
}