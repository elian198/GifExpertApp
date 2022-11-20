import React, {useState} from 'react';


const LoginBoton = ({loginAction}) =>{
  return(
    <button onClick={loginAction} style={loginStyle}>Login</button>
  )
}

const LogoutBoton = ({logoutAction}) =>{
  return(
  <button onClick={logoutAction} style={logoutStyle}>Logout</button>
)}

const loginStyle= {
  backgroundColor : 'green',
  color : 'white'
}

const logoutStyle= {
    backgroundColor : 'red',
    color : 'white'
  }



//rfc
const OptionalRender = () => {

    const[access, setAccess]  = useState(false);
    const[message, setMessage] = useState(0);

    const loginAction = () =>{
        setAccess(false);

    }
    const logoutAction = () =>{
        setAccess(true);
    }
   
    const contador = () =>{
      setMessage(message +1);
    }
    
      let boton;
  
      if(access){
        boton = <LoginBoton loginAction={loginAction}></LoginBoton>
      }
      else{
        boton = <LogoutBoton logoutAction={logoutAction}></LogoutBoton>
      }
   
    return (
        <div>
         {boton}
         <button onClick={contador}>Message</button>
         {message > 0 && <p style={loginStyle}>There are {message} message</p>}
         {message === 0 && <p style={logoutStyle}>There are no new message</p>}
        </div>
    );
}

export default OptionalRender;
