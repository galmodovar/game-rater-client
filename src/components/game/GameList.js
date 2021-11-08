import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { getGames } from "./GameManager.js"

export const GameList = (props) => {
    const [ games, setGames ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getGames().then(data => setGames(data))
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                    }}>Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <div className="game__title"><Link to={`games/${game.id}`}> {game.title}</Link> </div>
                    </section>
                })
            }
        </article>
    )
}