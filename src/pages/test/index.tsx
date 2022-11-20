import { Text, Button, useMantineColorScheme, ActionIcon, createStyles, MantineNumberSize } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { useMediaQuery, useLocalStorage, useLogger } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
    container: {
        height: 100,
        backgroundColor: theme.colors.grey,

        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            backgroundColor: theme.colors.grey,
        },
    },
}))

const TestPage = () => {
    const { toggleColorScheme } = useMantineColorScheme()
    const { classes } = useStyles()

    // логика размеров
    let reSizePx: string
    let reSize: MantineNumberSize = 'xs'
    const extrasmallScreen = useMediaQuery('(min-width: 400px)')
    const smallScreen = useMediaQuery('(min-width: 600px)')
    const mediumScreen = useMediaQuery('(min-width: 900px)')
    const largeScreen = useMediaQuery('(min-width: 1200px)')
    const extralargeScreen = useMediaQuery('(min-width: 1440px)')

    switch (true) {
        case extralargeScreen:
            reSizePx = '128px'
            reSize = 'xl'
            break
        case largeScreen && !extralargeScreen:
            reSizePx = '96px'
            reSize = 'lg'
            break
        case mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '64px'
            reSize = 'md'
            break
        case smallScreen && !mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '32px'
            reSize = 'sm'
            break
        case extrasmallScreen && !smallScreen && !mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '16px'
            reSize = 'xs'
            break
        default:
            reSizePx = '16px'
            reSize = 'xs'
            break
    }

    useLogger('TestPage: ', ['reSize: ', reSize, reSizePx])
    const [curentTheme] = useLocalStorage({ key: 'color-scheme' })

    return (
        <div className={classes.container}>
            <ActionIcon
                size={reSize}
                variant="outline"
                color={curentTheme === 'dark' ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {curentTheme === 'dark' ? <IconSun size={reSizePx} /> : <IconMoonStars size={reSizePx} />}
            </ActionIcon>
            <Text size={reSize}>Test Page Mantine works well, but how to pass colorScheme dark || light ? </Text>
            <Button size={reSize} onClick={() => toggleColorScheme()}>
                Toggle
            </Button>
        </div>
    )
}

export default TestPage
