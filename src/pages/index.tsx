//  https://stackoverflow.com/questions/69828516/you-cannot-render-a-router-inside-another-router-you-should-never-have-more
import React from 'react'
import { lazy } from 'react'
import { Routes as Switch, Route } from 'react-router-dom'

const TestPage = lazy(() => import('./test/index'))
const NotFound404 = lazy(() => import('./404/index'))

export const Routing = () => {
    return (
        <Switch>
            <Route path="/s4e" element={<TestPage />} />
            <Route path="*" element={<NotFound404 />} />
        </Switch>
    )
}
