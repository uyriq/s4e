// главная

import { useState, useEffect, useRef, memo } from 'react'
// import useResizeObserver from "use-resize-observer";
import InputMask from 'react-input-mask-next'
import {
    Tooltip,
    createStyles,
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
    Container,
    Space,
    Grid,
} from '@mantine/core'

import { useLogger, useId, useColorScheme, useLocalStorage } from '@mantine/hooks'
import useResizeObserver from 'use-resize-observer'

import useScreenshot from 'features/use-screenshot'
import CounterText from '../../features/counter-text'

import ControlledCounterDigit from 'features/controlled-counter-digit'
import NumberInputDigit from '../../features/number-input-digit'

import ArrowHand from '../../features/arrow-hand'
import { ImageCold, ImageHot, backNoise } from '../../shared/images'
import useResizeLogic from '../../features/use-resize-logic'
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next'

const TestPage = memo(() => {
    const [isRandomFname] = useLocalStorage({ key: 'isRandomFname' })

    const buttonRef = useRef(null)
    const [hotRegNum, setHotRegNum] = useState<string>('')
    const [coldRegNum, setColdRegNum] = useState<string>('')
    const [hotValue, setValHot] = useState<number>(0)
    const [digitsHot, setDigitsHot] = useState<number[]>([])
    const [digitsCold, setDigitsCold] = useState<number[]>([])

    const [coldValue, setValCold] = useState<number>(0)
    const [arrowColdValue, setarrowCold] = useState<number>(0)
    const [arrowHotValue, setarrowHot] = useState<number>(0)

    const { reSizePx, reSize } = useResizeLogic()
    const id = useId()

    const { ref: wrapperRef, width, height } = useResizeObserver<HTMLDivElement>()
    //@ts-expect-errors
    const hk = width >= 648 ? 0.29 : 0.155
    //@ts-expect-errors
    const wk = width >= 648 ? 410 / width : 400 / width

    const { generateImage, captureRef1, captureRef2, status } = useScreenshot()

    const useStyles = createStyles((theme) => ({
        leftBox: {
            backgroundImage: `linear-gradient(20deg, transparent, 'blue', 'red', 'orange', 'cyan', 'white'))`,
            position: 'relative',
            minWidth: 100,
        },
        rightBox: {
            backgroundImage: `linear-gradient(20deg, transparent, 'blue', 'red', 'orange', 'cyan', 'white'))`,
            position: 'relative',
            minWidth: 100,
        },
    }))

    const { classes } = useStyles()

    function onChangedigitHot(val: number) {
        if (val > 99999) val = 99999 // потолок
        //@ts-expect-error
        let arrow = parseInt((val % 1).toFixed(4).substring(4).at(-1), 10) % 10
        setarrowHot(arrow)
        setDigitsHot(
            (Math.trunc(val) + ((val - arrow / 10000) % 1).toFixed(3).slice(1))
                .padStart(9, '0')
                .split('')
                .map(Number)
                .filter((x: number) => {
                    // eslint-disable-next-line no-self-compare
                    return x === x || x === 0
                })
        )
        return setValHot(val || 0)
    }

    function onChangedigitCold(val: number) {
        if (val > 99999) val = 99999 // потолок
        //@ts-expect-error
        let arrow = parseInt((val % 1).toFixed(4).substring(4).at(-1), 10) % 10
        setarrowCold(arrow)
        setDigitsCold(
            (Math.trunc(val) + ((val - arrow / 10000) % 1).toFixed(3).slice(1))
                .padStart(9, '0')
                .split('')
                .map(Number)
                .filter((x: number) => {
                    // eslint-disable-next-line no-self-compare
                    return x === x || x === 0
                })
        )

        return setValCold(val || 0)
    }

    useLogger('TestPage: ', [
        'reSize: ',
        reSize,
        reSizePx,
        'cold',
        coldValue,
        arrowColdValue,
        'hot',
        hotValue,
        arrowHotValue,
        'digits',
        digitsHot,
        'sizes',
        width,
        height,
        isRandomFname,
    ])
    /*@ts-expect-error
    тюнинг-стиль на мобильных
    */
    /*@ts-expect-error*/
    const forspan = width < 600 ? 'content' : 'auto'

    useEffect(() => {
        /*@ts-expect-error*/
        buttonRef.current.click()
        /* ⬆️ ворк-о'раунд,
        fixed issue #1 исправить асинхрон useState в useScreenshot (https://www.reddit.com/r/javascript/comments/4rutq2/comment/d54chcb/) */
        return () => {}
    }, [isRandomFname])

    return (
        <>
            <Container ref={wrapperRef}>
                <Center>
                    <Box
                        sx={{
                            alignContent: 'center',
                        }}
                    >
                        <Grid align="center" justify={'center'}>
                            <Grid.Col span={forspan}>
                                <InputBase
                                    p={25}
                                    size={reSize}
                                    id={id}
                                    label="ГВ номер счётчика"
                                    mask="**-******"
                                    component={InputMask}
                                    value={'' || hotRegNum}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setHotRegNum(event.currentTarget.value)
                                    }
                                ></InputBase>
                                <Tooltip label="четвертая цифра после запятой двигает стрелочку">
                                    <NumberInputDigit /*@ts-expect-error */
                                        p={25}
                                        decimalSeparator=","
                                        size={reSize}
                                        id={id}
                                        label="ГВ показания"
                                        onChange={onChangedigitHot}
                                        val={hotValue}
                                    ></NumberInputDigit>
                                </Tooltip>
                                <Box
                                    /* @ts-expect-error */
                                    ref={captureRef1}
                                    className={classes.leftBox}
                                >
                                    {/* номер hot   */}
                                    <CounterText
                                        color="#4f4848"
                                        sx={{
                                            letterSpacing: 0.1,
                                            opacity: 0.3,
                                            fontFamily: 'Tajawal, sans-serif',
                                            fontKerning: 'normal',
                                            fontSize: 34,
                                            /*@ts-expect-error */
                                            top: (0.52 * hk * height) / 2,
                                            /*@ts-expect-error */
                                            left: (1.25 * wk * width) / 4,
                                            zIndex: 10,
                                            position: 'absolute',
                                            backdropFilter: 'blur(1px)',
                                            textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                                        }}
                                    >
                                        {hotRegNum}
                                    </CounterText>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 11,
                                            opacity: 0.8,
                                            /*@ts-expect-error */
                                            top: (1.75 * hk * height) / 2,
                                            /*@ts-expect-error */
                                            left: (2.6 * wk * width) / 4,
                                        }}
                                    >
                                        {/* стрелка hot   */}
                                        <ArrowHand
                                            color="#973341"
                                            arrowDeg={((arrowHotValue || 0) % 10) * 36}
                                            /* @ts-expect-error */
                                            sx={{
                                                opacity: 0.9,
                                                position: 'absolute',
                                                backdropFilter: 'blur(1px)',
                                                textShadow:
                                                    '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                                            }}
                                        />
                                    </Box>
                                    <ControlledCounterDigit
                                        /*@ts-expect-error */
                                        top={(hk * height) / 2}
                                        /*@ts-expect-error */
                                        left={(10 + wk * width) / 4}
                                        /*@ts-expect-error  */
                                        spaceBetween={27 - 1 * Number(!!(width < 648))}
                                        digitsArray={digitsHot}
                                        color="#4f4848"
                                    />
                                    <Image
                                        p={10}
                                        fit="contain"
                                        src={ImageHot}
                                        radius="xs"
                                        withPlaceholder
                                        placeholder={<Text align="center">Счетчик горячей воды</Text>}
                                        caption="Счетчик горячей воды"
                                    ></Image>
                                </Box>
                                <Center>
                                    <Button
                                        ref={buttonRef}
                                        loading={status === 'loading'}
                                        onClick={(e: React.SyntheticEvent) => generateImage(e, 1, isRandomFname)}
                                    >
                                        Скачать
                                    </Button>
                                </Center>
                            </Grid.Col>
                            <Grid.Col span={forspan}>
                                <InputBase
                                    p={25}
                                    size={reSize}
                                    id={id}
                                    label="ХВ номер счётчика"
                                    mask="**-******"
                                    component={InputMask}
                                    value={'' || coldRegNum}
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                        setColdRegNum(event.currentTarget.value)
                                    }
                                ></InputBase>
                                <Tooltip label="четвертая цифра после запятой двигает стрелочку">
                                    <NumberInputDigit
                                        /*@ts-expect-error */
                                        size={reSize}
                                        p={25}
                                        id={id}
                                        label="ХВ показания"
                                        onChange={onChangedigitCold}
                                        val={0 || coldValue}
                                    ></NumberInputDigit>
                                </Tooltip>
                                {/* eslint-disable @typescript-eslint/no-unused-vars */}
                                {/* @ts-ignore */}
                                <Box
                                    /*@ts-expect-error */
                                    ref={captureRef2}
                                    className={classes.rightBox}
                                >
                                    {/* номер cold   */}
                                    <CounterText
                                        color="#4f4848"
                                        sx={{
                                            letterSpacing: 0.1,
                                            opacity: 0.3,
                                            fontFamily: 'Tajawal, sans-serif',
                                            fontKerning: 'normal',
                                            fontSize: 33,
                                            zIndex: 10,
                                            position: 'absolute',
                                            /*@ts-expect-error */
                                            top: (0.6 * hk * height) / 2,
                                            /*@ts-expect-error */
                                            left: (1.32 * wk * width) / 4,
                                            backdropFilter: 'blur(1px)',
                                            textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                                        }}
                                    >
                                        {coldRegNum}
                                    </CounterText>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            zIndex: 11,
                                            opacity: 0.9,
                                            /*@ts-expect-error */
                                            top: (1.76 * hk * height) / 2,
                                            /*@ts-expect-error */
                                            left: (2.7 * wk * width) / 4,
                                        }}
                                    >
                                        {/* стрелка cold   */}
                                        <ArrowHand
                                            color="#9b4444"
                                            arrowDeg={((arrowColdValue || 0) % 10) * 36}
                                            /* @ts-expect-error */
                                            sx={{
                                                opacity: 0.9,
                                                position: 'absolute',
                                                backdropFilter: 'blur(1px)',
                                                textShadow:
                                                    '1px 1px 1px rgba(0,0,0,1), -1px -1px 0 rgba(255,255,255,.1)',
                                            }}
                                        />
                                    </Box>
                                    <ControlledCounterDigit
                                        /*@ts-expect-error */
                                        top={(1.07 * hk * height) / 2}
                                        /*@ts-expect-error */
                                        left={(15 + wk * width) / 4}
                                        /*@ts-expect-error*/
                                        spaceBetween={27 - 1 * Number(!!(width < 648))}
                                        digitsArray={digitsCold}
                                        color="#4f4848"
                                    />
                                    <Image
                                        p={10}
                                        fit="contain"
                                        src={ImageCold}
                                        radius="xs"
                                        withPlaceholder
                                        placeholder={<Text align="center">Счетчик холодной воды</Text>}
                                        caption="Счетчик холодной воды"
                                    ></Image>
                                </Box>
                                <Center>
                                    <Button
                                        loading={status === 'loading'}
                                        onClick={(e: React.SyntheticEvent) => generateImage(e, 2, isRandomFname)}
                                    >
                                        Скачать
                                    </Button>
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Box>
                </Center>
            </Container>
        </>
    )
})

TestPage.displayName = 'TestPage'
export default TestPage
