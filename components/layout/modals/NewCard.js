import React, { useState, useEffect } from 'react'
import { FaTimes } from "react-icons/fa"
import PriBtn from '../../base/PriBtn'
import PriBtnDisabled from '../../base/PriBtnDisabled'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNew, toggleEdit, addCard } from "../../../redux/actions/cards"

const NewCard = () => {

    let typesNumber = 2
    let types = ["mastercard", "visa"]
    let random = Math.floor(Math.random() * typesNumber)
    const [isDisabled, setIsDisabled,] = useState(true)
    const [name, setName,] = useState("")
    const [changed, setChanged,] = useState(0)
    const dispatch = useDispatch();
    const { showNew, showEdit } = useSelector((state) => state.cards);
    const [details, setDetails] = useState({ name: "", cardNumber: "", cvc: "", expiry: "", type: types[random] })
    const [errors, setErrors] = useState({ name: "", cardNumber: "", cvc: "", expiry: "" })
    const [touched, setTouched] = useState({ name: false, cardNumber: false, cvc: false, expiry: false })

    useEffect(() => {
        setDetails(prevDetails => ({ ...prevDetails, cardNumber: details.cardNumber }));
        if (touched.cardNumber) {
            validateCardNumber()
        }
        if (touched.expiry) {
            validateExpiry()
        }
        if (touched.cvc) {
            validateCVC()
        }
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
        setDetails(prevDetails => ({ ...prevDetails, name: details.name }));
        if (touched.name) {
            validateName()
        }
    }, [details.name])

    function handleChange(evt) {
        const value = evt.target.value;
        setDetails({
            ...details,
            [evt.target.name]: value
        });
        setTouched({
            ...touched,
            [evt.target.name]: true
        });


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
        if (typeof details.name[0] === "string") {
            setErrors({ ...errors, name: "none" })
        } else {

            setErrors({ ...errors, name: "Please enter your name" })
        }
    }

    const validateCardNumber = () => {
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let first = 0
        if (details.cardNumber.length === 19) {
        } else {
            first = first + 1
        }

        let second = 0
        for (let i = 0; i < details.cardNumber.length; i++) {
            if (nums.includes(Number(details.cardNumber[i]))) {
            } else {
                second = second + 1
            }
        }

        first === 0 && second === 0 ? setErrors({ ...errors, cardNumber: "none" }) : setErrors({ ...errors, cardNumber: "Please enter a valid credit card number" })
    }

    const validateExpiry = () => {
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "/"]
        let first = 0
        if (details.expiry.length === 5) {
        } else {
            first = first + 1
        }

        let second = 0
        for (let i = 0; i < details.expiry.length; i++) {
            if (nums.includes(Number(details.expiry[i])) || nums.includes((details.expiry[i]))) {
            } else {
                second = second + 1
            }
        }

        let third = 0
        if (Number(`${details.expiry[0]}${details.expiry[1]}`) > 12 || Number(`${details.expiry[0]}${details.expiry[1]}`) < 1) {
            third = third + 1
        }

        first === 0 && second === 0 && third === 0 ? setErrors({ ...errors, expiry: "none" }) : setErrors({ ...errors, expiry: "Please enter a valid expiry date" })
    }

    const validateCVC = () => {
        let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        let first = 0
        if (details.cvc.length === 3) {
        } else {
            first = first + 1
        }

        let second = 0
        for (let i = 0; i < details.cvc.length; i++) {
            if (nums.includes(Number(details.cvc[i]))) {
            } else {
                second = second + 1
            }
        }

        first === 0 && second === 0 ? setErrors({ ...errors, cvc: "none" }) : setErrors({ ...errors, cvc: "Please enter a valid security code" })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addCard(details));

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

                        <form onSubmit={handleSubmit}>
                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="name">Name in card</label>
                                </div>

                                <div className='relative'>
                                    <input
                                        value={details.name}
                                        onChange={(e) => { handleChange(e); }}
                                        name="name"
                                        className={`w-full block focus:outline-none border-b 
                                        ${errors.name === "" ? "border-casash text-casash2" : errors.name === "none" ? "border-casgreen text-casgreen" : "border-casred text-casred"} py-2 pr-3 placeholder-casash`}
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

                                <div className='relative'>
                                    <input
                                        value={details.cardNumber}
                                        onChange={(e) => { handleChange(e); setChanged(changed + 1); }}
                                        name="cardNumber"
                                        className={`w-full block focus:outline-none border-b 
                                        ${errors.cardNumber === "" ? "border-casash text-casash2" : errors.cardNumber === "none" ? "border-casgreen text-casgreen" : "border-casred text-casred"} py-2 pr-3  placeholder-casash`}
                                        placeholder="0000 0000 0000 0000"
                                        type="text"
                                        maxLength="19"
                                    />
                                    {errors.cardNumber !== "" && errors.cardNumber !== "none" && <img className='absolute top-2 right-0' src="/images/form-error.svg" alt="form error icon" />}
                                    {errors.cardNumber === "none" && <img className='absolute top-3 right-0' src="/images/form-success.svg" alt="form success icon" />}
                                </div>
                                {errors.cardNumber !== "" && errors.cardNumber !== "none" && <p className='text-xs text-casred mt-1'>Please enter a valid credit card number</p>}
                            </div>

                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="expiry">Expiry Date</label>
                                </div>

                                <div className="relative">
                                    <input
                                        value={details.expiry}
                                        onChange={(e) => { handleChange(e); setChanged(changed + 1); }}
                                        name="expiry"
                                        className={`w-full block focus:outline-none border-b 
                                        ${errors.expiry === "" ? "border-casash text-casash2" : errors.expiry === "none" ? "border-casgreen text-casgreen" : "border-casred text-casred"} py-2 pr-3  placeholder-casash`}
                                        placeholder="00/00"
                                        maxLength="5"
                                    />
                                    {errors.expiry !== "" && errors.expiry !== "none" && <img className='absolute top-2 right-0' src="/images/form-error.svg" alt="form error icon" />}
                                    {errors.expiry === "none" && <img className='absolute top-3 right-0' src="/images/form-success.svg" alt="form success icon" />}
                                </div>
                                {errors.expiry !== "" && errors.expiry !== "none" && <p className='text-xs text-casred mt-1'>Please enter a valid credit card number</p>}
                            </div>

                            <div className="mb-8">
                                <div className="">
                                    <label className="text-base" htmlFor="cvc">CVC (Security code)</label>
                                </div>

                                <div className="relative">
                                    <input
                                        value={details.cvc}
                                        onChange={(e) => { handleChange(e); setChanged(changed + 1); }}
                                        name="cvc"
                                        className={`w-full block focus:outline-none border-b 
                                        ${errors.cvc === "" ? "border-casash text-casash2" : errors.cvc === "none" ? "border-casgreen text-casgreen" : "border-casred text-casred"} py-2 pr-3  placeholder-casash`}
                                        placeholder="000"
                                        maxLength="3"
                                    />
                                    {errors.cvc !== "" && errors.cvc !== "none" && <img className='absolute top-2 right-0' src="/images/form-error.svg" alt="form error icon" />}
                                    {errors.cvc === "none" && <img className='absolute top-3 right-0' src="/images/form-success.svg" alt="form success icon" />}
                                </div>
                                {errors.cvc !== "" && errors.cvc !== "none" && <p className='text-xs text-casred mt-1'>Please enter a valid security code</p>}
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
