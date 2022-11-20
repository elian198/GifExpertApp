import React,{ useState } from 'react';
import { AddCategories } from '../components/AddCategories';
import { GIfGrid } from '../components/GifGrid';
 
const Titulo = () =>{
    return(
        <>
            <h1>GifExpert</h1>
        </>
    )
}
const Ejercicio3 = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const addCategories = (newCategory) =>{

        if(categories.includes(newCategory)) return;

        setCategories([newCategory , ...categories]);
    }

    return (
        <>
            <Titulo></Titulo>
             <AddCategories onNewCategory={(value) => addCategories(value)}></AddCategories>
        
        {
                categories.map( (category) =>(
                   <GIfGrid
                    key={category}
                    category={category}
                   />
                
                ))
          
        }
        </>
    );
}

export default Ejercicio3;
