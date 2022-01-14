import React from 'react'
import Card from '../base/Card'

const CardsList = ({ cards }) => {

    return (
        <div className="">
            {
                cards.map(card => (
                    <Card key={card.cvc}
                        card={card}
                    />
                ))
            }
        </div>
    )
}

export default CardsList
