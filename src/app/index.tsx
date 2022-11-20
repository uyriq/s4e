import { useState } from 'react'
import { Routing } from 'pages'
import { withProviders } from './providers'
import { AppShell } from '@mantine/core'

import AppHeader from '../features/app-header'

const App = () => {
    const [opened, setOpened] = useState(false)
    return (
        <AppShell header={<AppHeader opened={opened} setOpened={setOpened} />}>
            {/* Your application here */}
            <Routing />
        </AppShell>
    )
}

export default withProviders(App)
