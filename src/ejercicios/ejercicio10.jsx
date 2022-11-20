import React,{useState} from 'react';

const cuadradoStyleBlack = {
  width : "255px",
  height : "255px",
  backgroundColor: "black",
  margin :"2px"
}

const cuadradoRga ={
    backgroundColor: "red"
}
const Ejercicio10 = () => {

    const [access, setAccess] = useState(false);

    const cuadradoStyleCursor = () =>{
   setAccess(true)
    
}
    const Cuadrado = ({cuadradoSyle}) =>{
        return(
            <div style={cuadradoSyle} onDoubleClick={cuadradoRga}>
            </div>
        )
    } 
    let cua;

    if(access){
        cua = <Cuadrado cuadradoSyle={cuadradoRga}></Cuadrado>
    }
    else{
        cua = <Cuadrado cuadradoSyle={cuadradoStyleBlack}></Cuadrado>

    }
    

    return (
        <div>
          {cua}
        </div>
    );
}

export default Ejercicio10;
