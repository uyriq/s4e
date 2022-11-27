import { NumberInput } from '@mantine/core'

import PropTypes from 'prop-types'

const NumberInputDigit = (props) => {
    const { val = 0, onChange, ...restofProps } = props
    return (
        <NumberInput
            {...restofProps}
            value={val}
            min={0}
            max={99999}
            stepHoldDelay={500}
            stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
            step={0.001}
            precision={4}
            decimalSeparator=","
            onChange={onChange}
        />
    )
}

NumberInputDigit.propTypes = {
    restofProps: PropTypes.element,
    onChange: PropTypes.func.isRequired,
    val: PropTypes.number.isRequired,
}

export default NumberInputDigit
