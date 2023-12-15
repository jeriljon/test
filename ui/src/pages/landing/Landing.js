import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import './Landing.css';

function LandingPage() {
    const [selectedCard, setSelectedCard] = useState(null);

    const cards = [
        { id: 1, title: "Card 1", content: "Content for Card 1", imageUrl: "../../images/digital-1.jpg" },
        { id: 2, title: "Card 2", content: "Content for Card 2", imageUrl: "../../images/digital-1.jpg" },
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    return (
        <div>
            <Header />
            <Banner />
            <div className="card-container">
                {cards.map(card => (
                    <Card key={card.id} onClick={() => handleCardClick(card)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={card.imageUrl}
                                alt={card.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
            {selectedCard && (
                <div className="selected-card-content">
                    <h3>{selectedCard.title}</h3>
                    <p>{selectedCard.content}</p>
                    <img src={selectedCard.imageUrl} alt={selectedCard.title} />
                </div>
            )}
            <Footer />
        </div>
    );
}

export default LandingPage;
