import React, { useEffect, useState } from "react"
import { Link, useHistory, useParams } from "react-router-dom"
import { getGameById } from "./GameManager.js"

export const ReviewList = (props) => {
    const [ game, setGame ] = useState([])
    const history = useHistory()
    const { gameId } = useParams()


    useEffect(() => {
        getGameById(gameId).then(data => setGame(data))
    }, [gameId])

    return (
        <article className="reviews">
            {
                game.reviews?.map(review => {
                    return <section key={`review--${review.id}`} className="review">
                        <div className="review__title"><Link to={`reviews/${review.id}`}> {review.review}</Link> </div>
                    </section>
                })
            }
        </article>
    )
}