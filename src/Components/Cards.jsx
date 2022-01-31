import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Cards = () => {
    const [cardData, setCardData] = useState([])

    const loadData = async () => {
        try {
            const response = await axios.get('https://api-modda-brian.herokuapp.com/products')
            setCardData(response.data)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        loadData()
    }, [])
    return (
        <>
            <main>
                <section className="container">
                    <div className="row justify-content-center">
                        {cardData.map((item) => (
                            <Card {...item} key={item._id} />
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Cards;
