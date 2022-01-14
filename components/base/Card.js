import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleEdit, setCard } from "../../redux/actions/cards"

const Card = ({ card }) => {

    const dispatch = useDispatch();
    const { showNew, showEdit } = useSelector((state) => state.cards);

    const showEditModal = (val) => {
        dispatch(setCard(val))
        dispatch(toggleEdit())
    }

    return (
        <div className={`h-48 w-full relative card mb-8 rounded-2xl text-white p-8 ${card.type} ${card.type === "mastercard" ? "bg-caspurple3" : "bg-casmint"}`}>

            <img
                className="card-bg h-full absolute top-0 right-0 rounded-2xl "
                src={`${card.type === "visa" ? "/images/background-visa.svg" : "/images/background-mastercard.svg"}`}
                alt={`${card.type} card background image`}
            />

            <div className="absolute w-full h-full top-0 left-0 p-6 z-20">
                <div className=" flex justify-between mb-8">
                    <div>
                        <img
                            className=""
                            src={`${card.type === "mastercard" ? "/images/mastercard-logo.svg" : "/images/visa-logo.svg"}`}
                            alt={`${card.type} card icon`}
                        />
                    </div>

                    <div className="flex justify-end">

                        <div>
                            <p className={`mb-2 text-xs text-right ${card.type === "visa" && "text-casash3"}`}>CVC</p>
                            <p className="font-semibold text-lg text-right">{card.cvc}</p>
                        </div>

                        <div>
                            <p className={`mb-2 ml-3 text-xs text-right ${card.type === "visa" && "text-casash3"}`}>EXPIRES</p>
                            <p className="font-semibold text-lg text-right">{card.expiry}</p>
                        </div>

                    </div>
                </div>

                <div>
                    <h3 className={`text-lg font-semibold mb-2`}>{card.name}</h3>
                    <div className="flex items-center justify-between">
                        <div><p className={`${card.type === "visa" && "text-casash3"}`}>{card.cardNumber}</p></div>
                        {
                            !showEdit && <div>
                                <button onClick={() => showEditModal(card)} className="focus:outline-none">
                                    <img className="text-white h-5 w-5" src="/images/edit-icon.svg" alt="edit icon" />
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Card
