import PropTypes from 'prop-types'

// eslint-disable-next-line import/prefer-default-export
function ControlledInput({ value, onValueChange, ...rest }) {
    if (value.split('').at(-1) === ',') {
        // eslint-disable-next-line no-param-reassign
        value += ' '
    }
    return <input value={value} onChange={({ target: { value } }) => onValueChange(value)} {...rest} />
}

ControlledInput.propTypes = {
    onValueChange: PropTypes.func,
    value: PropTypes.element,
}

/* example

// eslint-disable-next-line import/prefer-default-export
export function FormInput() {
    const [value, setValue] = React.useState('')
    return <ControlledInput type="text" placeholder="Insert some text here..." value={value} onValueChange={setValue} />
}
*/
