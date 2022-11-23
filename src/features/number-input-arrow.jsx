import { NumberInput } from '@mantine/core'

import PropTypes from 'prop-types'

const NumberInputArrow = (props) => {
    const { val = 0, onChange, ...restofProps } = props
    return (
        <NumberInput
            {...restofProps}
            value={val}
            min={0}
            max={10}
            stepHoldDelay={500}
            stepHoldInterval={100}
            step={0.1}
            precision={1}
            onChange={onChange}
        />
    )
}

NumberInputArrow.propTypes = {
    restofProps: PropTypes.element,
    onChange: PropTypes.func.isRequired,
    val: PropTypes.number.isRequired,
}

export default NumberInputArrow
