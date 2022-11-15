//  https://stackoverflow.com/questions/69828516/you-cannot-render-a-router-inside-another-router-you-should-never-have-more
import React from 'react'
import { lazy } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

const TestPage = lazy(() => import('./test/index'))

export const Routing = () => {
    return (
        <Switch>
            <Route path="/" element={<TestPage />} />
        </Switch>
    )
}
