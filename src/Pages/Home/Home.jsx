import React, { useEffect, useState } from 'react';
import MatchesContainer from '../../Components/MatchesContainer/MatchesContainer';

const Home = () => {

    const [cards, setCards]= useState([]);
    useEffect(()=>{
        fetch('game.json')
        .then(res=> res.json())
        .then(data=>setCards(data))
    })

    return (
        <div>
            <MatchesContainer cards={cards} ></MatchesContainer>

        </div>
    );
};

export default Home;