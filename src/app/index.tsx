import { Routing } from 'pages'
import { withProviders } from './providers'
import './index.css'

const App = () => {
    return (
        <div className="app">
            {' '}
            <Routing />
        </div>
    )
}

// +1 кари ( curry ) c помощью import compose from 'compose-function'
export default withProviders(App)
