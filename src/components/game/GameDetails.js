import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { ReviewList } from "./Review"


export const GameDetails = (props) => {
    const [ game, setGames ] = useState({})
    const { gameId } = useParams()
    const history = useHistory()

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
                    <section>
                        <div><ReviewList/></div>
                        <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: `/games/${gameId}/review` })
                    }}>Add New Review</button>
                    </section>
                
            
        </article>
        </>
    )
}