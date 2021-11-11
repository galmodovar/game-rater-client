import React, { useEffect, useState } from "react"
import { useParams, useHistory } from "react-router-dom"
import { ReviewList } from "./Review"
import { createRating } from "./GameManager"


export const GameDetails = (props) => {
    const [ game, setGames ] = useState({})
    const [rating, setRating] = useState([])
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

    const addRating = () => {

        const newRating = {
            gameId:  parseInt(gameId),
            rating: parseInt(rating),
        }

        createRating(newRating).then(history.push(`/games/${gameId}`))
    }

    

    return (
        <>
        <article className="games">
            
                    <section key={`game--${game.id}`} className="game">
                        <div className="game__title">{game.title} by {game.designer} in {game.year_released}</div>
                        <div className="game__skillLevel">Number of players: {game.num_of_players}</div>
                        <div className="game__estTime">Time to play: {game.est_time_to_play}</div>
                        <div className="game__ageRec">For ages: {game.recommended_age} and up!</div>
                        <div class="slidecontainer">
                            <input type="range" min="1" max="10" value={rating} class="slider" onChange={(e) =>setRating(e.target.value)}></input>
                        </div>
                        <button type="submit" onClick={evt => {
                            // Prevent form from being submitted
                            evt.preventDefault()
                            // Send POST request to your API
                            addRating(rating)
                        }}
                className="btn btn-primary">Create</button>
                        <div className="game__rating">Avg Rating: {game.average_rating} </div>
 
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