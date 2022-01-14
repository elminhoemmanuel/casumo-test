import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle, clicked, disabled }) => {

    return (
        <button onClick={clicked} type={btnType} 
        className={`rounded-full bg-caspurple1 hover:bg-caspurple2 text-center text-base text-white ${addStyle} focus:outline-none whitespace-nowrap`}>
            {btnText}
        </button>
    )
}

export default PriBtn
