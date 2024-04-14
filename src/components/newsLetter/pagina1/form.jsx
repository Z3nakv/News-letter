import { useEffect, useState } from "react";
import Spinner from "../spinner/spinner";

function FormData({ handleStatus }) {

    const [value, setValue] = useState('');
    const [alert, setAlert] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [spinner, setSpinner] = useState(false);

    function handleChange(e) {
        setValue(e.target.value.trim())
    }

    useEffect(() => {
        if(value !== ''){
            emailVerify()
        }
    },[value])

    function emailVerify() {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

        if(regex.test(value)){
            setAlert(false)
            setSubmit(true);
            return true;
        }else{
            setAlert(true)
            return false;
        }
    }

    function handleSubmit(e) {
        e.preventDefault();

        setSpinner(true);
        setAlert(false)

            setTimeout(() => {
                handleStatus();
                setValue('');
                setSpinner(false)
                setSubmit(false)
            },3000)

    }

    // console.log(spinner)
    // console.log(value)
    // console.log(alert)
    // console.log(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value))
    

    return (
        <form className="flex flex-col" onSubmit={ submit ? handleSubmit : null }>
            <div className="flex justify-between">
                <label className="font-bold text-sm mb-2" for="email" >Email address</label>
                {
                    alert 
                    ? <p className="font-bold text-sm mb-2 text-tomato">Email required</p> 
                    : null
                }
            </div>
            <input 
            className= {`border-solid border-2 p-4 rounded-md placeholder:text-lg mb-6 ${alert ? 'bg-lightTomato border-lightTomato' : ''} ${spinner ? 'select-none' : ''}`}
            type="email" 
            id="email" 
            placeholder="correo123@gmail.com"
            value={value}
            onChange={handleChange}
            />
            {
                spinner 
                ? <Spinner/>
                : null
            }
            <button className="bg-darkSlateGrey rounded-md p-4 text-lg text-white font-bold hover:bg-tomato hover:shadow-shadowCustom"
                    type={ submit ? 'submit' : 'button'}
            >Suscribe to monthly newsletter</button>
        </form>
    )
}

export default FormData;