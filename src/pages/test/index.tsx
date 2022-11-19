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

    // TODO логика размеров
    let reSize: MantineNumberSize = 'sm'
    const smallScreen = useMediaQuery('(max-width: 600px)')
    const mediumScreen = useMediaQuery('(max-width: 900px)')
    const largeScreen = useMediaQuery('(max-width:: 1200px)')
    const extralargeScreen = useMediaQuery('(min-width: 1240px)')
    reSize = smallScreen ? 'xs' : extralargeScreen ? 'xl' : largeScreen ? 'lg' : mediumScreen ? 'md' : 'sm'
    let reSizePx
    switch (reSize) {
        case 'xs':
            reSizePx = '16px'
            break
        case 'sm':
            reSizePx = '24px'
            break
        case 'md':
            reSizePx = '32px'
            break
        case 'lg':
            reSizePx = '48px'
            break
        case 'xl':
            reSizePx = '64px'
            break
        default:
            reSizePx = '16px'
            break
    }

    useLogger('TestPage: ', ['reSize: ', reSize, reSizePx])
    const [curentTheme] = useLocalStorage({ key: 'color-scheme' })

    return (
        <div className={classes.container}>
            <ActionIcon
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
