import PropTypes from 'prop-types'
import { Header, Section, Group, Button, MediaQuery, Burger, Text } from '@mantine/core'

function CustomHeader({ opened, setOpened }) {
    return (
        <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                    <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
                </MediaQuery>

                <Text hidden={!opened}> Some long Application header</Text>
            </div>
        </Header>
    )
}

CustomHeader.propTypes = {
    opened: PropTypes.bool,
    setOpened: PropTypes.func,
}

export default CustomHeader
