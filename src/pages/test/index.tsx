// главная

import { useState, useEffect } from 'react'
import InputMask from 'react-input-mask-next'
import {
    Affix,
    Text,
    Switch,
    Group,
    useMantineTheme,
    InputBase,
    SimpleGrid,
    Button,
    BackgroundImage,
    Card,
    Image,
    Center,
    Box,
} from '@mantine/core'
import { useLogger, useId, useUncontrolled } from '@mantine/hooks'
import { IconCheck, IconX } from '@tabler/icons'
import { roundto } from 'roundto'
import NumberInputArrow from '../../features/number-input-arrow'
import NumberInputDigit from '../../features/number-input-digit'

import ArrowHand from '../../features/arrow-hand'
import { ImageCold, ImageHot } from '../../shared/images'
import useResizeLogic from '../../features/use-resize-logic'
import { getCookie, setCookie } from '../../shared/utils'

const TestPage = () => {
    const theme = useMantineTheme()
    const [checked, setChecked] = useState(false)
    const [hotRegNum, setHotRegNum] = useState<string>('')
    const [coldRegNum, setColdRegNum] = useState<string>('')
    const [digitHotValue, setdigitHot] = useState<number>(0)
    const [digitColdValue, setdigitCold] = useState<number>(0)
    const [arrowColdValue, setarrowCold] = useState<number>(0)
    const [arrowHotValue, setarrowHot] = useState<number>(0)

    const { reSizePx, reSize, reSizeNum } = useResizeLogic()
    const id = useId()

    //  (2.256 % 1).toFixed(3).substring(3).at(-1) => 6

    useEffect(() => {
        return () => {}
    }, [])

    function onChangedigitHot(val: number) {
        //@ts-expect-error
        let arrow = parseInt((val % 1).toFixed(3).substring(3).at(-1), 10)

        setarrowHot(arrow)
        return setdigitHot(val || 0)
    }

    /*     function onChangearrowHot(val: number) {
        setdigitHot(roundto(digitHotValue, 2, 'floor') + val / 1000)
        return setarrowHot(val)
    } */

    function onChangedigitCold(val: number) {
        //@ts-expect-error
        let arrow = parseInt((val % 1).toFixed(3).substring(3).at(-1), 10)
        setarrowCold(arrow)
        return setdigitCold(val || 0)
    }

    /*     function onChangearrowCold(val: number) {
        setdigitCold(roundto(digitColdValue, 2, 'floor') + val / 1000)
        return setarrowCold(val || 0)
    } */

    useLogger('TestPage: ', [
        'reSize: ',
        reSize,
        reSizePx,
        'cold',
        digitColdValue,
        arrowColdValue,
        'hot',
        digitHotValue,
        arrowHotValue,
    ])

    return (
        <>
            <Group position="center">
                <Switch
                    checked={checked}
                    onChange={(event) => setChecked(event.currentTarget.checked)}
                    color="blue"
                    size={reSize}
                    label="сохранять значения ввода для будущего использования"
                    description="использовать куки браузера, чтобы получить предыдущие показания счетчиков"
                    thumbIcon={
                        checked ? (
                            <IconCheck
                                size={reSizeNum / 4}
                                color={theme.colors.blue[theme.fn.primaryShade()]}
                                stroke={3}
                            />
                        ) : (
                            <IconX size={reSizeNum / 4} color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
                        )
                    }
                />
            </Group>
            <SimpleGrid cols={2} spacing={reSize}>
                <InputBase
                    size={reSize}
                    id={id}
                    label="ГВ номер счётчика"
                    mask="**-******"
                    component={InputMask}
                    // value={_value}
                    // onChange={(event) => handleChange(event.currentTarget.value)}
                ></InputBase>
                <InputBase
                    size={reSize}
                    id={id}
                    label="ХВ номер счётчика"
                    mask="**-******"
                    component={InputMask}
                ></InputBase>
                <NumberInputDigit /*@ts-expect-error как типизировать передачу свободных пропсов?  */
                    size={reSize}
                    id={id}
                    label="ГВ показания"
                    onChange={onChangedigitHot}
                    val={0 || digitHotValue}
                ></NumberInputDigit>
                <NumberInputDigit
                    /*@ts-expect-error как типизировать передачу свободных пропсов?  */
                    size={reSize}
                    id={id}
                    label="ХВ показания"
                    onChange={onChangedigitCold}
                    val={0 || digitColdValue}
                ></NumberInputDigit>
            </SimpleGrid>
            <SimpleGrid cols={2} spacing={reSize}>
                <ArrowHand arrowDeg={((arrowHotValue || 0) % 10) * 36} />
                <ArrowHand arrowDeg={((arrowColdValue || 0) % 10) * 36} />
            </SimpleGrid>

            <Center>
                <Card>
                    <SimpleGrid cols={2} spacing={reSize}>
                        <Box sx={{}}>
                            <Text
                                span
                                weight={'light'}
                                color="#bababa"
                                sx={{
                                    letterSpacing: 0.9,
                                    fontFamily: 'Tajawal, sans-serif',
                                    fontKerning: 'normal',
                                    fontSize: 32,
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: 50,
                                    left: 107,
                                }}
                            >
                                15-420772
                            </Text>
                            <Image src={ImageHot} radius="sm"></Image>

                            <Affix position={{ bottom: 820, right: 1800 }}>
                                <Text color="#000">12345.55</Text>
                            </Affix>
                        </Box>
                        <Box sx={{}}>
                            <Image src={ImageCold} radius="sm">
                                <Text color="#000">12345.55</Text>
                            </Image>
                        </Box>
                    </SimpleGrid>
                </Card>
            </Center>
        </>
    )
}

export default TestPage
