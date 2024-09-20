import Input from "./Input";
export default function Form(){
    return(
        <div className="flex">
            <Input type="Day" pholder="DD" min={1} max={31}/>
            <Input type="Month" pholder="MM" min={1} max={12}/>
            <Input type="Year" pholder="YYYY" min={1980} max={2024}/>
        </div>
    )
}