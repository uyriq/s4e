import { Text } from '@mantine/core'
import PropTypes from 'prop-types'

const ControlledCounterDigit = (props) => {
    const {
        spaceBetween = 20,
        digitsArray = [],
        color = '#d9480f',
        top = 0,
        left = 0,
        onChange,
        ...restofProps
    } = props

    return (
        <div>
            {digitsArray.map((number, index) => (
                <Text
                    key={index}
                    span
                    weight={'light'}
                    color={color}
                    sx={{
                        position: 'absolute',
                        top: top,
                        left: left + spaceBetween * index,
                        letterSpacing: 0.1,
                        opacity: 0.9,
                        fontFamily: 'Tajawal, sans-serif',
                        fontKerning: 'normal',
                        fontSize: 32,
                        zIndex: 10,
                        backdropFilter: 'blur(1px)',
                        textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
                    }}
                    {...restofProps}
                >
                    {number}
                </Text>
            ))}
        </div>
    )
}

ControlledCounterDigit.propTypes = {
    digitsArray: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])).isRequired,
    spaceBetween: PropTypes.number,
    left: PropTypes.number,
    top: PropTypes.number,
    color: PropTypes.string,
    onChange: PropTypes.func,
    sx: PropTypes.shape({
        letterSpacing: PropTypes.number,
        opacity: PropTypes.number,
        fontFamily: PropTypes.string,
        fontKerning: PropTypes.string,
        fontSize: PropTypes.number,
        zIndex: PropTypes.number,
        position: PropTypes.string,
        top: PropTypes.number,
        left: PropTypes.number,
        backdropFilter: PropTypes.string,
        textShadow: PropTypes.string,
    }),
}

export default ControlledCounterDigit
