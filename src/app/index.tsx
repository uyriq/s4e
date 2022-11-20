import { useState } from 'react'
import { Routing } from 'pages'
import { withProviders } from './providers'
import { AppShell, Navbar, Header } from '@mantine/core'

import CustomHeader from '../features/custom-header'

const App = () => {
    const [opened, setOpened] = useState(false)
    return (
        <AppShell header={<CustomHeader opened={opened} setOpened={setOpened} />}>
            {/* Your application here */}
            <Routing />
        </AppShell>
    )
}

export default withProviders(App)
