import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState, useEffect } from 'react'
import CardsList from '../components/layout/CardsList'
import { dummyCards } from "../constants/dummy"
import PriBtn from '../components/base/PriBtn'
import NewCard from '../components/layout/modals/NewCard'
import EditCard from '../components/layout/modals/EditCard'
import { toggleNew, toggleEdit } from '../redux/actions/cards'


export default function Home() {

    const [cardsList, setCardsList] = useState(dummyCards);
    const dispatch = useDispatch();
    const { showNew, showEdit } = useSelector((state) => state.cards);

    return (
        <>
            <Head>
                <title>Casumo</title>
                <meta name="keywords" content="Casumo, Manage all your cards in one place" />
            </Head>

            <div className="h-full text-casash3 2xl:max-w-screen-2xl 2xl:mx-auto">

                <div className="w-full md:w-3/5 lg:w-1/3 mx-auto relative pt-4 md:pt-10 pb-12 px-6 md:px-8">
                    <h1 className="text-caspurple1 text-3xl font-bold mb-2">Your Cards</h1>
                    <p className="mb-10">Add, edit or delete your cards any time</p>

                    {
                        showNew || showEdit ? "" :
                        <div>
                            <CardsList cards={cardsList} />
                            <div className="mt-10">
                                <PriBtn
                                    btnText="Add new card"
                                    btnType="button"
                                    clicked={() => { dispatch(toggleNew()) }}
                                    addStyle="py-5 px-3 w-full block"

                                />
                            </div>
                        </div>
                    }

                    {/* Modals */}
                    { showNew && <NewCard />}
                    { showEdit && <EditCard />}

                </div>
            </div>
        </>
    )
}
