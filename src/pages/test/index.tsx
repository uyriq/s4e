import { Text, Button, useMantineColorScheme, createStyles } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
    container: {
        height: 100,
        backgroundColor: theme.colors.blue[6],

        // Media query with value from theme
        [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
            backgroundColor: theme.colors.blue[6],
        },
    },
}))

const TestPage = () => {
    const { toggleColorScheme } = useMantineColorScheme()
    const { classes } = useStyles()
    const largeScreen = useMediaQuery('(min-width: 900px)')
    return (
        <div className={classes.container}>
            <Text>Test Page Mantine works well, but how to pass colorScheme dark || light ? </Text>
            <Button onClick={() => toggleColorScheme()}>Toggle</Button>
        </div>
    )
}

export default TestPage
