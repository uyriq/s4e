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

import { useLogger, useId, useColorScheme } from '@mantine/hooks'
import { IconCheck, IconX } from '@tabler/icons'
import CounterDigit from '../../features/counter-digit'
import NumberInputDigit from '../../features/number-input-digit'

import ArrowHand from '../../features/arrow-hand'
import { ImageCold, ImageHot, backNoise } from '../../shared/images'
import useResizeLogic from '../../features/use-resize-logic'
import { getCookie, setCookie } from '../../shared/utils'

const TestPage = () => {
    const theme = useMantineTheme()
    const colorval = useColorScheme() === 'light' ? theme.black : theme.white
    const [checked, setChecked] = useState(false)
    const [hotRegNum, setHotRegNum] = useState<string>('')
    const [coldRegNum, setColdRegNum] = useState<string>('')
    const [hotValue, setValHot] = useState<number>(0)
    const [digitsHot, setDigitsHot] = useState<number[]>([])
    const [digitsCold, setDigitsCold] = useState<number[]>([])

    const [coldValue, setValCold] = useState<number>(0)
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
        let arrow = parseInt((val % 1).toFixed(4).substring(4).at(-1), 10)

        setarrowHot(arrow)
        setDigitsHot(
            (Math.trunc(val) + (val % 1).toFixed(3).slice(1))
                .padStart(9, '0')
                .split('')
                .map(Number)
                .filter((x) => {
                    // eslint-disable-next-line no-self-compare
                    return x === x || x === 0
                })
        )
        return setValHot(val || 0)
    }

    /*     function onChangearrowHot(val: number) {
        setdigitHot(roundto(digitHotValue, 2, 'floor') + val / 1000)
        return setarrowHot(val)
        ('541.312'.toString().padStart(9, '0').split('').map(Number)).filter(x=>{return x===x || x===0})
        (Math.trunc(val)+(val%1).toFixed(3).slice(1)).padStart(9,'0')
    } */

    function onChangedigitCold(val: number) {
        //@ts-expect-error
        let arrow = parseInt((val % 1).toFixed(4).substring(4).at(-1), 10)
        setarrowCold(arrow)
        setDigitsCold(
            (Math.trunc(val) + (val % 1).toFixed(3).slice(1))
                .padStart(9, '0')
                .split('')
                .map(Number)
                .filter((x) => {
                    // eslint-disable-next-line no-self-compare
                    return x === x || x === 0
                })
        )

        return setValCold(val || 0)
    }

    /*     function onChangearrowCold(val: number) {
        setdigitCold(roundto(digitColdValue, 2, 'floor') + val / 1000)
        return setarrowCold(val || 0)

         const zeroLength = 3;

 console.log('9'.padStart(zeroLength, '0'));
 var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number)
console.log(realDigits);
    } */

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
    ])

    return (
        <>
            <Group position="center">
                <Switch
                    checked={checked}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setChecked(event.currentTarget.checked)}
                    color="blue"
                    size={reSize}
                    label="сохранять введенные значения"
                    description="чтобы получить начальные показания счетчиков, используются куки браузера, "
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
                    value={'' || hotRegNum}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setHotRegNum(event.currentTarget.value)}
                ></InputBase>
                <InputBase
                    size={reSize}
                    id={id}
                    label="ХВ номер счётчика"
                    mask="**-******"
                    component={InputMask}
                    value={'' || coldRegNum}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setColdRegNum(event.currentTarget.value)}
                ></InputBase>
                <NumberInputDigit /*@ts-expect-error как типизировать передачу свободных пропсов?  */
                    size={reSize}
                    id={id}
                    label="ГВ показания"
                    description="четвертая цифра после запятой двигает стрелочку"
                    onChange={onChangedigitHot}
                    val={0 || hotValue}
                ></NumberInputDigit>
                <NumberInputDigit
                    /*@ts-expect-error как типизировать передачу свободных пропсов?  */
                    size={reSize}
                    id={id}
                    label="ХВ показания"
                    description="четвертая цифра после запятой двигает стрелочку"
                    onChange={onChangedigitCold}
                    val={0 || coldValue}
                ></NumberInputDigit>
            </SimpleGrid>
            <SimpleGrid cols={2} spacing={reSize}>
                <ArrowHand arrowDeg={((arrowHotValue || 0) % 10) * 36} />
                <ArrowHand color={colorval} arrowDeg={((arrowColdValue || 0) % 10) * 36} />
            </SimpleGrid>

            <Center>
                <Card>
                    <SimpleGrid cols={2} spacing={reSize}>
                        <Box sx={{}}>
                            {' '}
                            <CounterDigit
                                color="#4f4848"
                                sx={{
                                    letterSpacing: 0.1,
                                    opacity: 0.3,
                                    fontFamily: 'Tajawal, sans-serif',
                                    fontKerning: 'normal',
                                    fontSize: 34,
                                    top: 56,
                                    left: 136,
                                    zIndex: 10,
                                    position: 'absolute',
                                    backdropFilter: 'blur(1px)',
                                    textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                                }}
                            >
                                {hotRegNum}
                            </CounterDigit>
                            <Box sx={{ position: 'absolute', zIndex: 11, opacity: 0.5, top: 200, left: 265 }}>
                                {/* стрелка hot   */}
                                <ArrowHand
                                    color="#973341"
                                    arrowDeg={((arrowHotValue || 0) % 10) * 36}
                                    /* @ts-expect-error */
                                    sx={{
                                        opacity: 0.9,
                                        position: 'absolute',
                                        backdropFilter: 'blur(1px)',
                                        textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                                    }}
                                />
                            </Box>
                            <CounterDigit top={116} left={106}>
                                {digitsHot[0]}
                            </CounterDigit>
                            <CounterDigit top={116} left={134}>
                                {digitsHot[1]}
                            </CounterDigit>
                            <CounterDigit top={116} left={162}>
                                {digitsHot[2]}
                            </CounterDigit>
                            <CounterDigit top={116} left={190}>
                                {digitsHot[3]}
                            </CounterDigit>
                            <CounterDigit top={116} left={218}>
                                {digitsHot[4]}
                            </CounterDigit>
                            {/* после запятой  */}
                            <CounterDigit top={116} left={242}>
                                {digitsHot[5]}
                            </CounterDigit>
                            <CounterDigit top={116} left={270}>
                                {digitsHot[6]}
                            </CounterDigit>
                            <CounterDigit top={116} left={298}>
                                {digitsHot[7]}
                            </CounterDigit>
                            <Image src={ImageHot} radius="xs"></Image>
                        </Box>
                        <Box sx={{}}>
                            <CounterDigit
                                color="#4f4848"
                                sx={{
                                    letterSpacing: 0.1,
                                    opacity: 0.3,
                                    fontFamily: 'Tajawal, sans-serif',
                                    fontKerning: 'normal',
                                    fontSize: 33,
                                    zIndex: 10,
                                    position: 'absolute',
                                    top: 64,
                                    left: 554,
                                    backdropFilter: 'blur(1px)',
                                    textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                                }}
                            >
                                {coldRegNum}
                            </CounterDigit>

                            <Box sx={{ position: 'absolute', zIndex: 11, opacity: 0.6, top: 200, left: 699 }}>
                                {/* стрелка cold   */}
                                <ArrowHand
                                    color="#9b4444"
                                    arrowDeg={((arrowColdValue || 0) % 10) * 36}
                                    /* @ts-expect-error */
                                    sx={{
                                        opacity: 0.9,
                                        position: 'absolute',

                                        backdropFilter: 'blur(1px)',
                                        textShadow: '1px 1px 1px rgba(0,0,0,1), -1px -1px 0 rgba(255,255,255,.1)',
                                    }}
                                />
                            </Box>
                            <CounterDigit top={122} left={534}>
                                {digitsCold[0]}
                            </CounterDigit>
                            <CounterDigit top={122} left={563}>
                                {digitsCold[1]}
                            </CounterDigit>
                            <CounterDigit top={122} left={591}>
                                {digitsCold[2]}
                            </CounterDigit>
                            <CounterDigit top={122} left={618}>
                                {digitsCold[3]}
                            </CounterDigit>
                            <CounterDigit top={122} left={644}>
                                {digitsCold[4]}
                            </CounterDigit>
                            {/* после запятой  */}
                            <CounterDigit top={122} left={671}>
                                {digitsCold[5]}
                            </CounterDigit>
                            <CounterDigit top={122} left={697}>
                                {digitsCold[6]}
                            </CounterDigit>
                            <CounterDigit top={122} left={724}>
                                {digitsCold[7]}
                            </CounterDigit>
                            <Image src={ImageCold} radius="xs"></Image>
                        </Box>
                    </SimpleGrid>
                </Card>
            </Center>
        </>
    )
}

export default TestPage
