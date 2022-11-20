import { useState } from "react"

export const AddCategories = ( { onNewCategory } ) =>{

    const [inputValue, setInput] = useState('');

    const onChange = ({target }) =>{
     setInput(target.value);
     console.log(target.value);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim.length> 0) return;
            setInput('');
            onNewCategory( inputValue);
        }
       const inputStyle={
        width : "80%",
        height : "1.5rem",
        fontSize : "1.5rem",
       }
       
    
    return(
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="escriba algo"
                value={inputValue}
                onChange={onChange}
                style={ inputStyle }
            />
        </form>
    )
}