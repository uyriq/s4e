import { useState } from 'react'
import { Routing } from 'pages'
import { withProviders } from './providers'
import { AppShell, useMantineTheme } from '@mantine/core'

import AppHeeader from '../entities/app-header'
import AppFooter from '../entities/app-footer'

const App = () => {
    const theme = useMantineTheme()
    const [opened, setOpened] = useState(false)
    return (
        <AppShell
            styles={{}}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            footer={<AppFooter />}
            header={<AppHeeader />}
        >
            <Routing />
        </AppShell>
    )
}

export default withProviders(App)
