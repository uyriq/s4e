// главная

import { useState } from 'react'
import { Text, Button, useMantineColorScheme } from '@mantine/core'
import { useLogger } from '@mantine/hooks'
import NumberInputArrow from '../../features/number-input-arrow'
import ArrowHand from '../../features/arrow-hand'
import useResizeLogic from '../../features/use-resize-logic'

const TestPage = () => {
    const { toggleColorScheme } = useMantineColorScheme()
    const [arrowValue, setValue] = useState<number | undefined>(0)
    const { reSizePx, reSize } = useResizeLogic()

    function arrowOnchange(val: number) {
        return setValue((val || 0) % 10)
    }

    useLogger('TestPage: ', ['reSize: ', reSize, reSizePx])

    return (
        <>
            <Text size={reSize}>Test Page Mantine works well, but how to pass colorScheme dark || light ?</Text>

            <Button size={reSize} onClick={() => toggleColorScheme()}>
                Toggle
            </Button>

            <NumberInputArrow onChange={arrowOnchange} val={arrowValue} />

            <ArrowHand arrowDeg={(arrowValue || 0) * 36} />
        </>
    )
}

export default TestPage
