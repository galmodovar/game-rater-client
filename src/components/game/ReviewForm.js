import React, { useState, useEffect } from "react"
import { useHistory, useParams } from 'react-router-dom'
import { createReview, getReviews } from './GameManager.js'

export const ReviewForm = () => {
    const { gameId } = useParams()
    const history = useHistory()
    const [review, setReview] = useState("")
    const [game, setGame] = useState([])





    const addReview = () => {

        const newReview = {
            gameId:  parseInt(gameId),
            review: review,
            date: new Date().toISOString().slice(0,10)
        }

        createReview(newReview).then(history.push(`/games/${gameId}`))
    }




    return (
        <form className="gameForm">
            <h2 className="gameForm__title">Add your review</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review: </label>
                    <input type="text" name="review" required autoFocus className="form-control"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    // Send POST request to your API
                    addReview(review)
                }}
                className="btn btn-primary">Create</button>
        </form>
    )
}
