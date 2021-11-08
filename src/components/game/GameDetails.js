import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const GameDetails = (props) => {
    const [ game, setGames ] = useState({})
    const { gameId } = useParams()

    useEffect(
        () => {
            fetch(`http://localhost:8000/games/${gameId}`, {
                headers:{
                    "Authorization": `Token ${localStorage.getItem("lu_token")}`
                }
            })
                .then(res => res.json())
                .then((data) => {
                    setGames(data)
                })
        },
        [ gameId ]  // Above function runs when the value of gameId change
    )

    return (
        <>
        <article className="games">
            
                    <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.designer} in {game.year_released}</div>
                        <div className="game__skillLevel">Number of players: {game.num_of_players}</div>
                        <div className="game__estTime">Time to play: {game.est_time_to_play}</div>
                        <div className="game__ageRec">For ages: {game.recommended_age} and up!</div>
                    </section>
                
            
        </article>
        </>
    )
}