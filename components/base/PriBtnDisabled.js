import React from 'react'

const PriBtn = ({ btnType , btnText, addStyle, clicked, disabled }) => {

    return (
        <button onClick={clicked} type={btnType} 
        className={`pointer-events-none rounded-full bg-gray-200 hover:bg-gray-200 text-center text-base text-white ${addStyle} focus:outline-none whitespace-nowrap`}>
            {btnText}
        </button>
    )
}

export default PriBtn
