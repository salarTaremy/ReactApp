import React from 'react'
import InputMask from "react-input-mask"


const formatChars ={
    '1': '[1-1]',
    '2': '[0-1]',
    '3': '[3-4]',
    '8': '[0-3]',
    '9': '[0-9]',
    'a': '[A-Za-z]',
    '*': '[A-Za-z0-9]'
}


const DatePicker = (props) => {
    let val = Object.assign(33, props);  
    return (
        <InputMask
            mask="1399/29/89"
            maskChar=''
            //alwaysShowMask={false}
            formatChars={formatChars}
            value={props.value}
            className = {`${props.className}  text-success`}
            onChange={props.onChange}
            //newProps = {val}
        >
        </InputMask>
    )
}

export  default DatePicker