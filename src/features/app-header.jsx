import PropTypes from 'prop-types'
import { Header, Center, Flex, Burger, Text, Group, Affix, Container } from '@mantine/core'
import ToggleThemeIcon from './toggle-theme-icon'
import useResizeLogic from './use-resize-logic'

function AppHeader({ opened, setOpened }) {
    const { reSize } = useResizeLogic()

    return (
        <Container size={reSize} px={0}>
            <Flex
                direction={{ base: 'row-reverse', sm: 'row' }}
                height={{ base: 100, xs: 50 }}
                justify="center"
                align="center"
                wrap="wrap"
            >
                <Header height={{ base: 50, md: 70, lg: 90, xl: 120 }} p={reSize}>
                    <Center inline={false}>
                        <Group position="right" grow={false}>
                            {(reSize === 'xs' || reSize === 'sm') && (
                                <Text hidden={!opened} position="left" size={reSize}>
                                    {' '}
                                    Some long Application header
                                </Text>
                            )}
                            {(reSize === 'md' || reSize === 'xl' || reSize === 'lg') && (
                                <Text position="center" size={reSize}>
                                    {' '}
                                    Some long Application header
                                </Text>
                            )}
                        </Group>
                        <Group position="right" grow={false}>
                            {(reSize === 'xs' || reSize === 'sm') && (
                                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={reSize} mr="xl" />
                            )}
                            <Affix position={{ top: 20, right: 20 }}>
                                <ToggleThemeIcon size={reSize} />
                            </Affix>
                        </Group>
                    </Center>
                </Header>
            </Flex>
        </Container>
    )
}

AppHeader.propTypes = {
    opened: PropTypes.bool,
    setOpened: PropTypes.func,
}

export default AppHeader
