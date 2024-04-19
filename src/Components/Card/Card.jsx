import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({card}) => {

    const {id,team1,type, team2, status, venue, date, time, format}=card;
    return (
       <Link to={`/details/${id}`}>
        <div className='bg-violet-100 p-3 m-3 rounded-xl'>
            <h2 className='text-lg text-green-500 font-semibold'>{team1} <span className='text-2xl font-semibold px-3'>𝓥𝓼</span> {team2}</h2>
            <h2><span className=' font-semibold'>Format :</span> {format}</h2>
            <h2><span className=' font-semibold'>Venue :</span>  {venue}</h2>
            <h2><span className=' font-semibold'></span>{date}, {time}</h2>
        </div>
        </Link>
    );
};

export default Card;