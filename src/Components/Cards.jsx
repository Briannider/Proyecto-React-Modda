import React from 'react'
import Card from './Card'

const Cards = () => {
    const [cardData, setCardData] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api-modda-brian.herokuapp.com/products')
                const data = await response.json()
                setCardData(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <main>
                <section className="container">
                    <div className="row justify-content-center">
                        {cardData.map(item => <Card {...item} key={item._id} />)}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Cards;

