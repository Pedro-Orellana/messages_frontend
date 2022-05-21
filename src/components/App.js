import React from "react";
import { useSelector } from "react-redux";
import { isSignedInSelector } from "../reducers/GoogleSlicer";
import {useRef, useEffect} from 'react'
import MessageForm from './MessageForm'


var googleButton;
var isSignedIn
const App = () => {

googleButton = useRef()


useEffect(()=>{
    if(!isSignedIn){
    window.google.accounts.id.renderButton(googleButton.current, {theme : 'outline'})
}
},[])
    

    isSignedIn = useSelector(isSignedInSelector)



    return(<div >
       <h2 className="row justify-content-center mt-5">Welcome to the Messages App!</h2>
       <div className="row">
           {isSignedIn? <OnSignedIn/> : <NotSignedIn/> }
       </div>
    </div>)
}


const NotSignedIn = () => {
    
    
    return (
        <div className ="mt-5">
            <p align = "center"> Please sign in to use the app...
            </p>
            <br/>
                <div  align = "center" ref = {googleButton} >
            
                </div>
            
        </div>
    )
}

const OnSignedIn = () => {
    return (
        <div>
            <p align = "center"> User is succesfully signed in!
            </p>
            <MessageForm/>
        </div>
    )
}



export default App