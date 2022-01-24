import React from 'react';
import Card from './Card';

const Cards = () => {
    const data = [
        {
            id: 0,
            src: "./img/Card1.png",
            alt: "Blusa rosada",
            name: "Buzo rosa",
            description: "Que mejor que el otoño junto a este buzo rosado abrigado y con estilo. Disfruta a la Modda junto a nuestra colección de otoño, la mayor comodidad y calidad.",
        },
        {
            id: 1,
            src: "img/Card2.png",
            alt: "Remera Negra",
            name: "Remera Negra",
            description: "Que mejor que el otoño junto a este buzo rosado abrigado y con estilo. Disfruta a la Modda junto a nuestra colección de otoño, la mayor comodidad y calidad.",
        },
        {
            id: 2,
            src: "./img/Card3.png",
            alt: "Buzo Blanco",
            name: "Buzo Blanco",
            description: "Que mejor que el otoño junto a este buzo rosado abrigado y con estilo. Disfruta a la Modda junto a nuestra colección de otoño, la mayor comodidad y calidad.",
        },
        {
            id: 3,
            src: "./img/Card4.png",
            alt: "Remera -Your design- Negra",
            name: "Remera -Your design- Negra",
            description: "Que mejor que el otoño junto a este buzo rosado abrigado y con estilo. Disfruta a la Modda junto a nuestra colección de otoño, la mayor comodidad y calidad.",
        },
    ]
    return (
        <>
            <main>
                <section className="container">
                    <div className="row justify-content-center">
                        {data.map(({ id, name, alt, src, description }) => {
                            return (
                                <div className="card col-2 p-0 col-xs-6 col-sm-6 col-md-4 col-lg-4">
                                    <Card
                                        key={id}
                                        id={id}
                                        name={name}
                                        img={src}
                                        alt={alt}
                                        description={description}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </>
    )
};

export default Cards;
