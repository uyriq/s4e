import PropTypes from 'prop-types'
import { Header, MediaQuery, Burger, Text, Group, Container } from '@mantine/core'
import ToggleThemeIcon from './toggle-theme-icon'
import useResizeLogic from './use-resize-logic'

function AppHeader({ opened, setOpened }) {
    const { reSize } = useResizeLogic()

    return (
        <Container size={reSize} px={0}>
            <Header height={{ base: 50, md: 70 }} p="md" sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                <Group position="right" spacing={reSize}>
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        {' '}
                        {(reSize === 'xs' || reSize === 'sm') && (
                            <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={reSize} mr="xl" />
                        )}
                        <ToggleThemeIcon size={reSize} mr="xl" />
                    </div>

                    {(reSize === 'xs' || reSize === 'sm') && (
                        <Text hidden={!opened} position="left">
                            {' '}
                            Some long Application header
                        </Text>
                    )}
                    {(reSize === 'md' || reSize === 'xl' || reSize === 'lg') && (
                        <Text position="center"> Some long Application header</Text>
                    )}
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
