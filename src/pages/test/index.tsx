// главная

import { useState } from 'react'
import InputMask from 'react-input-mask-next'
import { Text, Switch, Group, useMantineTheme, InputBase, SimpleGrid } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons'
import { useLogger, useId } from '@mantine/hooks'
import NumberInputArrow from '../../features/number-input-arrow'
import ArrowHand from '../../features/arrow-hand'
import useResizeLogic from '../../features/use-resize-logic'

const TestPage = () => {
    const theme = useMantineTheme()
    const [checked, setChecked] = useState(false)
    const [digitHotValue, setdigitHot] = useState<number>(0)
    const [digitColdValue, setdigitCold] = useState<number>(0)
    const { reSizePx, reSize, reSizeNum } = useResizeLogic()
    const id = useId()

    function onChangeHot(val: number) {
        return setdigitHot((val || 0) % 10)
    }

    function onChangeCold(val: number) {
        return setdigitCold((val || 0) % 10)
    }

    useLogger('TestPage: ', ['reSize: ', reSize, reSizePx])

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
                    mask="99-999999"
                    component={InputMask}
                ></InputBase>
                <InputBase
                    size={reSize}
                    id={id}
                    label="ХВ номер счётчика"
                    mask="99-999999"
                    component={InputMask}
                ></InputBase>
                <InputBase
                    size={reSize}
                    id={id}
                    label="ГВ показания"
                    mask="99999,999"
                    component={InputMask}
                ></InputBase>
                <InputBase
                    size={reSize}
                    id={id}
                    label="ХВ показания"
                    mask="99999,999"
                    component={InputMask}
                ></InputBase>
                <NumberInputArrow
                    /*@ts-expect-error как типизировать передачу свободных пропсов?  */
                    label="после запятой, последняя из трех, цифра счетчика"
                    onChange={onChangeHot}
                    val={0 || digitHotValue}
                />
                <NumberInputArrow
                    onChange={onChangeCold}
                    val={0 || digitColdValue}
                    /*@ts-expect-error как типизировать передачу свободных пропсов?  */
                    label="после запятой, последняя из трех цифра счетчика"
                />
            </SimpleGrid>
            <SimpleGrid cols={2} spacing={reSize}>
                <ArrowHand arrowDeg={(digitHotValue || 0) * 36} />
                <ArrowHand arrowDeg={(digitColdValue || 0) * 36} />
            </SimpleGrid>
            <Text size={reSize}> </Text>
        </>
    )
}

export default TestPage
