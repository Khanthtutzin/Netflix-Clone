import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_datas from '../../assets/cards/Cards_data'

const TitleCard = ({title, category}) => {

  const cardsRef = useRef();

  const handlWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel',handlWheel);
  },[])

  return ( 

    <div className='titlecard'>
      <h2>{title ? title:"Popular on Netflix"}</h2>
      <div className="card-lists" ref={cardsRef}>
          {cards_datas.map((card,idx)=>{
            return <div className='card' key={idx}>
              <img src={card.image} alt="movie image" />
              <p>{card.name}</p>
            </div>
          })}
      </div>
    </div>

  )
}

export default TitleCard