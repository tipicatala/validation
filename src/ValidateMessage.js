import React from 'react'

function ValidateMessage(props){

    
    return(
        <p className='message'>{props.text()}</p>
    )
}

export default ValidateMessage;