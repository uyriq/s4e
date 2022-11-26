// HOC-компонент
import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage, useColorScheme } from '@mantine/hooks'
import { CustomFonts } from '../../features/customFonts'

// eslint-disable-next-line react/display-name
const withMantine = (element: () => React.ReactNode) => () => {
    const preferredColorScheme = useColorScheme()
    const [colorScheme, setColorScheme] = useLocalStorage<'dark' | 'light'>({
        key: 'color-scheme',
        defaultValue: preferredColorScheme,
        getInitialValueInEffect: true,
    })
    const toggleColorScheme = () => setColorScheme((current: string) => (current === 'dark' ? 'light' : 'dark'))
    console.log({ preferredColorScheme })
    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    fontFamily: 'Tajawal, sans-serif',
                    colorScheme,
                    breakpoints: {
                        /*
                        Default theme.breakpoints values:
                        Breakpoint	Viewport width
                        xs	576px
                        sm	768px
                        md	992px
                        lg	1200px
                        xl	1400px
                        */
                        xs: 500,
                        sm: 800,
                        md: 1000,
                        lg: 1200,
                        xl: 1400,
                    },
                    colors: {
                        brand: [
                            '#ec2F4B', //
                            '#0a9af8',
                            '#989efb',
                            '#6171b5',
                            '#b771b5', //dark: ON HOVER
                            '#b791b5',
                            '#ec2F4B', // light: normal
                            '#ef4F49', // LIGHT: ON hover
                            '#009FFF', // dark: normal
                            '#0a9ad8', //dark: ON HOVER
                        ],
                    },
                    primaryColor: 'brand',
                }}
            >
                <CustomFonts />
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
