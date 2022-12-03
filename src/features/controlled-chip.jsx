import PropTypes from 'prop-types'
import { Chip } from '@mantine/core'

function ChipControlled({ text = 'имя файла', checked, setChecked }) {
    const mappedText = checked ? text + ' - рандом' : '\xa0\xa0' + text + ' - датой\xa0'
    return (
        <Chip checked={checked} onChange={() => setChecked((v) => !v)}>
            {mappedText}
        </Chip>
    )
}

ChipControlled.propTypes = {
    checked: PropTypes.bool,
    setChecked: PropTypes.func,
    text: PropTypes.string,
}

export default ChipControlled
