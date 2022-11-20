import {
    Text,
    Button,
    useMantineColorScheme,
    ActionIcon,
    createStyles,
    MantineNumberSize,
    MantineSizes,
} from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { useMediaQuery, useLocalStorage, useLogger } from '@mantine/hooks'

import useResizeLogic from '../../features/use-resize-logic'

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
    const { reSizePx, reSize } = useResizeLogic()

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
