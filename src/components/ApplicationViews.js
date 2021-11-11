import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameDetails } from "./game/GameDetails"
import { GameForm } from "./game/GameForm"
import { ReviewList } from "./game/Review"
import { ReviewForm } from "./game/ReviewForm"


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
            <Route exact path="/games/:gameId(\d+)/review">
                <ReviewForm />
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