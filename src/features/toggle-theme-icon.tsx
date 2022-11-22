import { useMantineColorScheme, ActionIcon, createStyles } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons'
import { useLocalStorage } from '@mantine/hooks'

import useResizeLogic from './use-resize-logic'

export default function ToggleThemeIcon({ ...leftOver }) {
    const { toggleColorScheme } = useMantineColorScheme()
    const { reSizePx, reSize } = useResizeLogic()
    const [curentTheme] = useLocalStorage({ key: 'color-scheme' })

    const useStyles = createStyles((theme) => ({
        container: {
            accentColor: 'cyan',
        },
    }))

    const { classes } = useStyles()

    return (
        <div className={classes.container}>
            <ActionIcon
                {...leftOver}
                size={reSize}
                variant="outline"
                color={curentTheme === 'dark' ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title="Toggle color scheme"
            >
                {curentTheme === 'dark' ? <IconSun size={reSizePx} /> : <IconMoonStars size={reSizePx} />}
            </ActionIcon>
        </div>
    )
}
