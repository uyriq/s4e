import { useMantineColorScheme, ActionIcon, createStyles } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { useLocalStorage } from '@mantine/hooks'

import useResizeLogic from './use-resize-logic'

export default function ToggleThemeIcon() {
    const { toggleColorScheme } = useMantineColorScheme()
    const { reSizePx, reSize } = useResizeLogic()
    const [curentTheme] = useLocalStorage({ key: 'color-scheme' })

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

    const { classes } = useStyles()

    return (
        <div className={classes.container}>
            <ActionIcon
                size={reSize}
                variant="outline"
                color={curentTheme === 'dark' ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
                sx={{ marginBottom: -10 }}
            >
                {curentTheme === 'dark' ? <IconSun size={reSizePx} /> : <IconMoonStars size={reSizePx} />}
            </ActionIcon>
        </div>
    )
}
