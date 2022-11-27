import { Text } from '@mantine/core'
import PropTypes from 'prop-types'

const CounterText = (props) => {
    const { children, color = '#4f4848', top = 0, left = 0, onChange, ...restofProps } = props

    const sx = props.sx || {
        letterSpacing: 0.1,
        opacity: 0.9,
        fontFamily: 'Tajawal, sans-serif',
        fontKerning: 'normal',
        fontSize: 28,
        zIndex: 10,
        position: 'absolute',
        top: top,
        left: left,
        backdropFilter: 'blur(1px)',
        textShadow: '1px 1px 1px rgba(0,0,0,.4), -1px -1px 0 rgba(255,255,255,.1)',
    }

    return (
        <Text span weight={'light'} color={color} sx={sx} {...restofProps}>
            {children}
        </Text>
    )
}

CounterText.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
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

export default CounterText
