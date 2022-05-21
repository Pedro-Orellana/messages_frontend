import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { messsageListSelector, getMessageList } from "../reducers/MessageSlicer";


var messageList
var dispatch
const MessageList = () => {
    
    dispatch = useDispatch()
    messageList = useSelector(messsageListSelector)
    

    useEffect(()=>{
        dispatch(getMessageList())
    },[])

    
    return (<div className="row justify-content-center mt-5">

            {messageList.messageList.length? <DisplayMessageList/> : <NoMessageList/>}
    </div>)
}

const NoMessageList = () => {
    return (
        <div>
            <h3 className="row justify-content-center">
                There are no messages to display...
            </h3>
        </div>
    )
}

const DisplayMessageList = () => {
    return (
        <ul className="list-group list-group-flush">
            {messageList.messageList.map((message) => {
                return (
                    <li className="list-group-item mt-5" key={message._id}>
                        <div className = "card">
                            <div className= "card-header">
                                {message.first_name + ' ' + message.last_name}
                            </div>
                            <div className = "card-body">
                                <blockquote className = "blockquote mb-0">
                                    <p>{message.message}</p>
                                    <footer className = "blockquote-footer">Contact this person at: <cite title="Source Title">{message.email}</cite></footer>
                                </blockquote>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default MessageList