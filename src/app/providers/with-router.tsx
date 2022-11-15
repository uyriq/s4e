import { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// eslint-disable-next-line react/display-name
const withRouter = (element: () => React.ReactNode) => () =>
    (
        <Router>
            <Suspense fallback="Loading...">{element()}</Suspense>
        </Router>
    )

withRouter.displayName = 'withRouter'

export { withRouter }
