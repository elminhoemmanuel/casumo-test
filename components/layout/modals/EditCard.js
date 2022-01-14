import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa"
import { singleList } from '../../../constants/dummy'
import PriBtn from '../../base/PriBtn'
import Card from '../../base/Card'
import PriBtnDisabled from '../../base/PriBtnDisabled'
import { useSelector, useDispatch } from 'react-redux'
import { toggleNew, toggleEdit } from "../../../redux/actions/cards"

const EditCard = () => {

    const [isDisabled, setIsDisabled,] = useState(true);
    const dispatch = useDispatch();
    const { card, showEdit } = useSelector((state) => state.cards);
    const [firstLoad, setFirstLoad,] = useState(true)

    // useEffect(() => {
    //     setDetails({ ...details,name:"James"})
    //     setFirstLoad(false)
    // }, [firstLoad])

    return (
        <div className="w-full h-screen z-30 absolute left-0 top-0 bg-black opacity-80 ">

            <div className="relative w-full h-screen bg-black ">
                <div className="absolute z-50 top-28 left-0 bg-white rounded-t-2xl px-6 md:px-10 pt-4 pb-6 text-casdark w-full ">
                    <div className="mb-7 flex justify-end">
                        <div>
                            <button onClick={() => dispatch(toggleEdit())} className="focus:outline-none">
                                <FaTimes className="text-casdark h-6 w-6" />
                            </button>
                        </div>
                    </div>

                    <div>
                        <h1 className="text-2xl font-bold mb-6">Edit your card </h1>

                        <Card card={card} />

                        <form>
                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="name">Name in card</label>
                                </div>

                                <div>
                                    <input
                                        name="name"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="mb-7">
                                <div className="">
                                    <label className="text-base" htmlFor="cardNumber">Card Number</label>
                                </div>

                                <div>
                                    <input
                                        name="cardNumber"
                                        className="w-full block focus:outline-none border-b border-casash py-2 pr-3 text-casash2 placeholder-casash"
                                        placeholder="0000 0000 0000 0000"
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

export default EditCard
