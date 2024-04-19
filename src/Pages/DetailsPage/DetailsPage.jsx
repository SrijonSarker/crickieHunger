import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const DetailsPage = () => {
    const cards = useLoaderData();
    const { id } = useParams();
  
    console.log(cards);
    console.log(id);
    const card = cards.find(card => card.id === parseInt(id));

    console.log(card);
    const {team1, team2} = card;

    return (
        <div className=''>

            <div className='my-16 py-10 px-10 gap-5 mx-24 bg-white rounded-2xl h-[750px]' >

            <h2 className='text-2xl text-green-500 text-center font-semibold'>{team1}<span className='text-2xl font-semibold px-3'>𝓥𝓼</span>{team2}</h2>
            </div>
            
        </div>
    );
};

export default DetailsPage;