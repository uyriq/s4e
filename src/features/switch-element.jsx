import { useState } from 'react'
import { Switch, useMantineTheme } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons'
import useResizeLogic from './use-resize-logic'

const SwithElement = () => {
    const theme = useMantineTheme()
    const [checked, setChecked] = useState(false)
    const { reSize, reSizeNum } = useResizeLogic()

    return (
        <Switch
            checked={checked}
            // : React.ChangeEvent<HTMLInputElement>
            onChange={(event) => setChecked(event.currentTarget.checked)}
            color="blue"
            size={reSize}
            labelPosition="right"
            label="сохранять введенные значения"
            /* только на большом экране подсказка */
            description={reSizeNum > 64 ? 'получить начальные показания счетчиков, из кук браузера' : ''}
            thumbIcon={
                checked ? (
                    <IconCheck size={reSizeNum / 4} color={theme.colors.blue[theme.fn.primaryShade()]} stroke={3} />
                ) : (
                    <IconX size={reSizeNum / 4} color={theme.colors.red[theme.fn.primaryShade()]} stroke={3} />
                )
            }
        />
    )
}

export default SwithElement
