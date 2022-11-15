import { MantineProvider } from '@mantine/core'

// eslint-disable-next-line react/display-name
const withMantine = (element: () => React.ReactNode) => () =>
    (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            {element()}
        </MantineProvider>
    )

withMantine.displayName = 'withMantine'

export { withMantine }
