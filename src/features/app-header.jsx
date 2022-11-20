import PropTypes from 'prop-types'
import { Header, MediaQuery, Burger, Text, Group, Container } from '@mantine/core'
import ToggleThemeIcon from './toggle-theme-icon'
import useResizeLogic from './use-resize-logic'

function AppHeader({ opened, setOpened }) {
    const { reSize } = useResizeLogic()

    return (
        <Container size={reSize} px={0}>
            <Header height={{ base: 50, md: 70 }} p="md">
                <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                        <Burger opened={opened} onClick={() => setOpened((o) => !o)} size="sm" mr="xl" />
                    </MediaQuery>

                    <Text hidden={!opened}> Some long Application header</Text>
                </div>
                <Group position="right" spacing={reSize}>
                    <ToggleThemeIcon />
                </Group>
            </Header>
        </Container>
    )
}

AppHeader.propTypes = {
    opened: PropTypes.bool,
    setOpened: PropTypes.func,
}

export default AppHeader
