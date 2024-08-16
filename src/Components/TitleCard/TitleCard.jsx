import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_datas from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCard = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTM4NmM1MGM3ZDhiMDdlNTBkZDM1ODRiMzIxMTY5ZiIsIm5iZiI6MTcyMzc5NjAzNy4wOTE4OTgsInN1YiI6IjY2YmYwNTZkMjE3ZDRmOWU3ZjUwZWE4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QQynfjudLjXVH469xI1tHs-Gh2d807vBESilL4c1NI0'
    }
  };

  const handlWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handlWheel);
  },[])

  return ( 

    <div className='titlecard'>
      <h2>{title ? title:"Popular on Netflix"}</h2>
      <div className="card-lists" ref={cardsRef}>
          {apiData.map((card,idx)=>{
            return <Link to={`/player/${card.id}`} className='card' key={idx}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="movie_image" />
              <p>{card.original_title}</p>
            </Link>
          })}
      </div>
    </div>

  )
}

export default TitleCard