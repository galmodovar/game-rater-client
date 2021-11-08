import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
            </Route>
            <Route exact path="/games">
                <GameList/>
            </Route>
            <Route exact path="/events">
            </Route>
            <Route exact path="/games/new">
                <GameForm />
            </Route>
            <Route exact path="/games/:gameId(\d+)">
                <GameDetails />
            </Route>
        </main>
    </>
}