import PropTypes from 'prop-types'
const ArrowHand = (props) => {
    const { arrowDeg } = 0 || props
    const r = `rotate(${arrowDeg} 45 45)`
    return (
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="#F93A46" transform={r}>
                <path
                    d="M39.1139 59.5181C47.2654 62.0847 56.0453 57.3544 58.7036 48.9119C61.3619 40.4693 56.8759 31.562 48.7244 28.9954C40.573 26.4288 31.793 31.1591 29.1347 39.6016C26.4764 48.0442 30.9624 56.9515 39.1139 59.5181 M48.5612 30.7586L43.899 7.27423L37.3446 31.4204L48.5612 30.7586Z"
                    fill="#F93A46"
                    stroke="#F93A46"
                />
            </g>
        </svg>
    )
}
ArrowHand.propTypes = {
    arrowDeg: PropTypes.number,
}

export default ArrowHand
