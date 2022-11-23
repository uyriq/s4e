import { NumberInput } from '@mantine/core'

import PropTypes from 'prop-types'

const NumberInputArrow = ({ val = 0, onChange }) => {
    return (
        <NumberInput
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
    onChange: PropTypes.func,
    val: PropTypes.number,
}

export default NumberInputArrow
