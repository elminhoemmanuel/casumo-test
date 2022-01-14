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
    const [touchedName, setTouchedName,] = useState(false)
    const [changed, setChanged,] = useState(0)
    const dispatch = useDispatch();
    const { showNew, showEdit } = useSelector((state) => state.cards);
    const [details, setDetails] = useState({ name: "", cardNumber: "", cvc: "", expiry: "", type: types[random] })
    const [errors, setErrors] = useState({ name: "", cardNumber: "", cvc: "", expiry: "" })
    const [touched, setTouched] = useState({ name: false, cardNumber: false, cvc: false, expiry: false })

    useEffect(() => {
        handleCardNumber(details)
    }, [changed])

    useEffect(() => {
        if (details.name.length === 0 || details.cardNumber.length === 0 || details.expiry.length === 0 || details.cvc.length === 0) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [details])

    useEffect(() => {
        validateName()
    }, [touchedName])

    function handleChange(evt) {
        const value = evt.target.value;
        setDetails({
            ...details,
            [evt.target.name]: value
        });
        // setTouched({
        //     ...touched,
        //     [evt.target.name]: true
        // });

    }

    const cardNumHelper = (dets, val) => {
        if (dets.cardNumber.length === val) {
            let arr = dets.cardNumber.split("")
            arr.splice(val - 1, 1);
            setDetails({ ...dets, cardNumber: arr.join("") })
        }
    }

    const cardExpHelper = (dets, val) => {
        if (dets.expiry.length === val) {
            let arr = dets.expiry.split("")
            arr.splice(val - 1, 1);
            setDetails({ ...dets, expiry: arr.join("") })
        }
    }


    const handleCardNumber = (dets) => {
        if (dets.cardNumber.length === 4 || dets.cardNumber.length === 9 || dets.cardNumber.length === 14) {
            setDetails({ ...dets, cardNumber: dets.cardNumber + " " })
        }
        cardNumHelper(dets, 15);
        cardNumHelper(dets, 10);
        cardNumHelper(dets, 5);

        if (dets.expiry.length === 2) {
            setDetails({ ...dets, expiry: dets.expiry + "/" })
        }
        cardExpHelper(dets, 3);

    }

    const validateName = () => {
        console.log(details.name.length)
        if (details.name.length === 0) {
            setErrors({ ...errors, name: "Please enter your name" })
        } else {
            setErrors({ ...errors, name: "none" })
        }
    }

    return (
        <div className="w-full h-screen z-30 absolute left-0 top-0 bg-black opacity-80 ">

            <div className="relative w-full h-screen bg-black ">
                <div className="absolute z-50 top-28 left-0 bg-white rounded-t-2xl px-6 md:px-10 pt-4 pb-6 text-casdark w-full h-screen">
                    <div className="mb-7 flex justify-end">
                        <div>
                            <button onClick={() => dispatch(toggleNew())} className="focus:outline-none">
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

                                <div className='relative'>
                                    <input
                                        value={details.name}
                                        onChange={(e) => { handleChange(e); }}
                                        name="name"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                    {errors.name !== "" && errors.name !== "none" && <img className='absolute top-2 right-0' src="/images/form-error.svg" alt="form error icon" />}
                                    {errors.name === "none" && <img className='absolute top-3 right-0' src="/images/form-success.svg" alt="form success icon" />}
                                </div>

                                {errors.name !== "" && errors.name !== "none" && <p className='text-xs text-casred mt-1'>Please fill in your name</p>}
                            </div>

                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="cardNumber">Card Number</label>
                                </div>

                                <div>
                                    <input
                                        value={details.cardNumber}
                                        onChange={(e) => { handleChange(e); setChanged(changed + 1); }}
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
                                        value={details.expiry}
                                        onChange={(e) => { handleChange(e); setChanged(changed + 1); }}
                                        name="expiry"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="00/00"
                                        maxLength="5"
                                    />
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="">
                                    <label className="text-base" htmlFor="cvc">CVC (Security code)</label>
                                </div>

                                <div>
                                    <input
                                        value={details.cvc}
                                        onChange={(e) => { handleChange(e);setChanged(changed + 1); }}
                                        name="cvc"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="000"
                                        maxLength="3"
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
