// HOC-компонент
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'

// eslint-disable-next-line react/display-name
const withMantine = (element: () => React.ReactNode) => () => {
    const [colorScheme, setColorScheme] = useLocalStorage<'dark' | 'light'>({
        key: 'color-scheme',
        defaultValue: 'dark',
    })
    const toggleColorScheme = () => setColorScheme((current: string) => (current === 'dark' ? 'light' : 'dark'))

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
                {element()}
            </MantineProvider>
        </ColorSchemeProvider>
    )
}
withMantine.displayName = 'withMantine'

export { withMantine }

withMantine.displayName = 'withMantine'

function getDisplayName(WrappedComponent: { displayName: any; name: any }) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
