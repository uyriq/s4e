import { Text, Button, useMantineColorScheme } from '@mantine/core'

const TestPage = () => {
    const { toggleColorScheme } = useMantineColorScheme()

    return (
        <>
            <Text>Test Page Mantine works well, but how to pass colorScheme dark || light ? </Text>
            <Button onClick={() => toggleColorScheme()}>Toggle</Button>
        </>
    )
}

export default TestPage
