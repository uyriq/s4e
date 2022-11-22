import { Text, Button, useMantineColorScheme } from '@mantine/core'
import { useLogger } from '@mantine/hooks'
import ArrowHand from '../../features/arrow-hand'
import useResizeLogic from '../../features/use-resize-logic'

const TestPage = () => {
    const { toggleColorScheme } = useMantineColorScheme()

    const { reSizePx, reSize } = useResizeLogic()

    useLogger('TestPage: ', ['reSize: ', reSize, reSizePx])

    return (
        <>
            <Text size={reSize}>Test Page Mantine works well, but how to pass colorScheme dark || light ? </Text>
            <Button size={reSize} onClick={() => toggleColorScheme()}>
                Toggle
            </Button>
            <ArrowHand arrowDeg={40} />
        </>
    )
}

export default TestPage
