import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa"
import PriBtn from '../../base/PriBtn'
import PriBtnDisabled from '../../base/PriBtnDisabled'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNew, toggleEdit } from "../../../redux/actions/cards"

const NewCard = () => {

    let typesNumber = 2
    let types = ["mastercard", "visa"]
    let random = Math.floor(Math.random() * typesNumber)
    const [isDisabled, setIsDisabled,] = useState(true)
    const dispatch = useDispatch();
    const { showNew, showEdit } = useSelector((state) => state.cards);
    const [details, setDetails] = useState({name:"", cardNumber:"", cvc:"", expiry:"", type:types[random]})

    // const handleCardNumber = (e) =>{
    //     let text = e.target.value
    //     let textArr = []
    //     for (let i = 0; i < text.length; i++) {
    //         console.log(i)
    //         textArr.push(text[i])
    //         if((i+1) % 4 === 0 && i+1 !== 16){
    //             textArr.push(" ")
    //         }
            
    //     }
    //     console.log(textArr)
        
    //     setDetails({
    //         ...details,
    //         cardNumber:textArr.join("")
    //     })
    // }

    return (
        <div className="w-full h-screen z-30 absolute left-0 top-0 bg-black opacity-80 ">

            <div className="relative w-full h-screen bg-black ">
                <div className="absolute z-50 top-28 left-0 bg-white rounded-t-2xl px-6 md:px-10 pt-4 pb-6 text-casdark w-full h-screen">
                    <div className="mb-7 flex justify-end">
                        <div>
                            <button onClick={()=>dispatch(toggleNew())} className="focus:outline-none">
                                <FaTimes className="text-casdark h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold mb-8">Add your card details</h1>

                        <form>
                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="name">Name in card</label>
                                </div>

                                <div>
                                    <input
                                        value={details.name}
                                        onChange={(e)=>{setDetails({...details,name:e.target.value})}}
                                        name="name"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </div>
                            </div>

                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="cardNumber">Card Number</label>
                                </div>

                                <div>
                                    <input
                                        value={details.cardNumber}
                                        // onChange={(e)=>{handleCardNumber(e)}}
                                        name="cardNumber"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="0000 0000 0000 0000"
                                        type="text"
                                        maxLength="19"
                                    />
                                </div>
                            </div>

                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="expiry">Expiry Date</label>
                                </div>

                                <div>
                                    <input
                                        name="expiry"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="00/00"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="">
                                    <label className="text-base" htmlFor="cvc">CVC (Security code)</label>
                                </div>

                                <div>
                                    <input
                                        name="cvc"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="000"
                                    />
                                </div>
                            </div>

                            <div className="mb-1">
                                {
                                    isDisabled ?
                                        <PriBtnDisabled
                                            btnText="Confirm"
                                            btnType="submit"
                                            clicked={() => { }}
                                            addStyle="py-5 px-3 w-full block focus:outline-none"
                                        /> :
                                        <PriBtn
                                            btnText="Confirm"
                                            btnType="submit"
                                            clicked={() => { }}
                                            addStyle="py-5 px-3 w-full block focus:outline-none"
                                        />
                                }


                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewCard
