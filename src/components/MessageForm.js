import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { messageSelector, messageReducer, messageSubmittedReducer, postMessage } from "../reducers/MessageSlicer";
import { userInformationSelector } from "../reducers/GoogleSlicer";

var message
var dispatch
var userInfo

const MessageForm = () => {
     dispatch = useDispatch()
     message = useSelector(messageSelector)
     userInfo = useSelector(userInformationSelector)

    return (
        <div>
          {message.messageSubmitted? <SayThankYou/> : <ShowForm/>}
        </div>
    )
}

const SayThankYou = () => {
    return(
    <div>
        Thank you for your message!
    </div>
    )
}


const ShowForm = () => {
    return(
    <form className="mt-5" onSubmit={handleSubmit}>
    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Write your message here!</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" value= {message.message} onChange={(event)=>{dispatch(messageReducer(event.target.value))}}></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
    )
}


const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(messageSubmittedReducer(true))
    dispatch(postMessage({
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        message: message.message
    }))
    
}


export default MessageForm